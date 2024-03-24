import React, { useState } from 'react';
import './signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {  useNavigate } from "react-router-dom";
import { useAuth } from '../AuthContext';

const Signup = () => {
    const navigate = useNavigate();
    const { loginUser } = useAuth();
    const [isPassword, setPassword] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        institution: ''
    });
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    }
    
    const togglePassword = () => {
        setPassword(prevState => !prevState);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        try {
            const response = await fetch('http://127.0.0.1:5000/api/learners/v1/sign-up', {
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
            if(data.isValid) {
                setIsLoggedIn(true);
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

    return (
    <div class="containers">
        {error  && 
            <div class="logo">
                {error}
            </div>
        }
        <div class="welcome-me">
            <span class="hello-msg">Hello</span>
            <span class="greetings">Welcome Tutors!</span>
        </div>
        <div class="sign-up">
            <form onSubmit={handleSubmit}>
                <div class="content-div">
                    <div class="em-cont">
                        <label for="first_name">First Name</label>
                        <input 
                            type="text"
                            class="the-control2"
                            id="first_name"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleChange} 
                            placeholder="Enter your first name"
                        />
                    </div>
                    <div class="em-cont">
                        <label for="last_name">Last Name</label>
                        <input 
                            type="text"
                            class="the-control2"
                            id="last_name"
                            name="last_name" 
                            value={formData.last_name}
                            onChange={handleChange}
                            placeholder="Enter Last Name"
                        />
                    </div>
                    <div class="em-cont">
                        <label for="email">Email</label>
                        <input 
                            type="email"
                            class="the-control2"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            name="email" 
                            placeholder="Enter email"
                        />
                    </div>
                    <div class="em-cont">
                        <label for="institution">Institution</label>
                        <input 
                            type="text"
                            class="the-control2"
                            id="institution"
                            value={formData.institution}
                            onChange={handleChange}
                            name="institution" 
                            placeholder="Enter Your Institution"
                        />
                    </div>
                    <div class="em-cont">
                        <label for="password">Password</label>
                        <div class="m-ctrl">
                        <input 
                                    type={isPassword ? 'text' : 'password'}
                                    className="the-control"
                                    value={formData.password}
                                    onChange={handleChange}
                                    id="password"
                                    name="password" 
                                    placeholder="Enter password" 
                                />
                                <FontAwesomeIcon 
                                    icon={isPassword ? faEyeSlash : faEye}
                                    id="togglePassword" 
                                    onClick={togglePassword} 
                                    style={{ cursor: 'pointer' }}
                                    /> 
                        </div>
                    </div>
                    <br />
                    <button type="submit" class="primary-btn">Sign Up</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Signup