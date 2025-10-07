from . import db
from sqlalchemy.dialects.postgresql import UUID, JSONB
import uuid

class Quote(db.Model):
    __tablename__ = 'quotes'

    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    # Asumiendo un futuro modelo de Cliente
    # cliente_id = db.Column(UUID(as_uuid=True), db.ForeignKey('clients.id'), nullable=False)
    estatus = db.Column(db.String(50), nullable=False, default='solicitada', index=True)
    items = db.Column(JSONB, nullable=False) # Ejemplo: [{'producto_id': '...', 'cantidad': 10}]
    opciones_propuestas = db.Column(JSONB, nullable=True) # Almacenará las 3 opciones generadas
    opcion_seleccionada_id = db.Column(db.String(100), nullable=True)
    fecha_solicitud = db.Column(db.DateTime, server_default=db.func.now())
    fecha_propuesta = db.Column(db.DateTime, nullable=True)
    fecha_decision_cliente = db.Column(db.DateTime, nullable=True)
    
    def to_dict(self):
        return {
            'id': str(self.id),
            'estatus': self.estatus,
            'items': self.items,
            'opciones_propuestas': self.opciones_propuestas,
            'opcion_seleccionada_id': self.opcion_seleccionada_id,
            'fecha_solicitud': self.fecha_solicitud.isoformat() if self.fecha_solicitud else None,
            'fecha_propuesta': self.fecha_propuesta.isoformat() if self.fecha_propuesta else None
        }
