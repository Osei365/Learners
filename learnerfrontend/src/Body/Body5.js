import React from 'react';
import './Body5.css';
import support from '../assets/support.PNG';
import man1 from '../assets/man1.PNG';
import { Link } from "react-router-dom"

const Body5 = () => {
  return (
    <div className="body">
        <div className="body5">
            <div className="part1">
                <img src={support} alt="support" />
            </div>
            <div className="part2">
                <h6>GET SUPPORT</h6>
                <h1>You Wont Have To Do It Alone</h1>
                <p>Our Instructor Support Team is here to answer your questions and review your test video 
                    , while our Teaching Center gives you plenty of resources to help you through the process.
                    Plus, get the support of experienced instructors in our online community.</p>
                    <h6 className="h6">Learn More &#x2197;</h6>
            </div>
        </div>
        <div className="part3">
            <div className="pics">
                <img src={man1} alt="man-2" />
            </div>
            <div className="content">
                <h1>Become A Tutor Today</h1>
                <span>Join one of the world's largest online learning marketplaces.</span>
                <h6><Link to="/sign-up">Get Started &#8594;</Link></h6>
            </div>
        </div>
    </div>
  )
}

export default Body5