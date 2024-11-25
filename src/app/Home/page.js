"use client"
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
    <div className={`app ${darkMode ? 'dark-mode' : ''}` }>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Hero darkMode={darkMode}/>
      <Typewrite darkMode={darkMode}/>
      <Icon darkMode={darkMode}/>
    
    </div>
  );
}

export default Homepage;
