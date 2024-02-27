import React from "react";
import Laptop8 from "../assets/laptop8.png";
import Quiz from "../assets/quiz.png";
import Iq from "../assets/iq.png";
import "./section-3.css";

const Section3 = () => {
    return (
        <section className="section-1 reveal">
        <div className="descrip2">
            <h1>Education is creating a future</h1>
            <p>Get ready ready questions and answers for you student!
                Set question for your student test now and have them take the test.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                doloremque laudantium, totam rem aperiam, eaque ipsa 
                quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
        </div>
        <div className="image2">
            <img className="main-img" src={Laptop8} alt="Laptop" />
            <div className="round1"><img src={Quiz} alt="quiz"/></div>
            <div className="round2"><img src={Iq}  alt="Iq"/></div>
        </div>
    </section>
    )
}

export default Section3;