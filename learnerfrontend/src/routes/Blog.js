import React from 'react';
import Navbar from "../NavBar/NavBar";
import BlogSection1 from '../blog/BlogSection1';
import Footer from '../Footer/Footer';
import Articles from '../blog/Articles';

const Blog = () => {
  return (
    <div>
         <Navbar />
         <BlogSection1 />
         <Articles />
        <Footer />
    </div>
  )
}

export default Blog