import uuid
from models import db
from api.v1.views import app_views
from api.v1.views.allquestions import UPLOAD_FOLDER
from flask import Flask, request, abort, jsonify, send_from_directory


@app_views.route('/app_images/question_images/<path:filename>')
def get_image(filename):
    """send the directory of the image"""
    return send_from_directory(UPLOAD_FOLDER, filename, as_attachment=True)