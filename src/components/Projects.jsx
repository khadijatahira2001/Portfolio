import React from "react";
import { data } from "../constants";
import { FaArrowRight } from 'react-icons/fa'; 

const Projects = () => {
    const handleClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div className="border-b border-neutral-900 pb-16">
            <h1 className="my-20 text-center text-4xl">Projects</h1>
            <div className="flex flex-wrap justify-center">
                {data.map((project, index) => (
                    <div
                        key={index}
                        className="relative max-w-sm bg-neutral-800 rounded-lg shadow-lg m-4 overflow-hidden group"
                    >
                        <div className="relative">
                            <img
                                className="w-80 h-64 object-cover rounded-t-lg"
                                src={project.img}
                                alt={project.name}
                            />
                        </div>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">
                                {project.name}
                            </div>
                            <p className="text-gray-400 text-base">{project.TagLine}</p>
                        </div>
                        <div
                            className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"
                        >
                            <p className="mb-4">{project.review}</p>
                            <button
                                onClick={() => handleClick(project.githubUrl)}
                                className="bg-gradient-to-r from-pink-500 via-slate-500 to-purple-700 bg-clip-text text-2xl tracking-tight text-transparent px-6 py-2 border-4 border-purple-900 rounded-full transition-colors duration-300 ease-in-out"
                            >
                                View Project
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
