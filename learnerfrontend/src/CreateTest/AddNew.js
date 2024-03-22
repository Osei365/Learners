import React, {useState} from 'react';
import './AddNew.css';

const AddNew = () => {

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
        setDetails({ ...details, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form submited");
    };

    const isSubmitDisabled = () => {
        const {subject, header, body, right_answer, wrong_answer1, wrong_answer2, wrong_answer3, wrong_answer4 } = details;
        return !(subject && header && body && right_answer && wrong_answer1 && wrong_answer2 && wrong_answer3 && wrong_answer4);
    };
  return (
    <div className="choosen">
        <h2>Note that all fields with an asterisk is compulsory</h2>
        <form onSubmit={handleSubmit}>
            <div className="question-details">
                <label className="label">Subject</label>
                <input className="new-input" type="text" name="subject" value={details.subject} required onChange={handleChange} />
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
                <input className="new-input image" type="file" name="image" accept="image/*" onChange={handleChange} required/>
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
            <button className="submit-details-btn" type="submit" disabled={isSubmitDisabled()}>Submit</button>
        </form>
    </div>
   
  )
}

export default AddNew