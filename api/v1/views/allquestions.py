from models import db
from models.question import Question
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

    json_dic = request.get_json()
    if not json_dic:
        abort(404)

    return jsonify(json_dic)
    