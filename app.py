import os
import bcrypt
from flask import Flask, request, abort, jsonify
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
    return 'hello world'

@app.route('/signup', methods=['POST'])
def signup():
    json_doc = request.get_json()
    if not json_doc:
        abort(404, description='Not a JSON')

    if 'email' not in json_doc:
        abort(404, description='email not present')

    if 'password' not in json_doc:
        abort(404, description='password not present')

    json_doc['password'] = hash_password(json_doc['password'])
    teacher = Teacher(**json_doc)
    db.session.add(teacher)
    db.session.commit()
    result = jsonify({"email": "{}".format(json_doc['email']),
                          "message": "user created"})


def hash_password(password):
    byte = password.encode('utf-8')
    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(byte, salt)
    return hashed_password
    


if __name__ == "__main__":
    app.run(threaded=True)