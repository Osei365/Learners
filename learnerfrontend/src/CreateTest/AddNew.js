import React, { useState } from 'react';
import './AddNew.css';
import QuestionForm from './QuestionForm';
import { useAuth } from '../AuthContext';


const AddNew = () => {
    const [numQuestions, setNumQuestions] = useState(1);
    const [showForm, setShowForm] = useState(true);
    const [questions, setQuestions] = useState([]);
    const { userId } = useAuth();

    const handleNumQuestionsChange = (e) => {
        setNumQuestions(parseInt(e.target.value));
        setQuestions(Array.from({ length: parseInt(e.target.value) }, () => ({})));
    };

    const setDetailsList = (event) => {
        event.preventDefault();
        setShowForm(false);
        console.log("Submitted");
    }

    /*const isSubmitDisabled = () => {
        const {subject, header, body, right_answer, wrong_answer1, wrong_answer2, wrong_answer3, wrong_answer4 } = details;
        return !(subject && header && body && right_answer && wrong_answer1 && wrong_answer2 && wrong_answer3 && wrong_answer4);
    };*/

    const handleQuestionChange = (questionDetails, questionNumber) => {
        const updatedQuestions = [...questions];
        updatedQuestions[questionNumber - 1] = { ...questionDetails };
        setQuestions(updatedQuestions);
    };


        const handleSubmit = async (e) => {
            e.preventDefault();
            console.log("Submitting questions:", questions);

            try {
                const response = await fetch(`http://127.0.0.1:5000/api/learners/v1/all-questions/${userId}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(questions)
                });
                if(!response.ok) {
                    throw new Error("cerating quetion failed");
                }
    
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        };

    return (
        <div className="choosen">
            {!showForm && numQuestions > 0 ? 
            (<div> 
                <h2 className="h2">Note that all fields with an asterisk are compulsory</h2>
                <form onSubmit={handleSubmit}>
                    {Array.from({ length: numQuestions }).map((_, index) => (
                    <QuestionForm key={index + 1} questionNumber={index + 1} onChange={handleQuestionChange} />
                    ))}
                    <button type="submit" className="submit-details-btn">Submit</button>
                </form>
            </div>)
            :(
                <div className="num-of-questions">
                    <form onSubmit={setDetailsList}>
                        <label className="label">Number of Questions</label>
                        <input
                            className="new-input"
                            type="number"
                            id="numberOfQuestions"
                            value={numQuestions}
                            onChange={handleNumQuestionsChange }
                        />
                        <button type="submit" className="submit-details-btn">Set Questions</button>
                    </form>
                </div>) 
            }
        </div>
    );
};

export default AddNew;
