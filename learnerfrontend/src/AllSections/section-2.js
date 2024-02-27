import React from "react";
import Laptop2 from "../assets/laptop2.png";
import "./section-2.css";

const Section2 = () => {
    return (
    <section class="section-1 color reveal">
        <div className="contains-text">
            <h1>Lorem ipsum dolor sit amet!</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae 
                ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
        </div>
        <div className="contains-pics">
            <img src={Laptop2} alt="laptop-pics"/>
            <div className="top-left">
                <h6>Lorem</h6>
                <p>lorem ipsum dolor</p>
            </div>
            <div className="top-right">
                <h6>Lorem</h6>
                <p>lorem ipsum dolor</p>
            </div>
            <div className="bottom-left">
                <h6>Lorem</h6>
                <p>lorem ipsum dolor</p>
            </div>
            <div className="bottom-right">
                <h6>Lorem</h6>
                <p>lorem ipsum dolor</p>
            </div>
        </div>
    </section>
    );
}
export default Section2;