import React from 'react';
import './Body3.css';
import { Link } from 'react-router-dom';



const Body3 = () => {
  return (
    <div className="body3">
        <div className="part1">
            <span> LETS'S BEGIN</span>
            <h1>
                How To Begin Your Journey as A Teacher
            </h1>
            <Link to="#">Get Started</Link>
        </div>
        <div className="part2">
            <div className="lines">
                <div className='div-1'>
                    <div className='round'><h1>1</h1></div>
                </div>
                <div className='div-2'>
                    <div  className='round'><h1>2</h1></div>
                </div>
                <div className='div-3'>
                    <div  className='round'><h1>3</h1></div>
                </div>
                <div className='div-4'>
                </div>
            </div>
            <div className="Div-outer">
                <div className="Div-inner">
                    <h2>Plan Your Curriculum</h2>
                    <p>You start with your passion and knowledge. Then choose a promising topic wih 
                        the help of our ReadyMade Questions.The way that you teach-what you bring to it-is up to you.
                    </p>
                </div>
                <div className="Div-inner">
                    <h2>Set Your Question</h2>
                    <p>You start with your passion and knowledge. Then choose a promising topic wih 
                        the help of our ReadyMade Questions.The way that you teach-what you bring to it-is up to you.
                    </p>
                </div>
                <div className="Div-inner">
                    <h2>Give Exam question</h2>
                    <p>You start with your passion and knowledge. Then choose a promising topic wih 
                        the help of our ReadyMade Questions.The way that you teach-what you bring to it-is up to you.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Body3;