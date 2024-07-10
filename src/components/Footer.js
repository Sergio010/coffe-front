import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="container" style={{ backgroundColor: '#3d2517', color: 'white', padding: '20px' }}>
      <p>&copy; 2024 Café Coffee. All rights reserved.</p>
      
      {/* Social links */}
      <div className="flex items-center justify-center gap-3 mt-6">
        <a href="#" className="text-white hover:text-primary duration-300">
          <FaInstagram className="text-3xl" />
        </a>
        <a href="#" className="text-white hover:text-primary duration-200">
          <FaFacebook className="text-3xl" />
        </a>
        <a href="#" className="text-white hover:text-primary duration-200">
          <FaLinkedin className="text-3xl" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
