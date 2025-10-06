import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

const Card = ({ live, github, image, description, stack }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="group relative bg-white/70 dark:bg-white/10 backdrop-blur-xl border border-pink-200/40 dark:border-white/10 shadow-lg dark:shadow-pink-900/10 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 rounded-2xl w-80 flex flex-col"
    >
      {/* Image */}
      <div className="w-full h-48 overflow-hidden rounded-t-2xl bg-[#EDF9FD] dark:bg-[#1a1a2e] flex items-center justify-center">
        <Image
          src={image}
          alt="Project"
          width={280}
          height={224}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>

      {/* Description */}
      <div className="flex-1 px-5 py-4">
        <p className="text-sm text-gray-700 dark:text-gray-300 text-center leading-relaxed">
          {description}
        </p>

        {/* Stack */}
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {stack?.map((tech, idx) => (
            <span
              key={idx}
              className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-500 text-white dark:bg-white dark:text-black"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-3 py-4">
        {github && (
          <Link href={github} target="_blank" rel="noopener noreferrer">
            <Button className="bg-black text-white hover:from-pink-400 hover:to-purple-400 rounded-xl px-4 py-2">
              GitHub
            </Button>
          </Link>
        )}
        {live && (
          <Link href={live} target="_blank" rel="noopener noreferrer">
            <Button className="bg-black text-white hover:from-purple-400 hover:to-pink-400 rounded-xl px-4 py-2">
              Live Demo
            </Button>
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
