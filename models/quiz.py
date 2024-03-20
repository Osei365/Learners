from models import db
from models.question import question_quiz
from sqlalchemy.orm import relationship
from sqlalchemy import Column, String, ForeignKey, Integer

class Quiz(db.Model):
    id = Column(String(120), primary_key=True)
    teacher_id = Column(String(120), ForeignKey('teacher.id'), nullable=False)

    # relationships
    teacher = relationship('Teacher', back_populates='quizs')
    questions = relationship('Question', secondary=question_quiz, back_populates='quizs')