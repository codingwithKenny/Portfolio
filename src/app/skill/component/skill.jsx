"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const skillCategories = [
  {
    title: "Frontend Development",
    color: "from-pink-500 to-rose-400",
    glow: "shadow-pink-400/50",
    skills: [
      { name: "HTML5", logo: "/html.png" },
      { name: "CSS3", logo: "/css3.png" },
      { name: "JavaScript", logo: "/javascript.webp" },
      { name: "React.js", logo: "/React-.png" },
      { name: "Next.js", logo: "/next.png" },
      { name: "Tailwind CSS", logo: "/tailwind-.png" },
    ],
  },
  {
    title: "Backend Development",
    color: "from-blue-500 to-cyan-400",
    glow: "shadow-blue-400/50",
    skills: [
      { name: "Node.js", logo: "/node..avif" },
      { name: "Python", logo: "/python.jpg" },
      { name: "MongoDB", logo: "/mongoDB-.png" },
      { name: "PostgreSQL", logo: "/postgrl.png" },
      { name: "Prisma ORM", logo: "/prisma.jpg" },
      { name: "Firebase", logo: "/Firebase.png" },
    ],
  },
  {
    title: "AI & Automation",
    color: "from-purple-600 to-indigo-400",
    glow: "shadow-purple-400/50",
    skills: [
      { name: "n8n", logo: "/n8n.png" },
      { name: "ChatGPT API", logo: "/chatgpt.png" },
      { name: "Make.com", logo: "/make.jpg" },
      { name: "LangChain", logo: "/langchain.png" },
      { name: "Zapier", logo: "/zapier.png" },
    ],
  },
  {
    title: "DevOps & Cloud",
    color: "from-green-500 to-emerald-400",
    glow: "shadow-green-400/50",
    skills: [
      { name: "Git", logo: "/git.png" },
      { name: "GitHub", logo: "/github.jpeg" },
      { name: "Vercel", logo: "/vercel.png" },
      { name: "AWS", logo: "/aws.png" },
      { name: "Render", logo: "/render.png" },
      { name: "Hostinger", logo: "/hostinger.jpg" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -45 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

const SkillsSection = () => {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 py-20 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 -mt-10 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text "
        >
          Tech Stack
        </motion.h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative group p-1 rounded-3xl bg-gradient-to-r ${category.color} ${category.glow}`}
            >
              {/* Inner white card */}
              <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-xl relative z-10 transition-all duration-500">
                <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-gray-100">
                  {category.title}
                </h3>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-6"
                >
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      variants={skillVariants}
                      whileHover={{
                        scale: 1.2,
                        rotate: 10,
                        y: -5,
                        boxShadow:
                          "0px 0px 25px rgba(0,0,0,0.15), 0px 0px 35px rgba(0,0,0,0.25)",
                      }}
                      className="flex flex-col items-center text-center bg-gray-50 dark:bg-gray-800 p-4 rounded-xl cursor-pointer transition-all duration-300"
                    >
                      <Image
                        src={skill.logo}
                        alt={skill.name}
                        width={50}
                        height={50}
                        className="rounded-md mb-2"
                      />
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        {skill.name}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SkillsSection;
