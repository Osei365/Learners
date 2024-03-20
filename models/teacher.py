from models import db
from sqlalchemy.orm import relationship
from sqlalchemy import Column, String, ForeignKey, Integer
from flask_login import UserMixin


class Teacher(db.Model, UserMixin):

    id = Column(String(120), primary_key=True)
    first_name = Column(String(120), nullable=True)
    last_name = Column(String(120), nullable=True)
    phone_number = Column(Integer, nullable=True)
    email = Column(String(120), nullable=False)
    password = Column(String(120), nullable=False)
    institution = Column(String(120), nullable=True)

    # relationships
    questions = relationship('Question', back_populates='teacher')
    quizs = relationship('Quiz', back_populates='teacher')