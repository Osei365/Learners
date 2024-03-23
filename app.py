import os
import bcrypt
from flask import Flask, request, abort, jsonify, render_template
from api.v1.views import app_views
from models import db
from flask_login import LoginManager
from flask_migrate import Migrate
from models.question import Question
from models.quiz import Quiz
from models.teacher import Teacher

host = os.getenv('DATABASEHOST')
password = os.getenv('DATABASEPASSWORD')
user = os.getenv('DATABASEUSERNAME')
database = os.getenv('DATABASE')
db_uri = 'mysql+pymysql://{}:{}@{}/{}'.format(user, password, host, database)

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = db_uri
app.register_blueprint(app_views)
app.secret_key = os.urandom(24)
db.init_app(app)

#migration handler
migrate = Migrate(app, db)

login_manager = LoginManager()
login_manager.init_app(app)

with app.app_context():
    db.create_all()

@login_manager.user_loader
def load_user(id):
    return db.get_or_404(Teacher, id)

@app.route('/')
def home():
    print('something')
    return render_template('index.html')
    


if __name__ == "__main__":
    app.run(threaded=True)