
import React from 'react';

function AcercaDe() {
    return (
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold text-center mb-5">Sobre Nosotros</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Desarrolladores y Repositorios */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold mb-3">Equipo de Desarrollo</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {}
              <div className="flex items-center">
                <span className="text-lg font-semibold mr-2">Benjamin Retamal Jara:</span>
                <a
                  href="https://github.com/bnjretamal"
                  className="text-lg hover:text-primary duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
GitHub                </a>
              </div>
  
              {}
              <div className="flex items-center">
                <span className="text-lg font-semibold mr-2">Sergio Retamal Vergara:</span>
                <a
                  href="https://github.com/Sergio010"
                  className="text-lg hover:text-primary duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
GitHub                </a>
              </div>
  
              {}
            </div>
          </div>
  
          {}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold mb-3">Misión y Visión</h2>
            <p className="text-lg">
              Nuestra misión es proporcionar soluciones innovadoras que satisfagan
              las necesidades de nuestros clientes en el mundo digital. Nos esforzamos
              por ofrecer productos de calidad que mejoren la vida de las personas
              y simplifiquen sus procesos diarios.
            </p>
            <p className="text-lg mt-4">
              Nuestra visión es ser líderes en el mercado tecnológico, reconocidos
              por nuestra excelencia en el desarrollo de software y la satisfacción
              del cliente.
            </p>
          </div>
          
           {}
            <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold mb-3">¿Por qué Creamos Esta Página de Cafés?</h2>
            <p className="text-lg">
                Creamos esta página dedicada al mundo del café con el objetivo de compartir nuestra pasión por esta bebida única. Queremos proporcionar información detallada sobre diferentes tipos de café, métodos de preparación, y recomendaciones para los amantes del café en todo el mundo. Nuestro objetivo es convertirnos en una fuente confiable de conocimiento y disfrute para todos los aficionados al café.
            </p>
            </div>

        </div>
      </div>
    );
  }

export {AcercaDe};