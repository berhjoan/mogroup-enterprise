from flask import Blueprint, request, jsonify
from werkzeug.security import check_password_hash
import jwt
import datetime
from functools import wraps

auth_bp = Blueprint('auth', __name__)

# Configuración temporal (mover a variables de entorno)
SECRET_KEY = 'mogroup_secret_key_2025'
ADMIN_USER = 'admin'
ADMIN_PASS_HASH = 'admin20462108'  # En producción debe estar hasheado

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('Authorization')
        if not token:
            return jsonify({'message': 'Token faltante'}), 401
        try:
            token = token.split(' ')[1]  # Remover 'Bearer '
            data = jwt.decode(token, SECRET_KEY, algorithms=['HS256'])
        except:
            return jsonify({'message': 'Token inválido'}), 401
        return f(*args, **kwargs)
    return decorated

@auth_bp.route('/login', methods=['POST'])
def login():
    """Endpoint de autenticación para administradores"""
    try:
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')
        
        # Validación simple (expandir con base de datos)
        if username == ADMIN_USER and password == ADMIN_PASS_HASH:
            token = jwt.encode({
                'user': username,
                'role': 'admin',
                'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=24)
            }, SECRET_KEY, algorithm='HS256')
            
            return jsonify({
                'token': token,
                'user': {
                    'username': username,
                    'role': 'admin',
                    'name': 'Administrador MOGROUP'
                }
            }), 200
        else:
            return jsonify({'message': 'Credenciales incorrectas'}), 401
            
    except Exception as e:
        return jsonify({'message': f'Error del servidor: {str(e)}'}), 500

@auth_bp.route('/verify', methods=['GET'])
@token_required
def verify_token():
    """Verificar si el token es válido"""
    return jsonify({'message': 'Token válido', 'status': 'authenticated'}), 200
