import bcrypt
import uuid
from models import db
from api.v1.views import app_views
from models.teacher import Teacher
from flask import Flask, request, abort, jsonify


@app_views.route('/sign-up', methods=['POST'])
def signup():
    json_doc = request.get_json()
    if not json_doc:
        abort(404, description='Not a JSON')

    if 'email' not in json_doc:
        abort(404, description='email not present')

    if 'password' not in json_doc:
        abort(404, description='password not present')

    del json_doc['phone_number']
    json_doc['password'] = hash_password(json_doc['password'])
    json_doc['id'] = uuid.uuid4()
    teacher = Teacher(**json_doc)
    db.session.add(teacher)
    db.session.commit()
    result = jsonify({"teacherId": "{}".format(json_doc['id']),
                      'isValid': True})
    return result
    
def hash_password(password):
    byte = password.encode('utf-8')
    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(byte, salt)
    return hashed_password
