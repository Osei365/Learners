import React, { createContext, useState, useContext } from 'react';


const AuthContext = createContext();

export const AuthProvider = ({children}) =>  {
    const [userId, setUserId ] = useState(null);
    const [isLogged, setIsLogged] = useState(false);

    const loginUser = (userId) => {
        setUserId(userId);
        setIsLogged(true);
    }
    const logout = () => {
        setUserId(nul);
        setIsLogged(false);
    }

    return (
        <AuthContext.Provider values={{userId, loginUser, logout, isLogged }}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => {
    useContext(AuthContext);
};