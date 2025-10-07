import os
from flask_cors import CORS
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

def apply_security_headers(resp):
    resp.headers["Strict-Transport-Security"] = "max-age=63072000; includeSubDomains; preload"
    resp.headers["X-Content-Type-Options"] = "nosniff"
    resp.headers["X-Frame-Options"] = "DENY"
    resp.headers["Cross-Origin-Opener-Policy"] = "same-origin"
    resp.headers["Content-Security-Policy"] = "default-src 'self'"
    return resp

def harden(app):
    origins = [o.strip() for o in os.getenv("ALLOWED_ORIGINS", "*").split(",") if o.strip()]
    CORS(app, resources={r"/api/*": {"origins": origins}})
    limiter = Limiter(key_func=get_remote_address, app=app, default_limits=[os.getenv("DEFAULT_RATE_LIMIT", "100 per minute")])
    app.after_request(apply_security_headers)
    return app
