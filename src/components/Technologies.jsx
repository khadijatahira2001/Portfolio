import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { SiFigma, SiTailwindcss } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiJavascript } from "react-icons/si";

import { SiFlask } from "react-icons/si";
import { SiSqlite } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-16">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-purple-400 p-4 text-center"
        >
          <RiReactjsLine className="text-7xl text-cyan-300" />
          <p className="mt-2 text-xl font-semibold text-neutral-600">React</p>
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-purple-400 p-4 text-center"
        >
          <SiRedux className="text-7xl text-purple-600" />
          <p className="mt-2 text-xl font-semibold text-neutral-600">Redux</p>
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-purple-400 p-4 text-center"
        >
          <SiTailwindcss className="text-7xl text-sky-500" />
          <p className="mt-2 text-xl font-semibold text-neutral-600">
            Tailwind
          </p>
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-purple-400 p-4 text-center"
        >
          <SiMui className="text-7xl text-sky-100" />
          <p className="mt-2 text-xl font-semibold text-neutral-600">MUI</p>
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-purple-400 p-4 text-center"
        >
          <SiFigma className="text-7xl text-pink-400" />
          <p className="mt-2 text-xl font-semibold text-neutral-600">Figma</p>
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-purple-400 p-4 text-center"
        >
          <SiFlask className="text-7xl text-neutral-500" />
          <p className="mt-2 text-xl font-semibold text-neutral-600">Flask</p>
        </motion.div>
        <motion.div
          variants={iconVariants(8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-purple-400 p-4 text-center"
        >
          <SiSqlite className="text-7xl text-cyan-800" />
          <p className="mt-2 text-xl font-semibold text-neutral-600">Sqlite</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
