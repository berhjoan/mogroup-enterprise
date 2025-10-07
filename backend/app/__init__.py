from flask import Flask
from app.security.bootstrap import harden
from app.ai.routes import bp as ai_bp

def create_app():
    app = Flask(__name__)
    harden(app)
    app.register_blueprint(ai_bp)

    @app.get("/health")
    def _health():
        return {"status": "ok"}, 200

    return app

# Compatibilidad con wsgi.py: from app import app
app = create_app()

