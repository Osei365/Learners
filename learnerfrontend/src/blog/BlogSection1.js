import React from 'react';
/*import blog from '../assets/blog1.jpg';*/
import 'boxicons/css/boxicons.min.css';
import './BlogSection.css';
import { useRef , useEffect } from 'react';

const BlogSection1 = ({ selectedArticle, blogs}) => {

    const { title, image, content } = blogs.topics[selectedArticle]
    const titlesRefs = useRef(Array(content.length).fill(null));

    const handleClick = (index) => {
        const prevSelected = titlesRefs.current.findIndex(ref => ref.classList.contains('selected'));
        if (prevSelected !== -1) {
            titlesRefs.current[prevSelected].classList.remove('selected');
        }

        titlesRefs.current[index].classList.add('selected');
        
        titlesRefs.current[index].scrollIntoView({ behavior: 'smooth' });
    }


    
    useEffect(() => {
        if (titlesRefs.current[0]) {
            titlesRefs.current[0].classList.add('selected');
        }
    }, []);


    return (
                <div className="main-blog" key={selectedArticle}>
                    <h1>{title}</h1>
                    <span className="span">13th March 2024 <strong>&#x2022;</strong> <i className='bx bx-time'></i> 08:45</span>
                    <img src={image} alt={`blog-pic-${selectedArticle}`} />
                    <div className="blog-content">
                        <ul className="sub-topics">
                            {content.map((subTopic, index) => (
                                <li
                                    className='topic'
                                    key={index}
                                    onClick={() => handleClick(index)} ref={(el) => (titlesRefs.current[index]= el)}>
                                    {subTopic.title}
                                </li>
                            ))}
                        </ul>
                        <div className="content">
                            {content.map((subTopic, index) => (
                                <div id={`content-${index}`} className="content-1" key={index}>
                                    <h2>{subTopic.title}</h2>
                                    <p>{subTopic.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
    );
};

export default BlogSection1;

