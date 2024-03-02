import React from 'react';
import Teacherpics from '../assets/teacher-about.jpg';
import './AboutSecond.css';

const AboutSecond = () => {
  return (
    <section class="descriptive-pics">
        <div class="contains-image">
            <img src={Teacherpics} alt="teacher"/>
        </div>
        <span class="span-it">
            #Connect with your students from anywhere around the world.
        </span>
    </section>
  )
}

export default AboutSecond