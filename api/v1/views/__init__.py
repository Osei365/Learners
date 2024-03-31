from flask import Blueprint

needed = ['id', 'teacher_id', 'subject', 'header',
          'body', 'right_answer', 'wrong_answer1',
          'wrong_answer2', 'wrong_answer3','wrong_answer4', 'image']
app_views = Blueprint('app_views', __name__, url_prefix='/api/learners/v1')

from api.v1.views.signup import *
from api.v1.views.login import *
from api.v1.views.allquestions import *
from api.v1.views.quizendpoint import *
from api.v1.views.images_api import *