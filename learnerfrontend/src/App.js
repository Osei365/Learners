import React from "react";
import "./index.css";
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Blog1 from "./routes/Blog1";
import Contacts from "./routes/Contact";
import SignUp from "./routes/signup";
import SignIn from "./routes/SignIn";
import DashBoard from './routes/dashboard';
import Createtest from './routes/createTest';
import CreatedBy from "./routes/CreatedBy";



function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog1 />} />
      <Route path="/contact" element={<Contacts />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/createTest" element={<Createtest />} />
      <Route path="/created" element={<CreatedBy />} />
    </Routes>
    </div>
    
  );
}

export default App;
