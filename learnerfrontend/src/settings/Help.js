import React, { useState } from 'react';
import DashNavBar from '../Dashboard/dash_navBar';
import { Link } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
import './Help.css'

const Help = () => {
    const [toggle, setToggle ] = useState(false);
    const [text, setText] = useState('');

    const handleToggle = () => {
        setToggle(prevState => !prevState);
    };
    const submitForm = () => {
        console.log(text);
    }

  return (
    <div  className="container">
        <DashNavBar />
        <div className={`main2 ${toggle ? 'active2' : ''}`}>
            <div className="topbar2">
                <div className="toggle2" onClick={handleToggle}><i className='bx bx-menu'></i></div>  
            </div>

            <div className="helpForm">
                <h2>FAQs (Frequently Asked Questions)</h2>
                <ul>
                    <li><strong >Q: </strong> How do I reset my password?</li>
                    <li><strong>A: </strong> You can reset your password by visiting the Settings on the navigation bar and following the instructions.</li>
                </ul>

                <h2>Contact Information</h2>
                <p>If you need further assistance, please feel free to reach out to us:</p>
                <ul>
                    <li><strong>Email:</strong> <Link to="mailto:support@Learners.com">support@Learners.com</Link></li>
                    <li><strong>Phone:</strong> +1 (800) 123-4567</li>
                </ul>

                <h2>Feedback Form</h2>
                <form onSubmit={submitForm}>
                    <label for="feedback">We'd love to hear your feedback:</label>
                    <br />
                    <textarea id="feedback" name="feedback" rows="4" cols="50" onChange={(e) => setText(e.target.value)} required></textarea><br />
                    <input type="submit" value="Submit Feedback" />
                </form>
            </div>
        </div>
    </div>
  )
}

export default Help