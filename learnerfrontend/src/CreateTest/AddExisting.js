import React, {useState} from 'react';
import questions from '../Dashboard/questions';
import './AllExisting.css';


const AddExisting = () => {
    const [checkedStates, setCheckedStates] = useState(Array(questions.length).fill(null));

    const submitQuestion = () => {
        const questionId = [];
        const selectedQuestions = []; // Initialize selectedQuestions array here
    
        checkedStates.forEach((state, index) => {
            if (state !== null) {
                questionId.push(state);
            }
        });
    
        questions.forEach((question) => {
            if (questionId.includes(question.id)) { // Check if question ID is in questionId array
                const selectedQuestion = {
                    id: question.id,
                    subject: question.subject,
                    header: question.header,
                    body: question.Body,
                    image: question.image,
                    right_answer: question.right_answer,
                    wrong_answer1: question.wrong_answer1,
                    wrong_answer2: question.wrong_answer2,
                    wrong_answer3: question.wrong_answer3,
                    wrong_answer4: question.wrong_answer4,
                };
                selectedQuestions.push(selectedQuestion);
            }
        });
        console.log(selectedQuestions);
        setCheckedStates(Array(questions.length).fill(null));
    };

    const handleCheck = (questionIndex) => {
        const updatedStates = [...checkedStates];
        if(updatedStates[questionIndex] === null) {
            updatedStates[questionIndex] = questionIndex;
            setCheckedStates(updatedStates);
        } else if(updatedStates[questionIndex] === questionIndex) {
            updatedStates[questionIndex] = null;
            setCheckedStates(updatedStates);
        }
        
    };
  return (
    <div className="choosen2">
        <h2>Create Quiz from Pre Existing Question</h2>
        <h4>Select Question</h4>
        {questions.map((items, questionIndex) => (
            <div  id={items.id} key={questionIndex} onClick={() => handleCheck(questionIndex)} className="Each-question">
                <span className={`Each-quest-num ${checkedStates[questionIndex] === questionIndex ? 'checked' : ''}`} onClick={() => handleCheck(questionIndex)}>Question {items.id}</span>
                <span className="subject"><strong>Subject: </strong>{items.subject}</span>
                <span className="header"><strong>Header: </strong>{items.header}</span>
                {items.image && <img src={items.image} alt={`img-${items.id}`} />}
                <p>{items.Body}</p>
                <div className="options-div">
                    <span><strong>A: </strong> {items.right_answer}</span>
                    <span><strong>B: </strong> {items.wrong_answer1}</span>
                    <span><strong>C: </strong> {items.wrong_answer2}</span>
                    <span><strong>D: </strong> {items.wrong_answer3}</span>
                    <span><strong>F: </strong> {items.wrong_answer4}</span>
                </div>
            </div>
        ))
    }
    <button className="sub-btn" onClick={submitQuestion}>Create Quiz</button>
    </div>
  )
}

export default AddExisting