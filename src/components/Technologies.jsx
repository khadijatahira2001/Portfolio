import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { SiMui } from "react-icons/si";

import { SiFlask } from "react-icons/si";
import { SiSqlite } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="border-b border-purple-600 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-purple-600 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-purple-600 p-4">
          <SiTailwindcss className="text-7xl text-sky-500" />
        </div>
        <div className="rounded-2xl border-4 border-purple-600 p-4">
          <SiMui className="text-7xl text-sky-400" />
        </div>
        <div className="rounded-2xl border-4 border-purple-600 p-4">
          <SiFlask className="text-7xl text-neutral-500" />
        </div>
        <div className="rounded-2xl border-4 border-purple-600 p-4">
          <SiSqlite className="text-7xl text-cyan-800" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
