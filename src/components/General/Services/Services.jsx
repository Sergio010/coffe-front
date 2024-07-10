import React from "react";
import Img2 from "../../../assets/assets/coffee2.png";
import Img3 from "../../../assets/assets/coffee-white.png";

const ServicesData = [
    {
      id: 1,
      img: Img2,
      name: "Maquinas",
      description:
        "Ofrecemos una variedad de máquinas de café de última generación, diseñadas para satisfacer las necesidades más exigentes de nuestros clientes. Desde máquinas automáticas hasta modelos personalizables, garantizamos calidad y eficiencia en cada taza.",
      aosDelay: "100",
    },
    {
      id: 2,
      img: Img3,
      name: "Granos",
      description:
        "Nuestros granos de café son seleccionados cuidadosamente de las mejores regiones cafetaleras del mundo. Con métodos de cultivo sostenibles y un proceso de tostado artesanal, ofrecemos un café con sabor único y aroma irresistible.",
      aosDelay: "300",
    },
    {
      id: 3,
      img: Img2,
      name: "Sucursales",
      description:
        "Estamos presentes en múltiples ubicaciones estratégicas, ofreciendo la experiencia única de Coffee Cafe en diferentes ciudades. Cada sucursal está diseñada para brindar un ambiente acogedor y un servicio excepcional, haciendo que cada visita sea memorable.",
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
                  className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
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
                    <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
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