'use client'

import { useState } from "react";
import Header from "../Home/component/Header";
import Stack from "./component/skill";

const Skill = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode
          ? 'dark bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white'
          : 'bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 text-slate-900'
      }`}
    >
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div className="pt-20">
        <Stack />
      </div>
    </div>
  );
};

export default Skill;
