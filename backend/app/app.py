import os
from flask import Flask, jsonify
from app.ai.routes import bp as ai_bp
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from dotenv import load_dotenv

load_dotenv()

db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.register_blueprint(ai_bp)
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)
    migrate.init_app(app, db)

    # Importar modelos para que Alembic (Migrate) los detecte
    from .models import supplier

    # Registrar blueprints
    from .api.v1 import suppliers_api
    app.register_blueprint(suppliers_api.bp)

    @app.route('/health')
    def health_check():
        return jsonify(status='ok', message='Servidor MOGROUP v7.0 en línea.')

    return app
@app.get('/health')
def _health():
    return {'status':'ok'}, 200

app = create_app()

