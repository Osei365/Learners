from models import db
from models.teacher import Teacher
from api.v1.views import app_views
from flask import Flask, request, abort, jsonify

@app_views.route('update-name/<teacher_id>')
def update_name(teacher_id):
    """updates the name of the Teacher"""

    names = request.get_json()
    if not names:
        abort(404)

    initial_name = names.get('initialName')
    new_name = names.get('newName')

    teacher = db.get_or_404(Teacher, teacher_id)
    teacher.first_name = new_name
    db.session.commit()

    return jsonify({'status': 'successful'})