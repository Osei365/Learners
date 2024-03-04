import React, { useState } from 'react';
import Navbar from "../NavBar/NavBar";
import BlogSection1 from '../blog/BlogSection1';
import Footer from '../Footer/Footer';
import Articles from '../blog/Articles';
import blogs from '../blog/AllBlogs';

const Blog = () => {
  const [selectedArticle, setSelectedArticle] = useState(0);

  const handleSelectedOne = (index) => {
    setSelectedArticle(index);
  }
  return (
    <div>
         <Navbar />
         <BlogSection1 selectedArticle={selectedArticle} blogs={blogs} />
         <Articles onArticleClick={handleSelectedOne}  blogs={blogs}/>
        <Footer />
    </div>
  )
}

export default Blog