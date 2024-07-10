import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import FooterBg from "../../../assets/assets/website/coffee-footer.jpg"
const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];


const Footer = () => {
  return (
    <footer className="bg-brown-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
        <div>
          <ul className="flex space-x-4">
            {FooterLinks.map((data, index) => (
              <li key={index}>
                <a
                  href={data.link}
                  className="hover:text-primary duration-200"
                >
                  {data.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
