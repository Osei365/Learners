import React, { useState } from 'react';
import './Sign-in.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {  useNavigate } from "react-router-dom";
import { useAuth } from '../AuthContext';

const Signin = () => {
    const navigate = useNavigate();

    const [isPassword, setPassword] = useState(false);
    const { loginUser, userId } = useAuth();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState(null);

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    
    const togglePassword = () => {
        setPassword(prevState => !prevState);
    };
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        try {
            const response = await fetch('http://127.0.0.1:5000/api/learners/v1/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if(!response.ok) {
                throw new Error("Sign Up failed");
            }

            const data = await response.json();
            console.log(data);
            loginUser(data.teacherId);
            console.log(userId);
            if(data.isValid) {
                setIsLoggedIn(true);
                console.log(isLoggedIn);
            } else {
                setIsLoggedIn(false);
            }
            setError(null);
        } catch (error) {
            setError(error.message);
        }
    };

    if (isLoggedIn) {
        return  navigate("/dashboard");;
    }


    if (isLoggedIn) {
        return  navigate("/dashboard");
    }


    return (
    <div class="container3">
            {error && <div class="logo2">
            {error}
            </div>}
            <div class="welcome-me2">
                <span class="hello-msg2">Hello</span>
                <span class="greetings2">Welcome back Tutors!</span>
            </div>
            <div class="logging2">
                <form onSubmit={handleSubmit}> 
                    <div class="content-div2">
                        <div class="em-cont2">
                            <label for="email">Email</label>
                            <input 
                                type="email"
                                class="the-control3"
                                id="email"
                                name="email" 
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="enter email"
                            />
                        </div>
                        <div class="em-conts2">
                                <label for="password">Password</label> 
                                <div class="m-ctrl2">
                                <input 
                                    type={isPassword ? 'text' : 'password'}
                                    className="the-control1"
                                    id="password"
                                    name="password"
                                    value={formData.password} 
                                    onChange={handleChange}
                                    placeholder="Enter password" 
                                />
                                <FontAwesomeIcon 
                                    icon={isPassword ? faEyeSlash : faEye}
                                    id="togglePassword" 
                                    onClick={togglePassword} 
                                    style={{ cursor: 'pointer'  }} 
                                    />
                                </div>
                        </div>
                        <div class="forgot">
                            <span class="forgot">Forgot password?</span>
                        </div>
                        <br />
                            <button type="submit" class="primary-btn">Sign in</button>
                    </div> 
                </form> 
            </div>
        </div>
  )
}

export default Signin