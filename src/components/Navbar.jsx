import React from "react";
import logo from "../assets/KT_Logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img
          className="mx-2 h-20 transform transition-transform duration-300 hover:-translate-y-1"
          src={logo}
          alt="logo"
        />
      </div>
      <div className="m-10 flex items-center justify-center gap-6 text-4xl ">
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
