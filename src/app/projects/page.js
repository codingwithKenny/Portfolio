"use client";
import { useState, useEffect } from "react";
import Header from "../Home/component/Header";
import Pro from "./component/projectscard";

const Project = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Persist dark mode
  useEffect(() => {
    const stored = localStorage.getItem("darkMode");
    if (stored === "true") setDarkMode(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div
        className={`min-h-screen transition-colors duration-700 ${
          darkMode
            ? "bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2e] to-[#0f0f1a] text-white"
            : "bg-gradient-to-br from-pink-50 via-rose-50 to-purple-100 text-black"
        }`}
      >
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <main className="max-w-7xl mx-auto px-6 py-20">
          <h1 className="text-2xl mt-10 md:text-5xl font-bold text-center mb-14 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text ">
            PROJECTS
          </h1>
          <Pro />
        </main>
      </div>
    </div>
  );
};

export default Project;
