import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/img.jpg";
import resume from "../assets/Khadija_resume.pdf";
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
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Khadija Tahira
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              FrontEnd Developer
            </span>
            <p className=" my-2 max-w-xl py-6 font-light text-xl tracking-tighter">
              {HERO_CONTENT}
            </p>
            <button
              onClick={handleDownload}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent px-6 py-2 mt-4 border-4 border-purple-400  rounded-full hover:text-white transition-colors duration-300 ease-in-out"
            >
              Download Resume
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img
              className="w-96 h-96 mt-20 rounded-full"
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
