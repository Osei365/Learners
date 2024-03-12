import React from 'react';
import { Link } from 'react-router-dom';
import './Footer1.css';

const Footer1 = () => {
  return (
    <div className="Footer1">
        <div className="section1">
            <div className="part1">
                <h4>For Companies</h4>
                <Link to="#">School Use</Link>
                <Link to="#">Parallel Referrals</Link>
                <Link to="#">The Hiring Blog</Link>
                
            </div>
            <div className="part2">
                <h4>My Account</h4>
                <Link to="#">Sign In</Link>
                <Link to="#">View History</Link>
                <Link to="#">Top Question</Link>
                <Link to="#">Help</Link>
            </div>
            <div className="part3">
                <h4>About</h4>
                <Link to="#">About us</Link>
                <Link to="#">Subscription Information</Link>
                <Link to="#">Privacy Policy</Link>
                <Link to="#">Terms & Conditions</Link>
                <Link to="#">Contact Us</Link>
            </div>
            <div className="part4">
                <h4>Social media</h4>
                <div className="icon">
                    <i class='bx bxl-facebook'></i>
                    <i class='bx bxl-twitter'></i>
                    <i class='bx bxl-instagram'></i>
                    <i class='bx bxl-pinterest-alt'></i>
                    <i class='bx bxl-youtube'></i>
                </div>
            </div>
        </div>
        <div className="copy">
            <h1>Learners</h1>
            <p>&copy; 2024, Learners company Teachers and students</p>
        </div>
    </div>
  )
}

export default Footer1