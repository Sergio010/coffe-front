import React from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";

function Menu() {
    const routes = [];

    routes.push({to:"/", text: "Home"});
    routes.push({to: "/page1", text: "Pagina 1"});
    routes.push({to: "/listCoffees", text: "Listado de cafes"});
    routes.push({to: "/login", text: "Iniciar Sesión"});
    routes.push({to: "/list-testimonials", text: "Listado de Testimonios"});

    const { auth, logout } = React.useContext(AuthContext);

    if(auth.token){
        routes.splice(0,routes.length);
        routes.push({to:"/", text: "Home"});
        routes.push({to: "/page1", text: "Pagina 1"});
        routes.push({to: "/listCoffees", text: "Listado de cafes"});
        routes.push({to: "/create-coffee", text: "Nuevo café"});
        routes.push({to: "/create-user", text: "Crear usuario"});
        routes.push({to: "/list-users", text: "Listado de Usuarios"});
        routes.push({to: "/list-testimonials", text: "Listado de Testimonios"});


    }

    const cerrarSesion = () =>{
        logout();
        routes.splice(0,routes.length);
        routes.push({to:"/", text: "Home"});
        routes.push({to: "/page1", text: "Pagina 1"});
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
