import React, {useState } from 'react';
import { useAuth } from '../AuthContext';
import './AllExisting.css';



const AddExisting = ({ questions }) => {
    console.log('existing ', questions );
    const [checkedStates, setCheckedStates] = useState(Array(questions.length).fill(null));
    const [ userId ] = useAuth();

    const submitQuestion = async () => {
        const questionId = [];
    
        checkedStates.forEach((state) => {
            if (state !== null) {
                questionId.push(state);
            }
        });
        try {
            const response = await fetch(`http://127.0.0.1:5000/api/learners/v1/create-existing/${userId}`, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({ids : questionId})
            });
            if(!response.ok) {
                throw new Error("Error posting Id");
            }

            const data = await response.json();
            console.log(data);
        } catch (error) {
          console.log('The Error: ', error.message);
        }
        console.log(questionId);

        setCheckedStates(Array(questions.length).fill(null));
    };

        const handleCheck = (questionIndex, questionId) => {
            const updatedStates = [...checkedStates];
            if(updatedStates[questionIndex] === null) {
                updatedStates[questionIndex] = questionId;
                setCheckedStates(updatedStates);
            } else if(updatedStates[questionIndex] === questionId) {
                updatedStates[questionIndex] = null;
                setCheckedStates(updatedStates);
            }
    };

  return (
    <div className="choosen2">
        <h2>Create Quiz from Pre Existing Question</h2>
        <h4>Select Question</h4>
        {questions.map((items, questionIndex) => (
            <div  id={items.id} key={questionIndex} onClick={() => handleCheck(questionIndex, items.id)} className="Each-question">
                <span  id={items.id} className={`Each-quest-num ${checkedStates[questionIndex] === items.id ? 'checked' : ''}`} onClick={() => handleCheck(questionIndex)}>Question {questionIndex}</span>
                <span className="subject"><strong>Subject: </strong>{items.subject}</span>
                <span className="header"><strong>Header: </strong>{items.header}</span>
                {items.image && <img src={items.image} alt={`img-${items.id}`} />}
                <p>{items.Body}</p>
                <div className="options-div">
                    <span><strong>A: </strong> {items.right_answer}</span>
                    <span><strong>B: </strong> {items.wrong_answer1}</span>
                    <span><strong>C: </strong> {items.wrong_answer2}</span>
                    <span><strong>D: </strong> {items.wrong_answer3}</span>
                    <span><strong>E: </strong> {items.wrong_answer4}</span>
                </div>
            </div>
        ))
    }
    <button className="sub-btn" onClick={submitQuestion}>Create Quiz</button>
    </div>
)
}

export default AddExisting