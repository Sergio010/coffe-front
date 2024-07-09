import React from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";

function Menu() {
    const routes = [];

    routes.push({to:"/", text: "Home"});
    routes.push({to: "/page1", text: "Pagina 1"});
    routes.push({to: "/page2", text: "Pagina 2"});
    routes.push({to: "/listCoffees", text: "Listado de cafes"});
    routes.push({to: "/login", text: "Iniciar Sesión"});

    const { auth, logout } = React.useContext(AuthContext);

    if(auth.token){
        routes.splice(0,routes.length);
        routes.push({to:"/", text: "Home"});
        routes.push({to: "/page1", text: "Pagina 1"});
        routes.push({to: "/page2", text: "Pagina 2"});
        routes.push({to: "/listCoffees", text: "Listado de cafes"});
        routes.push({to: "/create-coffee", text: "Nuevo café"});
    }

    const cerrarSesion = () =>{
        logout();
        routes.splice(0,routes.length);
        routes.push({to:"/", text: "Home"});
        routes.push({to: "/page1", text: "Pagina 1"});
        routes.push({to: "/page2", text: "Pagina 2"});
        routes.push({to: "/listCoffees", text: "Listado de cafes"});
        routes.push({to: "/login", text: "Iniciar Sesión"});
    }

    return (
        <div>
            <h2>Menu</h2>
            <ul>
                {routes.map((item, index) => (
                    <li key={index}>
                        <NavLink 
                            to={item.to}
                            activeClassName="active"  // Aplica la clase 'active' cuando el enlace esté activo
                            style={{ color: "grey" }}   // Puedes aplicar estilos adicionales aquí si lo deseas
                        >
                            {item.text}
                        </NavLink>
                    </li>
                ))}
                {auth.token ? (
                    <li>
                        <button onClick={cerrarSesion}>Salir</button>
                    </li>
                ) : null}
            </ul>
        </div>
    );
}

export { Menu };
