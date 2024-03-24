from models import db, Base
from sqlalchemy.orm import relationship
from sqlalchemy import Column, String, ForeignKey, Integer
from flask_login import UserMixin


student_quiz = db.Table('student_quiz',
                        Base.metadata,
                        Column('student_id', String(120), ForeignKey('quiz.id', onupdate='CASCADE', ondelete='CASCADE')),
                        Column('quiz_id', String(120), ForeignKey('student.id', onupdate='CASCADE', ondelete='CASCADE')))
class Student(db.Model):
    """Student model"""

    id = Column(String(120), primary_key=True)
    name = Column(String(120), nullable=False)
    school = Column(String(120))
    gender = Column(String(120))

    # relationship
    quizs = relationship('Quiz', secondary=student_quiz, back_populates='students')