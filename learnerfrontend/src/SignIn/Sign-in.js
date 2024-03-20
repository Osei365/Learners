import React, { useState } from 'react';
import './Sign-in.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Signin = () => {

    const [isPassword, setPassword] = useState(false);
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


  return (
    <div class="container3">
            <div class="logo2">
            </div>
            <div class="welcome-me2">
                <span class="hello-msg2">Hello</span>
                <span class="greetings2">Welcome back Tutors!</span>
            </div>
            <div class="logging2">
                <form> 
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