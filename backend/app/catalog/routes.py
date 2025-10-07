from flask import Blueprint, jsonify, request
from ..models import Product
from .. import db

catalog_bp = Blueprint("catalog", __name__, url_prefix="/api/v1/catalog")

@catalog_bp.route("/categories", methods=["GET"])
def categories():
    cats = db.session.query(Product.category).distinct().all()
    out = sorted([c[0] for c in cats if c[0]])
    return jsonify(out)

@catalog_bp.route("/products", methods=["GET"])
def products():
    q = Product.query
    cat = request.args.get("category")
    if cat:
        q = q.filter(Product.category==cat)
    items = q.limit(500).all()
    return jsonify([{
        "id": str(p.id),"sku":p.sku,"name":p.name,"category":p.category,
        "description":p.description,"image_url":p.image_url
    } for p in items])
