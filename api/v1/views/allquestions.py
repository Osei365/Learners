import uuid
from models import db
from models.question import Question
from models.quiz import Quiz
from api.v1.views import app_views
from flask import Flask, request, abort, jsonify

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
            new_dict['id'] = obj.id
            new_dict['teacher_id'] = obj.teacher_id
            new_dict['subject'] = obj.subject
            new_dict['header'] = obj.header
            new_dict['body'] = obj.body
            new_dict['right_answer'] = obj.right_answer
            new_dict['wrong_answer1'] = obj.wrong_answer1
            new_dict['wrong_answer2'] = obj.wrong_answer2
            new_dict['wrong_answer3'] = obj.wrong_answer3
            new_dict['wrong_answer4'] = obj.wrong_answer4
            new_questions.append(new_dict)
        return jsonify(new_questions)
    else:
        return jsonify({})
    
@app_views.route('/create-new/<id>', methods=['POST'])
def create_new(id):
    """post question from a teacher"""

    question_list = request.get_json()
    if not question_list:
        abort(404)

    
    print(type(question_list))
    print(id)
    quiz = Quiz(id = uuid.uuid4())
    quiz.teacher_id = id
    db.session.add(quiz)
    db.session.commit()
    for question_dic in question_list:
        question_dic['id'] = uuid.uuid4()
        question_dic['teacher_id'] = id
        question = Question(**question_dic)
        db.session.add(question)
        quiz.questions.append(question)
        db.session.commit()
    result = {'quiz_id': quiz.id, 'message': 'quiz created'}
    return jsonify(result)

@app_views.route('/create-existing/<id>', methods=['POST'])
def create_existing(id):
    """creates a quiz from pre existing"""

    question_dict = request.get_json()
    if not question_dict:
        abort(404)
    question_id_list = question_dict['ids']
    if not question_id_list:
        abort(404)
    quiz = Quiz(id = uuid.uuid4())
    quiz.teacher_id = id
    db.session.add(quiz)
    db.session.commit()

    for q_id in question_id_list:
        question = db.get_or_404(Question, q_id)
        quiz.questions.append(question)
        db.session.commit()
    result = {'quiz_id': quiz.id, 'message': 'quiz created'}
    return jsonify(result)
    


    