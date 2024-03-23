import bcrypt
import uuid
from models import db
from api.v1.views import app_views
from models.teacher import Teacher
from flask import Flask, request, abort, jsonify


@app_views.route('/signup', methods=['POST'])
def signup():
    json_doc = dict(request.form)
    if not json_doc:
        abort(404, description='Not a JSON')

    if 'email' not in json_doc:
        abort(404, description='email not present')

    if 'password' not in json_doc:
        abort(404, description='password not present')

    json_doc['password'] = hash_password(json_doc['password'])
    json_doc['id'] = uuid.uuid4()
    teacher = Teacher(**json_doc)
    db.session.add(teacher)
    db.session.commit()
    result = jsonify({"email": "{}".format(json_doc['email']),
                          "id": "{}".format(json_doc['id'])})
    return result
    
def hash_password(password):
    byte = password.encode('utf-8')
    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(byte, salt)
    return hashed_password
