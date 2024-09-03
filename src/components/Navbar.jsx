import React from "react";
import logo from "../assets/KT_Logo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      {/* Logo */}
      <div className="flex items-center">
        <img
          className="h-12 sm:h-16 transform transition-transform duration-300 hover:-translate-y-1"
          src={logo}
          alt="logo"
        />
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-4 text-2xl sm:text-3xl">
        <a
          href="https://www.linkedin.com/in/khadija-tahira-3379671b2/"
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition-transform duration-300 hover:-translate-y-1"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/khadijatahira2001"
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition-transform duration-300 hover:-translate-y-1"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
