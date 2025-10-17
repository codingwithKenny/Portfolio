"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./component/Header";
import Typewrite from "./component/Tyoewriter";
import Icon from "./component/Icon";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 flex flex-col justify-center items-center z-50">
      <motion.svg
        viewBox="0 0 100 100"
        className="w-20 h-20 text-white"
        fill="currentColor"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
      >
        <polygon points="50,15 90,85 10,85" />
      </motion.svg>
      <p className="mt-6 text-white font-semibold text-lg animate-pulse">
        Loading...
      </p>
    </div>
  );
};

const Homepage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("open"); // 'open' or 'booked'

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div
      className={`relative min-h-screen overflow-hidden ${
        darkMode
          ? "bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2e] to-[#0f0f1a] text-white"
          : "bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 text-black"
      } transition-all duration-700`}
    >
      {/* Header */}
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

      {/* Hero Section */}
      <section className="flex flex-col-reverse gap-10 lg:flex-row items-center justify-center text-center lg:text-left min-h-screen px-4 sm:px-8 md:px-20 relative">
        {/* Glowing background */}
        <div className="absolute -top-20 -left-20 w-72 h-72 sm:w-80 sm:h-80 bg-gradient-to-r from-pink-400 to-purple-600 opacity-20 blur-[130px] rounded-full animate-pulse pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-60 h-60 sm:w-72 sm:h-72 bg-gradient-to-tr from-purple-500 to-pink-300 opacity-20 blur-[100px] rounded-full animate-pulse pointer-events-none" />

        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col gap-4 max-w-xl z-10"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight -mt-16 lg:mt-36 sm:mt-20">
            <span
              className={`bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Hello, I'm Ridwat Kenny
            </span>

            {/* Availability Badge */}
            <motion.a
              href={status === "open" ? "/contact" : "#"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              whileHover={{ scale: status === "open" ? 1.08 : 1 }}
              whileTap={{ scale: 0.95 }}
              className={`ml-2 inline-flex items-center px-3 py-1 mt-3 sm:mt-4 rounded-full text-sm sm:text-base font-semibold cursor-pointer
                ${
                  status === "open"
                    ? "bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 text-white shadow-md hover:shadow-lg hover:shadow-pink-400/40 animate-pulse"
                    : "bg-gray-300 text-gray-700 cursor-not-allowed"
                } transition-all duration-300`}
            >
              {status === "open" ? "Open to Work" : "💼 Fully Booked"}
            </motion.a>
          </h1>

          <p
            className={`text-sm sm:text-base md:text-lg leading-relaxed mt-2 ${
              darkMode ? "text-white" : "text-gray-600"
            }`}
          >
            I am a passionate{" "}
            <span
              className={`${
                darkMode ? "text-pink-300" : "text-pink-500"
              } font-semibold`}
            >
              Full Stack Developer
            </span>{" "}
            crafting beautiful, functional, and impactful digital experiences.
          </p>

          <p
            className={`text-sm sm:text-base md:text-lg leading-relaxed mt-2 ${
              darkMode ? "text-white" : "text-gray-600"
            }`}
          >
            From{" "}
            <span className="font-semibold">
              building responsive user interfaces
            </span>{" "}
            to{" "}
            <span className="font-semibold">
              integrating robust backend systems
            </span>
            , I also specialize in{" "}
            <span className="font-semibold">automating workflows</span> to reduce
            repetitive tasks and streamline processes, making life easier for
            both users and businesses.
          </p>

          <Typewrite darkMode={darkMode} />

          <motion.a
            href="/projects"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            className="mt-6 w-full sm:w-[250px] mx-auto lg:mx-0 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold shadow-lg hover:shadow-2xl hover:shadow-pink-400/40 transition-all duration-300"
          >
            View My Work
          </motion.a>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative mb-10 lg:mb-0"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-400 to-purple-400 blur-3xl opacity-30 animate-pulse"></div>
          <motion.img
            src="./now-.png"
            alt="Ridwat"
            width={280}
            height={280}
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="rounded-full shadow-2xl mt-36 lg:mt-2 border-4 border-pink-300 relative z-10 backdrop-blur-lg mx-auto lg:mx-0"
          />
        </motion.div>
      </section>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex justify-center lg:justify-start lg:-mt-5 lg:ml-80"
      >
        <Icon />
      </motion.div>
    </div>
  );
};

export default Homepage;
