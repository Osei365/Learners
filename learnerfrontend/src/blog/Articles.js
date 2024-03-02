import React from 'react';
import tech1 from '../assets/tech1.jpg';
import tech3 from '../assets/tech3.jpg';
import tech2 from '../assets/tech2.jpg';
import './Articles.css';
import { Link } from 'react-router-dom';

const Articles = () => {

    
  return (
    <div className="container">
        <h2>Recommended Articles</h2>
        <div className="article-contain">
            <div className="articles">
                <img src={tech1} alt="pic-1" />
                <span>Tips to Create a well Optimized website </span>
                <p>Internally, React uses several clever techniques to minimize the number of costly DOM operations required to update the UI. For many applications,
                using React will lead to a fast user interface without doing much work to specifically optimize for performance.....</p>
                <Link to="#">Continue Reading &rarr;</Link>
            </div>
            <div className="articles">
                <img src={tech3} alt="pic-2" />
                <span>Tips to Create a well Optimized website </span>
                <p>Internally, React uses several clever techniques to minimize the number of costly DOM operations required to update the UI. For many applications,
                using React will lead to a fast user interface without doing much work to specifically optimize for performance</p>
                <Link to="#">Continue Reading &rarr;</Link>
            </div>
            <div className="articles">
                <img src={tech2} alt="pic-3" />
                <span>Tips to Create a well Optimized website </span>
                <p>Internally, React uses several clever techniques to minimize the number of costly DOM operations required to update the UI. For many applications,
                using React will lead to a fast user interface without doing much work to specifically optimize for performance</p>
                <Link to="#">Continue Reading &rarr;</Link>
            </div>
        </div>
    </div>
  )
}

export default Articles