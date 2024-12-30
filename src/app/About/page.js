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
    <div className={`app ${darkMode ? 'dark-mode' : 'herotext'}`}>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Aboutme/>
      
      
     
    </div>
  );
}

export default About;
