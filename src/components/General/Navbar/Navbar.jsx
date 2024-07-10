import React from "react";
import Logo from "../../../assets/assets/coffee2.png";
import { NavLink } from "react-router-dom";


const Menu = [
  
];

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-secondary to-secondary/90 shadow-md bg-gray-900 text-white">
      <div className="container py-2">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <div data-aos="fade-down" data-aos-once="true">
            <NavLink
              to="/"
              className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive"
            >
              <img src={Logo} alt="Logo" className="w-14" />
              Coffee Cafe
            </NavLink>
          </div>

          {/* Link section */}
          <div
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
            className="flex justify-between items-center gap-4"
          >
            <ul className="hidden sm:flex items-center gap-4">
              {/* Agrega tus enlaces de navegación aquí */}
              <li>
                <NavLink
                  to="/page1"
                  className="inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200"
                >
                  Page 1
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/listCoffees"
                  className="inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200"
                >
                  Listado de Cafés
                </NavLink>
              </li>
            </ul>
            <button className=" bg-primary/70 hover:scale-105 duration-200 text-white px-4 py-2 rounded-full flex items-center gap-3">
              Iniciar sesión
            </button>
            <button className=" bg-primary/70 hover:scale-105 duration-200 text-white px-4 py-2 rounded-full flex items-center gap-3">
              Registrarse
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export {Navbar};
