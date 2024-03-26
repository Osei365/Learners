from flask import Blueprint

app_views = Blueprint('app_views', __name__, url_prefix='/api/learners/v1')

from api.v1.views.signup import *
from api.v1.views.login import *
from api.v1.views.allquestions import *