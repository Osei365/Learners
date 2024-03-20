import React, { useState } from 'react';
import './signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Signup = () => {
    
    const [isPassword1, setPassword1] = useState(false);
    const [isPassword2, setPassword2] = useState(false);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        phone_number: '',
        email: '',
        password: '',
        institution: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    }
    
    const togglePassword1 = () => {
        setPassword1(prevState => !prevState);
    };

    const togglePassword2 = () => {
        setPassword2(prevState => !prevState);
    };
    
  return (
    <div class="containers">
        <div class="logo">
        </div>
        <div class="welcome-me">
            <span class="hello-msg">Hello</span>
            <span class="greetings">Welcome Tutors!</span>
        </div>
        <div class="sign-up">
            <form method="POST">
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
                        <label for="phone_number">Phone Number</label>
                        <input 
                            type="number"
                            class="the-control2"
                            id="phoneNumber"
                            value={formData.phone_number}
                            onChange={handleChange}
                            name="phoneNumber" 
                            placeholder="Enter Last Name"
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
                                    type={isPassword1 ? 'text' : 'password'}
                                    className="the-control"
                                    value={formData.password}
                                    onChange={handleChange}
                                    id="password"
                                    name="password" 
                                    placeholder="Enter password" 
                                />
                                <FontAwesomeIcon 
                                    icon={isPassword1 ? faEyeSlash : faEye}
                                    id="togglePassword" 
                                    onClick={togglePassword1} 
                                    style={{ cursor: 'pointer' }}
                                    /> 
                        </div>
                    </div>
                    <div class="em-cont">
                        <label for="password2">Confirm Password</label>
                        <div class="m-ctrl">
                        <input 
                                    type={isPassword2 ? 'text' : 'password' }
                                    className="the-control"
                                    id="password2"
                                    name="password2" 
                                    value={formData.password2}
                                    onChange={handleChange}
                                    placeholder="Confirm password"
                                />
                               <FontAwesomeIcon 
                                    icon={isPassword2 ? faEyeSlash : faEye}
                                    id="togglePassword2" 
                                    onClick={togglePassword2} 
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