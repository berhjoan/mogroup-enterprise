import os, time
from flask import Blueprint, request, jsonify
from google.cloud import storage, vision

files_bp = Blueprint("files", __name__, url_prefix="/api/v1/files")

def get_bucket():
    bucket_name = os.getenv("GCS_BUCKET")
    client = storage.Client()      # usa GOOGLE_APPLICATION_CREDENTIALS
    return client.bucket(bucket_name)

@files_bp.route("/upload", methods=["POST"])
def upload():
    if "file" not in request.files: return jsonify(error="file requerido (multipart/form-data)"), 400
    f = request.files["file"]
    if not f.filename: return jsonify(error="archivo sin nombre"), 400
    ext = (f.filename.rsplit(".",1)[-1] or "").lower()
    if ext not in ["png","jpg","jpeg","webp","pdf"]:
        return jsonify(error="tipo no permitido"), 400
    blob_name = f"{int(time.time())}_{f.filename}"
    b = get_bucket(); blob = b.blob(blob_name)
    blob.upload_from_file(f.stream, content_type=f.mimetype)
    blob.make_public()
    return jsonify(url=blob.public_url, name=blob_name)

@files_bp.route("/ocr", methods=["POST"])
def ocr():
    data = request.get_json() or {}
    gcs_url = data.get("gcs_url")
    if not gcs_url: return jsonify(error="gcs_url requerido (gs://bucket/object)"), 400
    image = vision.Image(source=vision.ImageSource(image_uri=gcs_url))
    client = vision.ImageAnnotatorClient()
    resp = client.text_detection(image=image)
    if resp.error.message:
        return jsonify(error=resp.error.message), 502
    text = resp.full_text_annotation.text if resp.full_text_annotation else ""
    return jsonify(text=text)
