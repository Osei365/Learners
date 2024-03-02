import React from 'react';
import blog from '../assets/blog1.jpg';
import 'boxicons/css/boxicons.min.css';
import './BlogSection.css';
import blogs from './AllBlogs';
import { useRef , useEffect } from 'react';

const BlogSection1 = () => {

    const titlesRefs = useRef([]);
    titlesRefs.current = [];
    if (titlesRefs.current.length !== blogs.topics.length) {
        titlesRefs.current = Array(blogs.topics.length)
            .fill()
            .map((_, i) => titlesRefs.current[i] || React.createRef());
    }


    const handleClick = (index) => {
        /* titlesRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
        titlesRefs.current.forEach((ref, i) => {
            if (ref && i === index) {
                ref.classList.add('selected');
            } else if (ref) {
                ref.classList.remove('selected');
             }
        }) */
        const prevSelected = titlesRefs.current.findIndex(ref => ref.classList.contains('selected'));
        if (prevSelected !== -1) {
            titlesRefs.current[prevSelected].classList.remove('selected');
        }

        // Add 'selected' class to clicked topic
        titlesRefs.current[index].classList.add('selected');
        
        // Scroll to the corresponding title
        titlesRefs.current[index].scrollIntoView({ behavior: 'smooth' });
    }

    useEffect(() => {
        titlesRefs.current[0].classList.add('selected');
    }, []);

    return (
    <div className="main-blog">
        <h1>How to use python to save data to your database</h1>
        <span className="span">13th March 2024 <strong>&#x2022;</strong> <i class='bx bx-time'></i> 08:45</span>
        <img src={blog} alt="blog-pics-1" />
        <div className="blog-content">
            <div className="sub-topics">
                {blogs.topics.map((blog, index) => (
                    <span className='topic' key={index} onClick={() => handleClick(index)} ref={(el) => (titlesRefs.current[index]= el)}>
                        {blog.title}
                        </span>
                ))}
            </div> 
            <div className="content">
                {blogs.topics.map((blog, index) => (
                <div className="content-1" key={index} >
                    <h2>{blog.title}</h2>
                    <p>{blog.content}</p>
                </div>
                ))}
            </div>          
        </div>
    </div>
  )
}

export default BlogSection1