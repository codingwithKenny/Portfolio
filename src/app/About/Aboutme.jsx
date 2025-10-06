"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Aboutme = ({ darkMode }) => {
  return (
    <div
      className={`relative min-h-screen p-5 mt-20 transition-all duration-700 ${
        darkMode
          ? "bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2e] to-[#0f0f1a] text-white"
          : "bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 text-slate-900"
      } lg:flex lg:items-center lg:justify-between`}
    >
      {/* Image Section */}
      <motion.div
        className="w-full lg:w-1/2 mb-5 lg:mb-0 lg:ml-10 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.05, rotate: 1 }}
      >
        <Image
          src="/MY PICTURE.jpg"
          alt="Ridwat Kenny"
          width={450}
          height={450}
          className={`rounded-xl shadow-2xl border-4 ${
            darkMode ? "border-gray-500" : "border-pink-300"
          }`}
        />
      </motion.div>

      {/* Text Content Section */}
      <motion.div
        className="w-full lg:w-1/2 px-5 text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <h1
          className={`text-5xl font-extrabold mb-4 tracking-tight ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          About me.
        </h1>

        <p
          className={`mb-4 font-semibold ${
            darkMode ? "text-pink-400" : "text-pink-500"
          } text-lg`}
        >
          Full Stack Developer
        </p>

        <p
          className={`mb-4 leading-relaxed ${
            darkMode ? "text-gray-300" : "text-gray-700"
          } text-base`}
        >
          Hi, I'm Okunlola Ridwat, a full stack developer on a mission to craft
          meaningful digital experiences. My journey began with a fascination
          for how technology shapes the world around us, and it quickly evolved
          into a passion for creating tools that make life simpler, smarter, and
          more connected.
        </p>

        <p
          className={`mb-6 leading-relaxed ${
            darkMode ? "text-gray-300" : "text-gray-700"
          } text-base`}
        >
          From building responsive user interfaces to architecting robust
          backend systems, I love tackling complex challenges and turning ideas
          into functional, elegant solutions. Over time, my curiosity led me to
          explore AI and automation — finding ways to reduce repetitive tasks,
          streamline workflows, and enhance human productivity.
        </p>
        <p
          className={`mb-6 leading-relaxed ${
            darkMode ? "text-gray-300" : "text-gray-700"
          } text-base`}
        >
          Every project I work on is an opportunity to merge creativity with
          efficiency. I thrive on collaboration, constantly learning, and using
          emerging technologies to solve real-world problems. My goal is to
          create seamless, intelligent applications that not only meet
          expectations but delight users and drive innovation.
        </p>

        {/* Progress Bars */}
        <div className="mb-8 space-y-3">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "95%" }}
            transition={{ duration: 1.2 }}
          >
            <Progress
              value={95}
              text="Frontend Development"
              className={`rounded-full h-6 ${
                darkMode
                  ? "bg-gray-700 text-white"
                  : "bg-pink-100 text-gray-900"
              }`}
            />
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80%" }}
            transition={{ duration: 1.4 }}
          >
            <Progress
              value={80}
              text="Backend Development"
              className={`rounded-full h-6 ${
                darkMode
                  ? "bg-gray-700 text-white"
                  : "bg-pink-100 text-gray-900"
              }`}
            />
          </motion.div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          <Link href={"https://okunlolaridwat.cv/"}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                className={`border font-semibold transition-all duration-300 ${
                  darkMode
                    ? "bg-pink-500 border-pink-500 text-white hover:bg-pink-600"
                    : "bg-black border-white text-white hover:bg-gray-800"
                }`}
              >
                View CV
              </Button>
            </motion.div>
          </Link>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
              className={`font-semibold border transition-all duration-300 ${
                darkMode
                  ? "text-black bg-white hover:text-white hover:bg-pink-500"
                  : "text-black bg-white hover:text-pink-500"
              }`}
            >
              Contact
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Aboutme;
