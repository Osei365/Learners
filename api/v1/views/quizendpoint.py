import uuid
from models import db
from models.question import Question
from models.student import Student
from models.quiz import Quiz
from models.teacher import Teacher
from api.v1.views import app_views, needed
from flask import Flask, request, abort, jsonify

@app_views.route('/verify/<id>', methods=['POST'])
def verify_student(id):
    """verify student"""
    code = request.get_json()
    if not code:
        abort(404)
    quiz = db.get_or_404(Quiz, id)
    if quiz.code == code:
        return jsonify({'isVerified': True})
    else:
        return jsonify({'isVerified': False})
    
@app_views.route('/register/<id>', methods=['POST'])
def register_student(id):
    """register student to the database"""
    student_names = request.get_json()
    print(student_names)
    if not student_names:
        abort(404)
    firstname = student_names.get('firstName')
    lastname = student_names.get('LastName')
    print(firstname)
    print(lastname)
    if not firstname or not lastname:
        abort(404)

    quiz = db.get_or_404(Quiz, id)
    student = db.first_or_404(db.select(Student).filter_by(firstname=firstname))
    if not student:
        student = Student(id=uuid.uuid4(),
                          firstname=firstname,
                          lastname=lastname)
        student.teachers.append(quiz.teacher)
        db.session.add(student)
        db.session.commit()
    return jsonify({'id': student.id, 'isRegistered': True})




@app_views.route('/teacher-quiz/<id>', methods=['GET'])
def get_teacher_quiz(id):
    """gets the all the quiz that a.
    teacher created"""
    teacher = db.get_or_404(Teacher, id)
    if not teacher:
        abort(404)
    quizs = teacher.quizs
    quiz_dict = {}
    for quiz_obj in quizs:
        questions = quiz_obj.questions
        questions_list = []
        for question in questions:
            new_dict = {}
            for key, value in question.__dict__.items():
                if key in needed:
                    new_dict[key] = value
            questions_list.append(new_dict)
        quiz_dict[quiz_obj.id] = questions_list
    print(quizs)
    return jsonify(quiz_dict)