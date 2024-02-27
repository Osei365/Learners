import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
    return (
        <>
        <footer className="section-p1">
        <div className="col col1">
            <h1>Learners</h1>
            <h4>Contact</h4>
            <p><strong>Address: </strong>562 Wellington Road Street 32 San Fransisco</p>
            <p><strong>Phone:</strong> +01 2222 365 /(+91) 01 2345 6789</p>
            <p><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
            <div className="follow">
                <h4>Follow Us</h4>
                <div className="icon">
                    <i class='bx bxl-facebook'></i>
                    <i class='bx bxl-twitter'></i>
                    <i class='bx bxl-instagram'></i>
                    <i class='bx bxl-pinterest-alt'></i>
                    <i class='bx bxl-youtube'></i>
                </div>
            </div>
        </div>
        <div class="col">
            <h4>About</h4>
            <Link to="#">About us</Link>
            <Link to="#">Subscription Information</Link>
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms & Conditions</Link>
            <Link to="#">Contact Us</Link>
        </div>

        <div class="col">
            <h4>My Account</h4>
            <Link to="#">Sign In</Link>
            <Link to="#">View History</Link>
            <Link to="#">Top Question</Link>
            <Link to="#">Help</Link>
        </div>
        <div className="copyright">
            <p>&copy; 2024, Learners company Teachers and students</p>
        </div>
    </footer>
    </>
    );
}

export default Footer;