import React from "react";
import "./index.css";
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Blog1 from "./routes/Blog1";
import Contacts from "./routes/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog1 />} />
      <Route path="/contact" element={<Contacts />} />
    </Routes>
    
  );
}

export default App;
