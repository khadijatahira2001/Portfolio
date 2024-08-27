import React from "react";
import profilePic from "../assets/img.jpg";
import resume from "../assets/Khadija_resume.pdf";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Khadija_Resume.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="border-b border-neutral-900 pb-24 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-8xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Khadija Tahira
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className=" bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-6xl tracking-tight text-transparent"
            >
              FrontEnd Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className=" my-2 max-w-[53rem] py-6 font-light text-2xl tracking-tighter"
            >
              A passionate and skilled Frontend developer dedicated to creating
              visually appealing and highly functional websites. I specialize in
              crafting visually appealing and user-friendly web interfaces. With
              a strong foundation in HTML, CSS, and JavaScript, coupled with
              expertise in modern frameworks like{" "}
              <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text  tracking-tight text-transparent font-semibold">
                React, Tailwind CSS, MUI
              </span>{" "}
              . I transform design concepts into interactive digital
              experiences. Explore my work and let's build something great
              together!
            </motion.p>
            <motion.button
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              onClick={handleDownload}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent px-6 py-2 mt-4 border-4 border-purple-400  rounded-full hover:text-white transition-colors duration-300 ease-in-out"
            >
              Download Resume
            </motion.button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="w-80 h-80 mt-20 rounded-full"
              src={profilePic}
              alt="profile pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
