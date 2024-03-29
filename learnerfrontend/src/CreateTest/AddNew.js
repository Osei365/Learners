import React, { useState } from 'react';
import './AddNew.css';
import QuestionForm from './QuestionForm';
import { useAuth } from '../AuthContext';

const AddNew = () => {
    const [numQuestions, setNumQuestions] = useState(1);
    const [testDuration, setDuration] = useState(30);
    const [showForm, setShowForm] = useState(false); // Initially, don't show the form
    const [questions, setQuestions] = useState([]);
    const { userId } = useAuth();
    const [quizId, setQuizId] = useState(null);
    const [code, setCode ] = useState(null);
    const handleNumQuestionsChange = (e) => {
        setNumQuestions(parseInt(e.target.value));
    };

    const handleDuration = (e) => {
        setDuration(parseInt(e.target.value));
    };

    const setDetailsList = (event) => {
        event.preventDefault();
        // Ensure both numQuestions and testDuration are set
        if (numQuestions > 0 && testDuration > 0) {
            setShowForm(true); // Show the form when both are set
        }
    };

    const handleQuestionChange = (questionDetails, questionNumber) => {
        const updatedQuestions = [...questions];
        updatedQuestions[questionNumber - 1] = { ...questionDetails };
        setQuestions(updatedQuestions);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
    
            // Append the questions data
            formData.append('questions', JSON.stringify(questions));
            
            // Append the test duration
            formData.append('duration', testDuration);
    
            // Append each image file
            questions.forEach((question, index) => {
                if (question.image instanceof File) {
                    formData.append(`image${index}`, question.image);
                }
            });
            // console log everything in the form data to see the content 
            for (let pair of formData.entries()) {
                console.log(pair[0], pair[1]);
            }
            // Send the form data to the backend
            const response = await fetch(`http://127.0.0.1:5000/api/learners/v1/create-new/${userId}`, {
                method: 'POST',
                body: formData
            });
    
            if (!response.ok) {
                throw new Error("Creating question failed");
            }
    
            const data = await response.json();
            setQuizId(data.quiz_id);
            setCode(data.code)
            console.log(data);
            setNumQuestions(1);
            setQuestions([]);
            setShowForm(false);
        } catch (error) {
            console.error(error);
        }
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => alert("Link copied"))
            .catch((error) => console.error("Failed to copy link: ", error));
    };

    return (
        <div className="choosen">
            {quizId ? (
                <div className="quiz-id-section">
                    <h2>Copy Test Link For Students</h2>
                    <div className="link">
                        <span>api/learners/v1/take-quiz/{quizId}</span>
                        <span><i class='bx bx-copy' onClick={() => copyToClipboard(`api/learners/v1/take-quiz/${quizId}`)}></i></span>
                    </div>
                    <span>PassCode: {code} <i class='bx bx-copy' onClick={() => copyToClipboard(`${code}`)}></i></span>
                </div>
            ) : (
                <div>
                    <h2>Create Quiz from Pre Existing Question</h2>
                    {showForm ? (
                        <div>
                            <h2 className="h2">Note that all fields with an asterisk are compulsory</h2>
                            <form onSubmit={handleSubmit}>
                                {Array.from({ length: numQuestions }).map((_, index) => (
                                    <QuestionForm key={index + 1} questionNumber={index + 1} onChange={handleQuestionChange} />
                                ))}
                                <button type="submit" className="submit-details-btn">Submit</button>
                            </form>
                        </div>
                    ) : (
                        <div className="duration">
                            <form onSubmit={setDetailsList}>
                                <h2>Set Questions</h2>
                                {/* Display input fields to set number of questions and test duration */}
                                <label className="label">Number of Questions</label>
                                <input
                                    className="new-input"
                                    type="number"
                                    id="numberOfQuestions"
                                    value={numQuestions}
                                    onChange={handleNumQuestionsChange}
                                />
                                <label className="label">Test Duration</label>
                                <select className="new-input" name="duration" id="duration" value={testDuration} onChange={handleDuration}>
                                    <option value="30">30 min</option>
                                    <option value="60">60 min</option>
                                    <option value="90">90 min</option>
                                    <option value="120">120 min</option>
                                </select>
                                <button type="submit" className="submit-details-btn">Set Questions</button>
                            </form>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default AddNew;
