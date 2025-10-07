from datetime import datetime
from sqlalchemy.dialects.postgresql import UUID
import uuid
from . import db

class Provider(db.Model):
    __tablename__ = "providers"
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = db.Column(db.String(150), nullable=False, unique=True)
    is_active = db.Column(db.Boolean, default=True)

class Product(db.Model):
    __tablename__ = "products"
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    sku = db.Column(db.String(64), unique=True, nullable=False)
    name = db.Column(db.String(200), nullable=False)
    category = db.Column(db.String(120), index=True)
    description = db.Column(db.Text)
    image_url = db.Column(db.String(500))

class ProductOffer(db.Model):
    __tablename__ = "product_offers"
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    product_id = db.Column(UUID(as_uuid=True), db.ForeignKey("products.id"), nullable=False)
    provider_id = db.Column(UUID(as_uuid=True), db.ForeignKey("providers.id"), nullable=False)
    price = db.Column(db.Numeric(12,2))
    available = db.Column(db.Boolean, default=True)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)

class Quote(db.Model):
    __tablename__ = "quotes"
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    customer_name = db.Column(db.String(150))
    customer_email = db.Column(db.String(150))
    customer_phone = db.Column(db.String(50))
    status = db.Column(db.String(30), default="PENDING")
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class QuoteItem(db.Model):
    __tablename__ = "quote_items"
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    quote_id = db.Column(UUID(as_uuid=True), db.ForeignKey("quotes.id"), nullable=False)
    product_id = db.Column(UUID(as_uuid=True), db.ForeignKey("products.id"), nullable=False)
    quantity = db.Column(db.Integer, default=1)
    chosen_provider_id = db.Column(UUID(as_uuid=True), db.ForeignKey("providers.id"))
    unit_price = db.Column(db.Numeric(12,2))
    total_price = db.Column(db.Numeric(12,2))

class GuardianLog(db.Model):
    __tablename__ = "guardian_log"
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)
    product_id = db.Column(UUID(as_uuid=True))
    providers_considered = db.Column(db.Text)  # JSON string
    chosen_provider_id = db.Column(UUID(as_uuid=True))
    rule_applied = db.Column(db.String(100))   # e.g. "lowest_price"
    estimated_sla = db.Column(db.Integer)      # horas
    margin_estimated = db.Column(db.Numeric(6,2))
    reason = db.Column(db.Text)
