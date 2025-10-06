"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Typewrite = ({ darkMode }) => {
  return (
    <div
      className={`inline-block w-full lg:w-[250px] mt-4 px-5 py-3 rounded-xl text-lg font-semibold shadow-md transition-all duration-500 ${
        darkMode
          ? "bg-[#2c2c54]/60 text-pink-300"
          : "bg-white/70 backdrop-blur-md text-purple-700"
      }`}
    >
      I{" "}
      <Typewriter
        words={["Design", "Build", "Deploy", "Optimize"]}
        loop
        typeSpeed={80}
        deleteSpeed={50}
        delaySpeed={1000}
        cursor
        cursorStyle="|"
      />{" "}
      Websites 💻
    </div>
  );
};

export default Typewrite;
