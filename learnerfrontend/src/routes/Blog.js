import React, { useState } from 'react';
import Navbar2 from "../NavBar/Navbar2";
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
         <Navbar2 />
         <Articles onArticleClick={handleSelectedOne}  blogs={blogs}/>
         <BlogSection1 selectedArticle={selectedArticle} blogs={blogs} />
        <Footer />
    </div>
  )
}

export default Blog