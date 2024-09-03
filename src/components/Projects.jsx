import React from "react";
import { data } from "../constants";
import Tilt from "react-parallax-tilt";
import { SiGithub } from "react-icons/si";

import { motion } from "framer-motion";
const Projects = () => {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="border-b border-neutral-900 pb-16">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-32 text-center text-4xl"
      >
        Featured Projects
      </motion.h1>
      <motion.div className="flex flex-wrap justify-center">
        {data.map((project, index) => (
          <Tilt
            tiltMaxAngleX={25}
            tiltMaxAngleY={25}
            scale={1.05}
            transitionSpeed={300}
            key={index}
            className="relative max-w-sm bg-neutral-800 rounded-lg shadow-lg m-4 overflow-hidden group"
          >
            <div className="relative">
              <img
                className="w-72 h-64 object-cover rounded-t-lg"
                src={project.img}
                alt={project.name}
              />
            </div>

            <div className="px-6 py-4 w-72">
              <div className="font-bold text-xl mb-2 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">
                {project.name}
              </div>
              <p className="text-gray-400 text-base">{project.TagLine}</p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
              <p className="mb-4">{project.review}</p>
              <SiGithub
                onClick={() => handleClick(project.githubUrl)}
                size={34}
                className="text-white hover:text-gray-400 transition-colors duration-300 absolute top-2 right-2 cursor-pointer opacity-0 group-hover:opacity-100"
              />
            </div>
          </Tilt>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
