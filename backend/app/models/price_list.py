from . import db
from sqlalchemy.dialects.postgresql import UUID
import uuid

class PriceList(db.Model):
    __tablename__ = 'price_lists'

    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    proveedor_id = db.Column(UUID(as_uuid=True), db.ForeignKey('providers.id'), nullable=False, index=True)
    producto_id = db.Column(UUID(as_uuid=True), db.ForeignKey('products.id'), nullable=False, index=True)
    sku_proveedor = db.Column(db.String(100), nullable=True)
    precio_unitario = db.Column(db.Numeric(10, 2), nullable=False)
    moneda = db.Column(db.String(3), nullable=False, default='MXN')
    fecha_inicio_vigencia = db.Column(db.DateTime, nullable=False, server_default=db.func.now())
    fecha_fin_vigencia = db.Column(db.DateTime, nullable=True)
    version = db.Column(db.Integer, nullable=False, default=1)
    activo = db.Column(db.Boolean, default=True, nullable=False)
    
    # Relaciones
    provider = db.relationship('Provider', backref=db.backref('price_lists', lazy=True))
    product = db.relationship('Product', backref=db.backref('price_lists', lazy=True))

    def to_dict(self):
        return {
            'id': str(self.id),
            'proveedor_id': str(self.proveedor_id),
            'producto_id': str(self.producto_id),
            'sku_proveedor': self.sku_proveedor,
            'precio_unitario': str(self.precio_unitario),
            'moneda': self.moneda,
            'fecha_inicio_vigencia': self.fecha_inicio_vigencia.isoformat() if self.fecha_inicio_vigencia else None,
            'fecha_fin_vigencia': self.fecha_fin_vigencia.isoformat() if self.fecha_fin_vigencia else None,
            'version': self.version,
            'activo': self.activo
        }
