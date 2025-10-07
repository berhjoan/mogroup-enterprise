from flask import Blueprint, jsonify, request
from app.models.supplier import Supplier
from app.app import db

bp = Blueprint('suppliers', __name__, url_prefix='/api/v1/suppliers')

@bp.route('/', methods=['POST'])
def create_supplier():
    data = request.get_json()
    if not data or not 'name' in data:
        return jsonify({'error': 'El nombre del proveedor es requerido'}), 400
    
    new_supplier = Supplier(name=data['name'], ruc=data.get('ruc'))
    db.session.add(new_supplier)
    db.session.commit()
    return jsonify(new_supplier.to_dict()), 201

@bp.route('/', methods=['GET'])
def get_suppliers():
    suppliers = Supplier.query.all()
    return jsonify([s.to_dict() for s in suppliers])
