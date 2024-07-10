import React from "react";
import {Hero} from "./components/General/Hero/Hero.jsx";
import {Navbar} from "./components/General/Navbar/Navbar.jsx";
import {Services} from "./components/General/Services/Services.jsx";
import {Bottom} from "./components/General/Bottom/Bottom.jsx";

import "aos/dist/aos.css";


const Home = () => {
  return (
    <div className="container my-4">
      <h1>Bienvenido a Coffee Cafe</h1>
      <p>Esta es la página principal.</p>
    </div>
  );
};

export default Home;

