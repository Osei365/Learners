import React , {useState} from 'react'

const QuestionForm = ({ questionNumber, onChange }) => {
    const [details, setDetails] = useState({
        subject: '',
        header: '',
        body: '',
        image: '',
        right_answer: '',
        wrong_answer1: '',
        wrong_answer2: '',
        wrong_answer3: '',
        wrong_answer4: ''
    });
  
    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails({ ...details, [name]: value });
        onChange(details, questionNumber); 
    };

    return (
    <div key={questionNumber}>
        <h2>Question {questionNumber}</h2>
        <div className="question-details">
            <label className="label">Subject</label>
            <input className="new-input" type="text" name="subject" value={details.subject} onChange={handleChange} />
        </div>
        <div className="question-details">
            <label className="label">Header</label>
            <input className="new-input" type="text" name="header" value={details.header} onChange={handleChange} required />
        </div>
        <div className="question-details">
            <label className="label">Body</label>
            <textarea className="textarea" name="body" id="" cols="30" rows="10" value={details.body} onChange={handleChange} placeholder="Type Your Question"></textarea>
        </div>
        <div className="question-details">
            <label className="imagelabel">Add An Image</label>
            <input className="new-input image" type="file" name="image" accept="image/*" onChange={handleChange} />
        </div>
        <div className="question-details">
            <label className="label">Right Answer</label>
            <input  className="new-input" type="text" name="right_answer" value={details.right_answer} onChange={handleChange} required/>
        </div>
        <div className="question-details">
            <label className="label">Wrong Answer 1</label>
            <input className="new-input" type="text" name="wrong_answer1" value={details.wrong_answer1} onChange={handleChange} required/>
        </div>
        <div className="question-details">
            <label className="label">Wrong Answer 2</label>
            <input className="new-input" type="text" name="wrong_answer2" value={details.wrong_answer2} onChange={handleChange} required/>
        </div>
        <div className="question-details">
            <label className="label">Wrong Answer 3</label>
            <input className="new-input" type="text" name="wrong_answer3" value={details.wrong_answer3} onChange={handleChange} required/>
        </div>
        <div className="question-details">
            <label className="label">Wrong Answer 4</label>
            <input className="new-input" type="text" name="wrong_answer4" value={details.wrong_answer4} onChange={handleChange} required/>
        </div>
    </div>
    );
};

  export default QuestionForm;