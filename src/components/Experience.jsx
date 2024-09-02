import React from "react";
import { Experiences } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-32 text-center text-6xl"
      >
        Experience
      </motion.h1>
      <div>
        {Experiences.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-ful lg:w-1/4"
            >
              <p className="mb-2 text-xl text-neutral-400">{experience.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h4 className="mb-2 text-xl font-semibold">
                {experience.role} -{" "}
                <span className="text-xl text-purple-100">
                  {experience.company}
                </span>
              </h4>
              <p className="mb-4 w-[700px] text-neutral-400 text-2xl">
                <ul  style={{  listStyleType: "disc" }}>
                  <li>
                    Worked on a project using Electron.js for desktop
                    applications.
                  </li>
                  <li>Integrated APIs to connect and retrieve data.</li>
                  <li>
                    Implemented Redux Toolkit to optimize state handling and
                    improve application performance.
                  </li>
                  <li>Applied backtracking to solve complex problems.</li>
                  <li>
                    Conducted debugging to identify and resolve software issues.
                  </li>
                  <li>
                    Utilized Tailwind CSS and Material-UI (MUI5) for creating
                    pixel-perfect designs and responsive interfaces.
                  </li>
                </ul>
              </p>
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-xl font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
