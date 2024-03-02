import React from "react";
import "./index.css";
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Blog from "./routes/Blog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
    
  );
}

export default App;
