from . import db
from sqlalchemy.dialects.postgresql import UUID, JSONB
import uuid

class Provider(db.Model):
    __tablename__ = 'providers'

    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    razon_social = db.Column(db.String(255), nullable=False)
    rfc = db.Column(db.String(13), unique=True, nullable=False, index=True)
    contacto_principal = db.Column(JSONB, nullable=False)
    direccion_fiscal = db.Column(db.Text, nullable=True)
    onboarding_completo = db.Column(db.Boolean, default=False, nullable=False)
    activo = db.Column(db.Boolean, default=True, nullable=False)
    fecha_registro = db.Column(db.DateTime, server_default=db.func.now())
    fecha_actualizacion = db.Column(db.DateTime, server_default=db.func.now(), onupdate=db.func.now())

    def to_dict(self):
        return {
            'id': str(self.id),
            'razon_social': self.razon_social,
            'rfc': self.rfc,
            'contacto_principal': self.contacto_principal,
            'direccion_fiscal': self.direccion_fiscal,
            'onboarding_completo': self.onboarding_completo,
            'activo': self.activo,
            'fecha_registro': self.fecha_registro.isoformat() if self.fecha_registro else None
        }
