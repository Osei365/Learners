import React from 'react';
import './body4.css';
import 'boxicons/css/boxicons.min.css';
import user from '../assets/users.png'

const Body4 = () => {
  return (
    <div className="body4">
        <h5>TESTIMONY</h5>
        <h1>What Users Says</h1>
        <div className="testimony">
          <div className="comment4">
              <h1><i class='bx bxs-quote-left'></i></h1>
              <p>"I'm proud to wake up knowing that there is a channel to make life easy for me as a teacher
                where i have to worry myself about questions to give my students 
                or even worry about materials to give to student. I can do this from the comfort of my home anytime any day.
                i can be a teacher and still take on other jobs".
              </p>
              <h4>Osei Williams</h4>
              <span>Python Tutor</span>
          </div>
          <div className='picture4'>
              <div className='background'>
              </div>
              <img src={user} alt="user-1" />
          </div>
        </div>
    </div>
  )
}

export default Body4