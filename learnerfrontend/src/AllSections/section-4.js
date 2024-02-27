import React from "react";
import Program3 from "../assets/program3.jpg";
import Program2 from "../assets/program2.jpg";
import Program1 from "../assets/program1.jpg";
import "./section-4.css";

const Section4 = () => {
    return (
        <section className="section-1 section-3 color reveal">
        <h1>Enroll your Students To Take Test</h1>
        <div className="samples-course">
            <div className="div-1 active2">All Questions</div>
            <div className="div-1">Courses</div>
            <div className="div-1">Programming</div>
            <div className="div-1">Database</div>
            <div className="div-1">Algorithims</div>
            <div className="div-1">Devops</div>
        </div>
        <div className="container-offers">
            <div className="programming">
                <img src={Program3} alt="program-pics3" />
                <div className="offers">
                    <div><span><i class='bx bxs-book-bookmark'></i></span> 1305 Questions</div>
                    <div><span><i class='bx bx-check'></i></span>More than 20 courses</div>
                    <div><span><i class='bx bx-time-five'></i></span> 3 Months duration</div>
                    <div className="active3">Enroll now</div>
                </div>
                <div className="des">All questions</div>
            </div>
            <div className="programming">
                <img src={Program2}  alt="program-pics2"/>
                <div className="offers">
                    <div><span><i class='bx bxs-book-bookmark'></i></span> 1305 Questions</div>
                    <div><span><i class='bx bx-check'></i></span>Programming courses</div>
                    <div><span><i class='bx bx-time-five'></i></span>8 Months duration</div>
                    <div className="active3">Enroll now</div>
                </div>
                <div className="des">Programming</div>
            </div>
            <div className="programming">
                <img src={Program1}  alt="program-pics1"/>
                <div className="offers">
                    <div><span><i class='bx bxs-book-bookmark'></i></span> 1305 Questions</div>
                    <div><span><i class='bx bx-check'></i></span>Relational Database</div>
                    <div><span><i class='bx bx-time-five'></i></span> 3 Months duration</div>
                    <div className="active3">Enroll now</div>
                </div>
                <div className="des">Data Base</div>
            </div>
        </div>
    </section>
    );
}

export default Section4; 