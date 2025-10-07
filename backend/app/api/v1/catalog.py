from flask import Blueprint, request, jsonify
from datetime import datetime

catalog_bp = Blueprint('catalog', __name__)

# Datos de ejemplo (mover a base de datos)
CATEGORIES = [
    {'id': 'biodegradables', 'name': 'Productos Biodegradables', 'icon': '🌿'},
    {'id': 'desinfectantes', 'name': 'Desinfectantes', 'icon': '🧽'},
    {'id': 'detergentes', 'name': 'Detergentes', 'icon': '🧴'},
    {'id': 'aseo-personal', 'name': 'Aseo Personal', 'icon': '🧼'},
    {'id': 'cafeteria', 'name': 'Cafetería', 'icon': '☕'},
    {'id': 'desechables', 'name': 'Desechables', 'icon': '🥤'},
    {'id': 'limpieza', 'name': 'Artículos de Limpieza', 'icon': '🧹'},
    {'id': 'herramientas', 'name': 'Herramientas', 'icon': '🔧'},
    {'id': 'oficina', 'name': 'Artículos de Oficina', 'icon': '📋'},
    {'id': 'computacion', 'name': 'Equipos de Computación', 'icon': '💻'},
    {'id': 'hoteleria', 'name': 'Hotelería', 'icon': '🏨'}
]

PRODUCTS = [
    {
        'id': 1,
        'name': 'Desinfectante Multiusos Ecológico',
        'category': 'biodegradables',
        'description': 'Desinfectante ecológico para múltiples superficies',
        'provider_id': 'agencia_lopez',
        'provider_code': 'DES-ECO-001',
        'specifications': {
            'presentation': 'Botella 1L',
            'active_ingredient': 'Alcohol etílico 70%',
            'certifications': ['Biodegradable', 'No tóxico']
        }
    },
    {
        'id': 2,
        'name': 'Papel Higiénico Industrial',
        'category': 'aseo-personal',
        'description': 'Papel higiénico de alta calidad para uso industrial',
        'provider_id': 'global',
        'provider_code': 'PH-IND-200',
        'specifications': {
            'presentation': 'Paquete 12 rollos',
            'layers': '2 capas',
            'length': '200 metros por rollo'
        }
    }
]

@catalog_bp.route('/categories', methods=['GET'])
def get_categories():
    """Obtener todas las categorías disponibles"""
    return jsonify({
        'categories': CATEGORIES,
        'total': len(CATEGORIES)
    }), 200

@catalog_bp.route('/products', methods=['GET'])
def get_products():
    """Obtener productos con filtros opcionales"""
    category = request.args.get('category')
    search = request.args.get('search', '').lower()
    page = int(request.args.get('page', 1))
    per_page = int(request.args.get('per_page', 20))
    
    # Filtrar productos
    filtered_products = PRODUCTS
    
    if category and category != 'all':
        filtered_products = [p for p in filtered_products if p['category'] == category]
    
    if search:
        filtered_products = [p for p in filtered_products if search in p['name'].lower()]
    
    # Paginación
    start = (page - 1) * per_page
    end = start + per_page
    paginated_products = filtered_products[start:end]
    
    return jsonify({
        'products': paginated_products,
        'total': len(filtered_products),
        'page': page,
        'per_page': per_page,
        'total_pages': (len(filtered_products) + per_page - 1) // per_page
    }), 200

@catalog_bp.route('/products/<int:product_id>', methods=['GET'])
def get_product_detail(product_id):
    """Obtener detalle de un producto específico"""
    product = next((p for p in PRODUCTS if p['id'] == product_id), None)
    if not product:
        return jsonify({'message': 'Producto no encontrado'}), 404
    
    return jsonify(product), 200

@catalog_bp.route('/quote/request', methods=['POST'])
def request_quote():
    """Solicitar cotización para productos seleccionados"""
    try:
        data = request.get_json()
        customer_email = data.get('email')
        products = data.get('products', [])
        
        if not customer_email or not products:
            return jsonify({'message': 'Email y productos son requeridos'}), 400
        
        # Generar ID de cotización
        quote_id = f"QUOTE-{datetime.now().strftime('%Y%m%d')}-{datetime.now().timestamp():.0f}"
        
        # Aquí se implementaría:
        # 1. Guardar cotización en BD
        # 2. Consultar precios a proveedores via WhatsApp/API
        # 3. Aplicar lógica de selección inteligente
        # 4. Enviar email al cliente
        
        return jsonify({
            'quote_id': quote_id,
            'message': 'Cotización solicitada exitosamente',
            'email_sent': True,
            'estimated_response_time': '15 minutos'
        }), 201
        
    except Exception as e:
        return jsonify({'message': f'Error al procesar cotización: {str(e)}'}), 500
