import React, { createContext, useState, useContext, useEffect } from 'react';


const AuthContext = createContext();

export const AuthProvider = ({children}) =>  {
    const [userId, setUserId ] = useState(null);
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        if (storedUserId) {
          setUserId(storedUserId);
        }
      }, []);

    const loginUser = (userId) => {
        setUserId(userId);
        setIsLogged(true);
        localStorage.setItem('userId', userId);
    }
    const logout = () => {
        setUserId(null);
        setIsLogged(false);
        localStorage.removeItem('userId');
    }

    return (
        <AuthContext.Provider value={{userId, loginUser, logout, isLogged }}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => {
    return useContext(AuthContext);
};
