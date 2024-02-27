import React, { useEffect } from "react";
import Section1 from "../AllSections/section-1";
import Section2 from "../AllSections/section-2";
import Section3 from "../AllSections/section-3";
import Section4 from "../AllSections/section-4";
import Section5 from "../AllSections/section-5";
import "./Bodysection.css";

const BodySection = () => {

    useEffect(() => {
        function reveal() {
            var reveals = document.querySelectorAll('.reveal');
            for (var i = 0; i < reveals.length; i++) {
                let windowHeight = window.innerHeight;
                let revealTop = reveals[i].getBoundingClientRect().top;
                var revealPoint = 150;
                if (revealTop < windowHeight - revealPoint) {
                    reveals[i].classList.add('active4');
                }
                else {
                    reveals[i].classList.remove('active4');
                }
            }
        }
        
        window.addEventListener('scroll', reveal);
        
        return () => {
            window.removeEventListener('scroll', reveal);
        };
    }, []);

    return (
    <>
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    </>
    )
}

export default BodySection;