"use client"
import React, { useState } from 'react';
import Header from '../Home/component/Header';
import Pro from './component/projectscard';



const Project = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
     <div>
     <Pro/>
     </div>
    
    
    </div>
  );
}

export default Project;
