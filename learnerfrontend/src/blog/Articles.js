import React from 'react';
import './Articles.css';

const Articles = ({onArticleClick, blogs}) => {

    const handleArticleClick = (index) => {
        onArticleClick(index + 1);
      };

  return (
    <div className="container">
        <h2>Recommended Articles</h2>
        <div className="article-contain">
        {blogs.topics.slice(1).map((blog, index) =>
            <div className="articles" key={index}>
                <img src={blog.image} alt={`pic-${index}`}/>
                <span>{blog.title}</span>
                <p key={index}>{blog.content[0].content.slice(0, 100)}.....</p>
                <button onClick={() => handleArticleClick(index)}>Continue Reading &rarr;</button>
            </div>
        )}
        </div>
    </div>
  )
}

export default Articles