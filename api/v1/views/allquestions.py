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
        return jsonify(questions)
    else:
        return jsonify({})
    
@app_views.route('/all-questions/<id>', methods=['POST'])
def post_questions(id):
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


    