import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Blog1 from "./routes/Blog1";
import Contacts from "./routes/Contact";
import SignUp from "./routes/signup";
import SignIn from "./routes/SignIn";
import DashBoard from './routes/dashboard';
import Createtest from './routes/createTest';
import CreatedBy from "./routes/CreatedBy";
import { useAuth } from './AuthContext';

function App() {
  const { userId } = useAuth();

  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog1 />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        {userId && 
            <>
            <Route path="/dashboard" element={<DashBoard userId={userId} />} />
            <Route path="/createTest" element={<Createtest userId={userId} />} />
            <Route path="/created" element={<CreatedBy userId={userId} />} />
            </>
        }
    </Routes>
  );
}

export default App;
