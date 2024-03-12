import React from 'react';
import card1 from '../assets/card1.PNG';
import card2 from '../assets/card2.PNG';
import card3 from '../assets/card3.PNG';
import './Body2.css';



const Body2 = () => {
  return (
    <div className="contain5">
        <h6>Why Learners</h6>
        <h2>So Many Reasons To Start Here</h2>
        <p>Get, Set and Add questions for your students, with over 30 programming language</p>
        <ul className="cards">
            <li>
                <img src={card1}  alt="card-1"/>
                <h4>Teach Tech your Way</h4>
                <span>Publish questions you want, in the way you want and always have control over your own questions</span>
            </li>
            <li>
                <img src={card2} alt="card-2" />
                <h4>Inspire Learners</h4>
                <span> Teach what you know and help your students explore their interests, gain new skills and advance thier tech skills</span>
            </li>
            <li>
                <img src={card3}  alt="card-3"/>
                <h4>Inspire Learners</h4>
                <span> Teach what you know and help your students explore their interests, gain new skills and advance thier tech skills</span>
            </li>
        </ul>
        <div className="lang-cnt">
            <div className="cnt1">
                <h1>10K</h1>
                <span>Teachers</span>
            </div>
            <div className="cnt1">
                <h1>10K</h1>
                <span>language</span>
            </div>
            <div className="cnt1">
                <h1>75K</h1>
                <span>Enrollments</span>
            </div>
            <div className="cnt1">
                <h1>5K</h1>
                <span>Enrollments</span>
            </div>
        </div>
        
    </div>
  )
}

export default Body2