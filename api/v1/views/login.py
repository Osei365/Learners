import bcrypt
import uuid
from models import db
from api.v1.views import app_views
from models.teacher import Teacher
from flask import Flask, request, abort, jsonify

@app_views.route('/login', methods=['POST'])
def login():
    """logs a user in"""
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    teacher = db.one_or_404(db.select(Teacher).filter_by(email=email))
    if bcrypt.checkpw(password.encode('utf-8'), teacher.password):
        result = jsonify({"id": "{}".format(teacher.id),
                          "isValid": True})
    else:
        abort(404)