import React from "react";
import laptop from "../assets/laptop4.png";
import "./section-1.css";

const Section1 = () => {

    return (
        <section className="section-1" id="pop-up">
        <div className="descrip">
            <h1>Education is creating a future</h1>
            <p>Get ready ready questions and answers for you student!
                Set question for your student test now and have them take the test.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                doloremque laudantium, totam rem aperiam, eaque ipsa 
                quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <button>Register Now!</button>
        </div>
        <div className="image1">
            <img src={laptop} alt="laptop-pics"/>
            <div className="up"></div>
            <div className="down"></div>
        </div>
    </section>
    )

}
export default Section1