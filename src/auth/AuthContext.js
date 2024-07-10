import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';



export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [auth, setAuth] = useState({ token: null, username: null });

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decodedToken = jwtDecode(token);
            //console.log("Decoded Token:", decodedToken); // Verifica el contenido del token decodificado
            const { sub: username } = decodedToken; 
            setAuth({ token, username });
        }
    }, []);

    const setToken = async (token) => {
        localStorage.setItem("token", token);
        const decodedToken = jwtDecode(token);
        //console.log("Decoded Token:", decodedToken); // Verifica el contenido del token decodificado
        const { sub: username } = decodedToken; //  'sub' en lugar de 'username'
        setAuth({ token, username });
    };

    const logout = () => {
        localStorage.removeItem("token");
        setAuth({ token: null, username: null });
    };

    return (
        <AuthContext.Provider value={{ auth, setToken, logout }}>
            {children}
        </AuthContext.Provider>
    );
}