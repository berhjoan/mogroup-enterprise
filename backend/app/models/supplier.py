from app.app import db
import uuid
from sqlalchemy.dialects.postgresql import UUID

class Supplier(db.Model):
    __tablename__ = 'suppliers'
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = db.Column(db.String(150), nullable=False, unique=True)
    ruc = db.Column(db.String(50), unique=True)
    is_active = db.Column(db.Boolean, default=True)

    def to_dict(self):
        return { 'id': str(self.id), 'name': self.name, 'ruc': self.ruc, 'is_active': self.is_active }
