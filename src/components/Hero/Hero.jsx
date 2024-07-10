import React from "react";
import HeroPng from "../../assets/assets/coffee2.png";


const Hero = () => {
  return (
    <div className="min-h-[550px] sm:min-h-[600px] bg-[#3d2517] flex justify-center items-center text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 md:gap-5 items-center">
          {/* Image section */}
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="order-2 sm:order-1 flex justify-center sm:justify-end relative"
          >
            <img
              data-aos-once="true"
              src={HeroPng}
              alt="Coffee image"
              className="w-[300px] sm:w-[450px] sm:scale-125 mx-auto spin rounded-lg"
              style={{ zIndex: 10 }} // Añadimos un zIndex para asegurarnos que la imagen esté delante del texto
            />
            {/* Text content */}
            <div className="absolute top-0 left-[340px] bg-white bg-opacity-80 p-4 rounded-lg shadow-lg text-black">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                CAFÉ COFFEE
              </h1>
              <p className="text-lg">
                En Coffee Cafe, nos dedicamos a ofrecerte no solo una taza de
                café, sino una experiencia única. Nuestros granos de café
                cuidadosamente seleccionados y nuestras máquinas de última
                generación garantizan que cada visita sea un momento para
                disfrutar y recordar.
              </p>
            </div>
          </div>
          {/* End of Image section */}
        </div>
      </div>
    </div>
  );
};


export default Hero;