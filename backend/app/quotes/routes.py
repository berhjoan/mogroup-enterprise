import json, os, requests, decimal
from flask import Blueprint, request, jsonify
from sqlalchemy import select
from ..models import Product, Provider, ProductOffer, Quote, QuoteItem, GuardianLog
from .. import db

quotes_bp = Blueprint("quotes", __name__, url_prefix="/api/v1/quotes")

def send_whatsapp(to_number:str, text:str):
    token = os.getenv("WHATSAPP_TOKEN","")
    phone_id = os.getenv("WHATSAPP_PHONE_ID","")
    if not token or not phone_id or not to_number:
        return {"skipped": True}
    url = f"https://graph.facebook.com/v19.0/{phone_id}/messages"
    headers = {"Authorization": f"Bearer {token}","Content-Type":"application/json"}
    payload = {
        "messaging_product":"whatsapp",
        "to": to_number,
        "type":"text",
        "text": {"body": text}
    }
    try:
        r = requests.post(url, headers=headers, json=payload, timeout=15)
        return {"status": r.status_code, "body": r.text}
    except Exception as e:
        return {"error": str(e)}

@quotes_bp.route("", methods=["POST"])
def create_quote():
    data = request.get_json() or {}
    items = data.get("items", [])
    name = data.get("customer_name","")
    email = data.get("customer_email","")
    phone = data.get("customer_phone","")

    qh = Quote(customer_name=name, customer_email=email, customer_phone=phone, status="PENDING")
    db.session.add(qh); db.session.flush()

    summary = []
    for it in items:
        sku = it.get("sku"); qty = int(it.get("quantity",1))
        prod = Product.query.filter_by(sku=sku).first()
        if not prod: 
            continue
        offers = ProductOffer.query.filter_by(product_id=prod.id, available=True).all()
        # Regla: menor precio disponible (si no hay precios, seleccionar cualquiera activo)
        chosen = None
        # Si hay precios válidos (>0), elegir mínimo; si no, por orden
        priced = [o for o in offers if (o.price or decimal.Decimal(0)) > 0]
        if priced:
            chosen = sorted(priced, key=lambda x: x.price)[0]
        elif offers:
            chosen = offers[0]

        qi = QuoteItem(quote_id=qh.id, product_id=prod.id, quantity=qty)
        if chosen:
            qi.chosen_provider_id = chosen.provider_id
            qi.unit_price = chosen.price or 0
            qi.total_price = (chosen.price or 0) * qty
            # Guardián
            gl = GuardianLog(product_id=prod.id,
                             providers_considered=json.dumps([str(o.provider_id) for o in offers]),
                             chosen_provider_id=chosen.provider_id,
                             rule_applied="lowest_price",
                             estimated_sla=48,
                             margin_estimated=0,
                             reason="Regla base: costo más bajo y disponible")
            db.session.add(gl)
        db.session.add(qi)
        summary.append({"sku":sku,"qty":qty})

    db.session.commit()

    # Notificar por WhatsApp si hay número
    if phone:
        send_whatsapp(phone, f"Su solicitud de cotización {qh.id} fue recibida.")

    return jsonify({"quote_id": str(qh.id), "items": summary, "status":"RECEIVED"})
