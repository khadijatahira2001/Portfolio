import React from "react";
import profilePic from "../assets/img.jpg";
import { ABOUT_TEXT, ABOUT_TEXT1 } from "../constants";
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About<span className="text-purple-400"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img
              className="w-96 h-96 mt-20 rounded-lg"
              src={profilePic}
              alt="aboutImage"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="text-xl my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
          <div className="flex justify-center lg:justify-start -mt-[47px]">
            <p className="text-lg my-2 max-w-xl py-6">{ABOUT_TEXT1}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
