'use client'
import { useState } from "react";
import Header from "../Home/component/Header";
import Stack from "./component/skill";




const Skill = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`app ${darkMode ? 'stackmode' : 'herotext'}`}>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Stack/>
    
     
     
    </div>
  );
}

export default Skill;
