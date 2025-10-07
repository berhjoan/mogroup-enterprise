from . import db
from sqlalchemy.dialects.postgresql import UUID, JSONB
import uuid

class Product(db.Model):
    __tablename__ = 'products'

    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    sku_interno = db.Column(db.String(50), unique=True, nullable=False, index=True)
    nombre_normalizado = db.Column(db.String(255), nullable=False)
    descripcion = db.Column(db.Text, nullable=True)
    marca_display = db.Column(db.String(100), nullable=False, default='MOGroup')
    # Asumiendo que tendremos modelos para Categoria en el futuro
    # categoria_id = db.Column(UUID(as_uuid=True), db.ForeignKey('categories.id'), nullable=False)
    atributos = db.Column(JSONB, nullable=True)
    unidad_medida = db.Column(db.String(50), nullable=False)
    imagen_url = db.Column(db.String(512), nullable=True)
    activo = db.Column(db.Boolean, default=True, nullable=False)
    fecha_creacion = db.Column(db.DateTime, server_default=db.func.now())
    fecha_actualizacion = db.Column(db.DateTime, server_default=db.func.now(), onupdate=db.func.now())

    def to_dict(self):
        return {
            'id': str(self.id),
            'sku_interno': self.sku_interno,
            'nombre_normalizado': self.nombre_normalizado,
            'descripcion': self.descripcion,
            'marca_display': self.marca_display,
            'atributos': self.atributos,
            'unidad_medida': self.unidad_medida,
            'imagen_url': self.imagen_url,
            'activo': self.activo,
            'fecha_creacion': self.fecha_creacion.isoformat() if self.fecha_creacion else None
        }
