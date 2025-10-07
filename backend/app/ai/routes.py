from flask import Blueprint, request, jsonify
import os
from google import genai

bp = Blueprint("ai", __name__, url_prefix="/api/v1/ai")

_client = genai.Client(api_key=os.getenv("GOOGLE_API_KEY"))
_MODEL  = os.getenv("MODEL_ID", "gemini-2.0-flash")

@bp.route("/chat", methods=["POST"])
def chat():
    data = request.get_json(silent=True) or {}
    prompt = data.get("prompt") or data.get("message") or data.get("input") or ""
    if not prompt:
        return jsonify({"error": "missing prompt"}), 400
    try:
        resp = _client.models.generate_content(model=_MODEL, contents=prompt)
        text = getattr(resp, "text", None) or str(resp)
        return jsonify({"answer": text}), 200
    except Exception as e:
        return jsonify({"error": "ai_call_failed", "detail": str(e)}), 500
