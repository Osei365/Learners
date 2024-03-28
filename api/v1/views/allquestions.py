import uuid
from models import db
from models.question import Question
from models.quiz import Quiz
from api.v1.views import app_views
from flask import Flask, request, abort, jsonify
from utils import generate_code

@app_views.route('/all-questions', methods=['GET'])
def get_allquestions():
    """gets all questions"""

    questions = db.session.execute(db.select(Question)).all()
    print(questions)
    if questions:
        new_questions = []
        for objs in questions:
            obj= objs[0]
            new_dict = {}
            needed = ['id', 'teacher_id', 'subject', 'header',
                      'body', 'right_answer', 'wrong_answer1',
                      'wrong_answer2', 'wrong_answer3',
                      'wrong_answer4']
            for key, value in obj.__dict__.items():
                if key in needed:
                    new_dict[key] = value
            new_questions.append(new_dict)
        return jsonify(new_questions)
    else:
        return jsonify([{}])
    
@app_views.route('/create-new/<id>', methods=['POST'])
def create_new(id):
    """post questions from a teacher and
    creates a new quiz"""

    question_metadata = request.get_json()
    if not question_metadata:
        abort(404)

    
    print(type(question_metadata))
    print(id)
    duration = question_metadata.get('duration')
    question_list = question_metadata.get('questions')
    quiz = Quiz(id = uuid.uuid4())
    quiz.teacher_id = id
    quiz.duration = duration
    quiz.code = generate_code()
    db.session.add(quiz)
    db.session.commit()
    for question_dic in question_list:
        question_dic['id'] = uuid.uuid4()
        question_dic['teacher_id'] = id
        question = Question(**question_dic)
        db.session.add(question)
        quiz.questions.append(question)
        db.session.commit()
    result = {'quiz_id': quiz.id, 'message': 'quiz created', 'code': quiz.code}
    return jsonify(result)

@app_views.route('/create-existing/<id>', methods=['POST'])
def create_existing(id):
    """creates a quiz from pre existing questions"""

    # gets a metadata from the get json, it contains the questions and the duration for the quiz
    # it is a dictionary
    question_metadata = request.get_json()
    print(question_metadata)
    if not question_metadata:
        abort(404)
    question_id_list = question_metadata.get('ids')
    duration = question_metadata.get('duration')
    if not question_id_list:
        abort(404)
    quiz = Quiz(id = uuid.uuid4())
    quiz.teacher_id = id
    quiz.duration = duration
    quiz.code = generate_code()
    db.session.add(quiz)
    db.session.commit()

    for q_id in question_id_list:
        question = db.get_or_404(Question, q_id)
        quiz.questions.append(question)
        db.session.commit()
    result = {'quiz_id': quiz.id, 'message': 'quiz created', 'code': quiz.code}
    return jsonify(result)
    


    