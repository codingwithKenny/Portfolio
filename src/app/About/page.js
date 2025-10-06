'use client'
import { useState } from "react";
import Header from "../Home/component/Header";
import Aboutme from "./Aboutme";

const About = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    // Apply Tailwind background classes based on darkMode
    <div className={`min-h-screen transition-all duration-700 ${
      darkMode
        ? 'bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2e] to-[#0f0f1a] text-white'
        : 'bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 text-slate-900'
    }`}>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Aboutme darkMode={darkMode} />
    </div>
  );
}

export default About;
