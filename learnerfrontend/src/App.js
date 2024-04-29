import React from "react";
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
import { useAuth } from './AuthContext';
import Student from "./routes/Student";
import Setting from "./routes/setting";


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
        {userId && (
          <>
        <Route path="/dashboard" element={<DashBoard  />} />
        <Route path="/createTest" element={<Createtest  />} />
        <Route path="/created" element={<CreatedBy />} />
        <Route path="/students" element={<Student  />} />
        <Route path="/settings" element={<Setting />} />
        </>
        )}
    </Routes>
  );
}

export default App;
