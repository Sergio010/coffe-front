import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import React, { useState, useEffect } from "react";
function PrivateRoute({children}){
    const {auth} = React.useContext(AuthContext);
    const location = useLocation();

    return auth.token ? (
        // Si el usuario está autenticado
        children
    ) : (
        // Si el usuario no está autenticado
        <Navigate to="/login" replace state={{ path: location.pathname }} />
    );
}



export {PrivateRoute};