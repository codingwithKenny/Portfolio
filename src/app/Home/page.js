"use client";

import React, { useState } from 'react';
import Header from './component/Header';
import Hero from './component/Hero';
import Typewrite from './component/Tyoewriter';
import Icon from './component/Icon';

const Homepage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Hero darkMode={darkMode} />
      <Typewrite darkMode={darkMode} />

      {/* Responsive Layout */}
      <div className={`flex flex-wrap items-center gap-6 ${darkMode ? 'text-white' : 'text-[rgb(23,37,84)]'}`}>
        {/* Icon */}
        <Icon className="w-16 h-16 md:w-20 md:h-20" />
        
        {/* Description Text */}
        <h1 className="text-justify mb-20 ml-2 mt-10 md:text-left text-lg md:text-xl max-w-[90%] md:max-w-[40rem]">
          I am a software developer specializing in building and designing high-quality digital experiences. 
          Currently, I am developing a <span className="text-pink-500">School Management System</span> to optimize operations and improve efficiency in a secondary school.
        </h1>
      </div>
    </div>
  );
};

export default Homepage;
