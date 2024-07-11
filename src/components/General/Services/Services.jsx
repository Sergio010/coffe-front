import React from "react";
import Img2 from "../../../assets/assets/coffee2.png";
import Img3 from "../../../assets/assets/granos.png";

import Img4 from "../../../assets/assets/cafetera.png";
import Img5 from "../../../assets/assets/sucursal.png";

const ServicesData = [
    {
      id: 1,
      img: Img4,
      name: "Maquinas",
      description:
        "Ofrecemos una variedad de máquinas de café de última generación.",
      aosDelay: "100",
    },
    {
      id: 2,
      img: Img3,
      name: "Granos",
      description:
        "Nuestros granos de café son seleccionados cuidadosamente.",
      aosDelay: "300",
    },
    {
      id: 3,
      img: Img5,
      name: "Sucursales",
      description:
        "Estamos presentes multiples ciudades ofreciendo una experiencia única.",
      aosDelay: "500",
    },
  ];
  
  const Services = () => {
    return (
      <>
        <span id="services"></span>
        <div className="py-10">
          <div className="container">
            {/* Heading section */}
            <div className="text-center mb-20">
              <h2 className="text-3xl font-bold"></h2>
            </div>
  
            {/* Services Card section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
              {ServicesData.map((service) => (
                <div
                  key={service.id}
                  data-aos="fade-up"
                  data-aos-delay={service.aosDelay}
                  className="rounded-2xl bg-white hover:bg-primary  relative shadow-xl duration-high group max-w-[300px]"
                  style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
                >
                  <div className="h-[250px] relative">
                    <img
                      src={service.img}
                      alt=""
                      className="max-w-full h-full object-cover rounded-2xl transform group-hover:scale-105 group-hover:rotate-6 duration-300"
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h1 className="text-xl font-bold mb-2">{service.name}</h1>
                    <p className="text-gray-500  duration-high text-sm line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Services;