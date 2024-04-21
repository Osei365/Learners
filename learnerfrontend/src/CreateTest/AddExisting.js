import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import './AllExisting.css';
import { Link } from 'react-router-dom';
import getQuestionsBysubject from '../Utils/utils';

const AddExisting = ({ question, setShowQuestion, setDuration, testDuration, showQuestion}) => {
    console.log('existing ', question);
    const [checkedStates, setCheckedStates] = useState(Array(question.length).fill(null));
    const { userId } = useAuth();
    /*const [showQuestion, setShowQuestion] = useState(true);
    const [testDuration, setDuration] = useState(30);*/
    const [ quizId, setQuizId ] = useState(null);
    const [code , setCode] = useState(null);
    const [subject, setSubject] = useState('');
    const [filename, setFilename ] = useState(null);

    const setDetailsList = (event) => {
        event.preventDefault();
        setShowQuestion(false);
            console.log("Submitted");
            console.log(testDuration);
  
      }

    const Subject = getQuestionsBysubject(question);
    console.log('all subject :', Subject);

    const handleDuration = (e) => {
        setDuration(parseInt(e.target.value));
    }
    const handleSubject = (e) => {
        setSubject(e.target.value);
    }
  

    const submitQuestion = async () => {
        const questionId = checkedStates.filter(state => state !== null);
        try {
            const response = await fetch(`http://127.0.0.1:5000/api/learners/v1/create-existing/${userId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ids: questionId, duration: testDuration, Subject: subject })
            });
            if (!response.ok) {
                throw new Error("Error posting Id");
            }
            const data = await response.json();
            console.log(data);
            setCode(data.code);
            setQuizId(data.quiz_id);
            setFilename(data.docFile);
            setCheckedStates(Array(question.length).fill(null));
        } catch (error) {
            console.log('The Error: ', error.message);
        }
        console.log(questionId);
    };

    const handleCheck = (questionIndex, questionId) => {
        setCheckedStates(prevStates => {
            const updatedStates = [...prevStates];
            if (updatedStates[questionIndex] === null || updatedStates[questionIndex] !== questionId) {
                updatedStates[questionIndex] = questionId;
            } else {
                updatedStates[questionIndex] = null;
            }
            return updatedStates;
        });
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => alert("Link copied"))
            .catch((error) => console.error("Failed to copy link: ", error));
    };

    const Question = getQuestionsBysubject(question, subject);

    return (
        <div className="choosen2">
            {quizId ? (
                <div className="quiz-id-section">
                    <h2>Copy Test Link For Students</h2>
                    <div className="link">
                        <span>api/learners/v1/take-quiz/{quizId}</span>
                        <span><i class='bx bx-copy' onClick={() => copyToClipboard(`api/learners/v1/take-quiz/${quizId}`)}></i></span>
                    </div>
                    <span className="pass"><strong>Passcode: {code} </strong><i class='bx bx-copy' onClick={() => copyToClipboard(`${code}`)}></i></span>
                    <Link to={`http://127.0.0.1:5000/api/learners/v1/${filename}`} className="passes">Download Questions docx</Link>
                </div>
            ) : (
                <div>
                    <h2>Create Quiz from Pre Existing Question</h2>
                    {testDuration !== null && !showQuestion ? (
                        <>
                            <h4>Select Question</h4>
                            {Question.map((items, questionIndex) => (
                                <div key={items.id} className="Each-question">
                                    <span
                                        className={`Each-quest-num ${checkedStates[questionIndex] === items.id ? 'checked' : ''}`}
                                        onClick={() => handleCheck(questionIndex, items.id)}>
                                        Question {questionIndex + 1}
                                    </span>
                                    <div className="Each-question-details">
                                        <span className="subject"><strong>Subject: </strong>{items.subject}</span>
                                        <span className="header"><strong>Header: </strong>{items.header}</span>
                                        {items.image && <img src={`http://localhost:5000/api/learners/v1/${items.image}`} alt={`img-${items.id}`} />}
                                        <p>{items.body}</p>
                                        <div className="options-div">
                                            <span ><strong>A: </strong> {items.options[0]}</span>
                                            <span><strong>B: </strong> {items.options[1]}</span>
                                            <span><strong>C: </strong> {items.options[2]}</span>
                                            <span><strong>D: </strong> {items.options[3]}</span>
                                            <span><strong>E: </strong> {items.options[4]}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <button className="sub-btn" onClick={submitQuestion}>Create Quiz</button>
                        </>
                    ) : (
                        <div className="duration">
                            <form onSubmit={setDetailsList}>
                            <label className="label">Enter subject Name</label>
                                <select className="new-input" name="subject" id="Subject" value={subject} onChange={handleSubject}>
                                    <option value="">None</option> {/* Placeholder option */}
                                    {Subject.map((subject) => (
                                        <option key={subject} value={subject}>{subject}</option>
                                    ))}
                                </select>
                                <label className="label">Test Duration</label>
                                <select className="new-input" name="duration" id="duration" value={testDuration} onChange={handleDuration}>
                                    <option value="30">30 min</option>
                                    <option value="60">60 min</option>
                                    <option value="90">90 min</option>
                                    <option value="120">120 min</option>
                                </select>
                                <button type="submit" className="submit-Btn">Set Duration</button>
                            </form>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
    
};

export default AddExisting;
