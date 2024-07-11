import React from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { Navbar } from "../General/Navbar/Navbar";
import Hero from "../Hero/Hero"; 
import Services from "../General/Services/Services"; 
import Bottom from "../General/Bottom/Bottom";
import Logo from "../../assets/assets/website/coffee_logo.png";


function Menu() {
    const routes = [];
    routes.push({ to: "/", text: "Home" });
    routes.push({ to: "/listCoffees", text: "Cafés" });
    routes.push({ to: "/acerca-de", text: "Acerca de" });
    routes.push({ to: "/login", text: "Iniciar Sesión" });
    routes.push({ to: "/create-user", text: "Crear cuenta" });

    const { auth, logout } = React.useContext(AuthContext);

    if (auth.token) {
        routes.splice(0, routes.length);
        routes.push({ to: "/", text: "Home" });
        routes.push({ to: "/listCoffees", text: "Cafés" });
        routes.push({ to: "/create-coffee", text: "Nuevo café" });
        //routes.push({ to: "/create-user", text: "Crear usuario" });
        routes.push({ to: "/list-users", text: "Usuarios" });
        routes.push({ to: "/acerca-de", text: "Acerca de" });

    }

    const cerrarSesion = () => {
        logout();
        routes.splice(0, routes.length);
        routes.push({ to: "/", text: "Home" });
        routes.push({ to: "/listCoffees", text: "Cafés" });
        routes.push({ to: "/acerca-de", text: "Acerca de" });
        routes.push({ to: "/create-user", text: "Crear cuenta" });
        routes.push({ to: "/login", text: "Iniciar Sesión" });
        routes.push({ to: "/create-user", text: "Crear cuenta" });



    };

    return (
        <>
            <div className="bg-gradient-to-r from-secondary to-secondary/90 shadow-md bg-gray-900 text-white">
                <div className="container py-2">
                    <div className="flex justify-between items-center">
                        {/* Logo section */}
                        <div data-aos="fade-down" data-aos-once="true">
                            <a
                                href="#"
                                className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive"
                            >
                                <img src={Logo} alt="Logo" className="w-14" />
                                Café UCM
                            </a>
                        </div>

                        {/* Link section */}
                        <div
                            data-aos="fade-down"
                            data-aos-once="true"
                            data-aos-delay="300"
                            className="flex justify-between items-center gap-4"
                        >
                            <ul className="hidden sm:flex items-center gap-4">
                                {routes.map((item, index) => (
                                    <li key={index}>
                                        <NavLink
                                            to={item.to}
                                            activeClassName="active"
                                            className="bg-primary/70 hover:scale-105 duration-200 text-white px-4 py-2 rounded-full flex items-center gap-3"
                                            style={{ textDecoration: 'none' }}                                  >
                                            {item.text}
                                        </NavLink>
                                    </li>
                                ))}
                                {auth.token && (
                                    <li>
                                        <button onClick={cerrarSesion} className="bg-primary/70 hover:scale-105 duration-200 text-white px-4 py-2 rounded-full flex items-center gap-3">Salir</button>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export { Menu };
