from models import db
from models.teacher import Teacher
from flask import request, jsonify, abort
from api.v1.views import app_views


@app_views.route('/teacher-details/<teacher_id>')
def teacher_details(teacher_id):
    """return teacher details"""

    teacher = db.get_or_404(Teacher, teacher_id)

    result = {}
    result['first_name'] = teacher.first_name
    result['last_name'] = teacher.last_name
    result['email'] = teacher.email
    if teacher.teacher_image:
        result['teacher_image'] = teacher.teacher_image
    return jsonify(result)

@app_views.route('/save-teacherimage/<teacher_id>', methods=['PUT'])
def save_teacherimage(teacher_id):
    """saves the teacher's new image"""
    teacher_image = request.get_json()
    if not teacher_image:
        abort(400, description='image of teacher is missing')

    teacher = db.get_or_404(Teacher, id)
    teacher.teacher_image = teacher_image
    db.session.commit()

    return jsonify({'status_code': 'successfully'})
