import React, { createContext, useContext, useState } from "react";

// Creating AuthContext using createContext function
const AuthContext = createContext(null);

// Inside AuthProvider component, managing state and functions
export const AuthProvider = ({ children }) => {
   const [isUser, setIsUser] = useState(false)

   const login = () => {
        setIsUser(true)        
   }

   const logout = () => {
        setIsUser(false)        
   }

   return <AuthContext.Provider value={{ isUser, login, logout }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
    return useContext(AuthContext);
};
