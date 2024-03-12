import React from 'react';
import './Body1.css';
import pics from "../assets/newpics.png";
import 'boxicons/css/boxicons.min.css';

const Body1 = () => {
  return (
    <div className="body1">
        <h4 className="span1">BECOME A TEACHER</h4>
        <h1>Come Teach with Us</h1>
        <span className="span2">Teach and set exam questions without leaving your comfort zone</span>
        <div className="container">
            <div className="content1">
                <img src={pics} alt="ad-pics" />
                <div className="btn">
                <button>Get started  &rarr;</button>
                </div>
            </div>
            <div className="contentleft">
                <h2>&#x201C;</h2>
                <span>Join one of the worlds largest online learning platform</span>
                <h1>10k+</h1>
                <span>Teachers</span>
            </div>
            <div className="contentright">
                <div className="star">
                    <span><i class='bx bxs-star'></i></span>
                    <span><i class='bx bxs-star'></i></span>
                    <span><i class='bx bxs-star'></i></span>
                    <span><i class='bx bxs-star'></i></span>
                    <span><i class='bx bxs-star'></i></span>
                </div>
                <span className='span-2'>"Learners has made teaching easy for most programming teachers, you can teach students from the comfort of my home"</span>
                <span>Teachers</span>
            </div>
        </div>
    </div>
  )
};

export default Body1;
