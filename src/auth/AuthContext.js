import React from "react";

export const AuthContext = React.createContext();

export function AuthProvider({ children }) {
    const [auth, setAuth] = React.useState({ token: null });

    React.useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setAuth({ token: token });
        }
    }, []);

    const setToken = async ({ token }) => { // Corregido: Se agregaron paréntesis alrededor de {token}
        localStorage.setItem("token", token);
        setAuth({ token: token }); // Corregido: Se cambiaron {{token:token}} por {token: token}
    };

    const logout = () => {
        localStorage.removeItem("token");
        setAuth({ token: null }); // Corregido: Se cambiaron {token:null}) por {token: null}
    };

    return (
        <AuthContext.Provider value={{ auth, setToken, logout }}> {/* Corregido: Se agregaron paréntesis para envolver el value */}
            {children}
        </AuthContext.Provider>
    );
}
