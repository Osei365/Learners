import React from "react";
import "./section-5.css";

const Section5 = () => {
    return (
        <section id="newsletter" className="section-p1 section-m1"> 
            <div className="newstext">
                <h4>Sign Up For Newsletters</h4>
                <p>Get E-mail updates on New courses as Well as our <span>special offers</span></p>
            </div>
            <div class="form">
                <input type="text" placeholder="Your email address" />
                <button className="normal">Sign Up</button>
            </div>
        </section>
    );
};

export default Section5;