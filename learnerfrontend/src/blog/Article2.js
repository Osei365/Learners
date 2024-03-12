import React from 'react';
import './Article2.css';
import blogs from './AllBlogs';
import { Link } from 'react-router-dom';

const Articles = () => {

  return (
    <div className="blogAll">
        <section id="page-header" className="blog-header">
            <h2>#Recommended Articles</h2>
            <p>Read more on trending technologies and programming languages</p>
        </section>
        <section id="blog">
        {blogs.topics.slice(1).map((blog, index) =>
            <div class="blog-box">
                <div className="blog-img">
                <img src={blog.image} alt={`pic-${index}`}/>
                </div>
                <div className="blog-details">
                    <h4>{blog.title}</h4>
                    <p key={index}>{blog.content[0].content.slice(0, 100)}.....</p>
                        <Link to="#">CONTINUE READING</Link>
                </div>
                <h1>13/01</h1>
            </div>
        )}
        </section>
    </div>
)
}

export default Articles