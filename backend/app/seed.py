import json
from . import db
from .models import Provider, Product, ProductOffer

CATEGORIES = [
  "Biodegradables","Desinfectantes","Detergentes","Aseo personal",
  "Cafetería","Desechables","Cartón y plástico","Limpieza",
  "Herramientas","Oficina","Computación","Hotelería"
]

SEED_PRODUCTS = [
  {"sku":"BIO-001","name":"Vasos biodegradables 8oz","category":"Biodegradables"},
  {"sku":"DES-010","name":"Alcohol 70% 1L","category":"Desinfectantes"},
  {"sku":"DET-021","name":"Detergente industrial 5L","category":"Detergentes"},
  {"sku":"OFF-101","name":"Resmas papel carta","category":"Oficina"},
  {"sku":"HOT-050","name":"Sábanas hotel 300 hilos","category":"Hotelería"},
]

def seed_data(db, force=False):
    if force:
        ProductOffer.query.delete()
        Product.query.delete()
        Provider.query.delete()
        db.session.commit()
    # Proveedores
    g = Provider(name="GLOBAL IMPORTS", is_active=True)
    a = Provider(name="AGENCIA LOPEZ", is_active=True)
    db.session.add_all([g,a]); db.session.commit()
    # Productos
    items = []
    for p in SEED_PRODUCTS:
        items.append(Product(sku=p["sku"], name=p["name"], category=p["category"], description=p["name"]))
    db.session.add_all(items); db.session.commit()
    # Ofertas de proveedores
    prods = {p.sku:p for p in Product.query.all()}
    offers = [
      ProductOffer(product_id=prods["BIO-001"].id, provider_id=g.id, price=0, available=True),
      ProductOffer(product_id=prods["BIO-001"].id, provider_id=a.id, price=0, available=True),
      ProductOffer(product_id=prods["DES-010"].id, provider_id=g.id, price=0, available=True),
      ProductOffer(product_id=prods["DET-021"].id, provider_id=a.id, price=0, available=True),
      ProductOffer(product_id=prods["OFF-101"].id, provider_id=g.id, price=0, available=True),
      ProductOffer(product_id=prods["HOT-050"].id, provider_id=a.id, price=0, available=True),
    ]
    db.session.add_all(offers); db.session.commit()
