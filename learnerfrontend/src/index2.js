import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App2 from './App2';
import { AuthProvider } from './AuthContext';

ReactDOM.render(
    <BrowserRouter>
        <AuthProvider>
        <App2 />
        </AuthProvider>
    </BrowserRouter>,
    document.getElementById('root')
);
