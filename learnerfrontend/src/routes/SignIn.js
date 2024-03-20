import React from 'react';
import Signin from "../SignIn/Sign-in.js";

const SignIn = ({ onLogin }) => {
    return (
        <div>
            <Signin onLogin />
        </div>
    )
}

export default SignIn;