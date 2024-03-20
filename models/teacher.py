from models import db
from sqlalchemy.orm import relationship
from sqlalchemy import Column, String, ForeignKey
from flask_login import UserMixin


class Teacher(db.Model, UserMixin):

    id = Column(String(120), primary_key=True)
    name = Column(String(120), nullable=True)
    email = Column(String(120), nullable=False)
    password = Column(String(120), nullable=False)
    school = Column(String(120), nullable=True)

    # relationships
    questions = relationship('Question', back_populates='teacher')
    quizs = relationship('Quiz', back_populates='teacher')