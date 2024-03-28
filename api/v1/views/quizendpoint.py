import uuid
from models import db
from models.question import Question
from models.quiz import Quiz
from models.teacher import Teacher
from api.v1.views import app_views
from flask import Flask, request, abort, jsonify

@app_views.route('/take-quiz/<id>', methods=['GET'])
def get_quiz(id):
    pass


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
            needed = ['id', 'teacher_id', 'subject', 'header',
                      'body', 'right_answer', 'wrong_answer1',
                      'wrong_answer2', 'wrong_answer3',
                      'wrong_answer4']
            for key, value in question.__dict__.items():
                if key in needed:
                    new_dict[key] = value
            # new_dict['id'] = question.id
            # new_dict['teacher_id'] = question.teacher_id
            # new_dict['subject'] = question.subject
            # new_dict['header'] = question.header
            # new_dict['body'] = question.body
            # new_dict['right_answer'] = question.right_answer
            # new_dict['wrong_answer1'] = question.wrong_answer1
            # new_dict['wrong_answer2'] = question.wrong_answer2
            # new_dict['wrong_answer3'] = question.wrong_answer3
            # new_dict['wrong_answer4'] = question.wrong_answer4
            questions_list.append(new_dict)
        quiz_dict[quiz_obj.id] = questions_list
    print(quizs)
    return jsonify(quiz_dict)