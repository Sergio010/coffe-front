import React from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { Navbar } from "../General/Navbar/Navbar";
import Hero from "../Hero/Hero"; // Importa el componente Hero correctamente
import Services from "../General/Services/Services"; // Importa el componente Services correctamente
import Bottom from "../General/Bottom/Bottom";

function Menu() {
    const routes = [];
    routes.push({ to: "/", text: "Café Coffe" });
    routes.push({ to: "/", text: "Home" });
    routes.push({ to: "/listCoffees", text: "Listado de cafes" });
    routes.push({ to: "/login", text: "Iniciar Sesión" });
    routes.push({ to: "/create-user", text: "Crear cuenta" });
    routes.push({ to: "/list-testimonials", text: "Listado de Testimonios" });
    routes.push({ to: "/acerca-de", text: "Acerca de" });

    const { auth, logout } = React.useContext(AuthContext);

    if (auth.token) {
        routes.splice(0, routes.length);
        routes.push({ to: "/", text: "Café Coffe" });
        routes.push({ to: "/", text: "Home" });
        routes.push({ to: "/listCoffees", text: "Listado de cafes" });
        routes.push({ to: "/create-coffee", text: "Nuevo café" });
        //routes.push({ to: "/create-user", text: "Crear usuario" });
        routes.push({ to: "/list-users", text: "Listado de Usuarios" });
        routes.push({ to: "/list-testimonials", text: "Listado de Testimonios" });
        routes.push({ to: "/acerca-de", text: "Acerca de" });

    }

    const cerrarSesion = () => {
        logout();
        routes.push({ to: "/", text: "Café Coffe" });
        routes.splice(0, routes.length);
        routes.push({ to: "/", text: "Home" });
        routes.push({ to: "/listCoffees", text: "Listado de cafes" });
        routes.push({ to: "/login", text: "Iniciar Sesión" });
        routes.push({ to: "/acerca-de", text: "Acerca de" });
        routes.push({ to: "/create-user", text: "Crear cuenta" });


    };

    return (
        <div>
            <nav className="navbar">
                <ul>
                    {routes.map((item, index) => (
                        <li key={index}>
                            <NavLink
                                to={item.to}
                                activeClassName="active"
                                style={{ color: 'grey' }}
                            >
                                {item.text}
                            </NavLink>
                        </li>
                    ))}
                    {auth.token && (
                        <li>
                            <button onClick={cerrarSesion}>Salir</button>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    );
}

export { Menu };
