'use client'
import { useState } from "react";
import Header from "../Home/component/Header";
import ContactPage from "./conponent/Contactpage";
import ContactInfo from "./conponent/ContactInfo";
import Icon from "../Home/component/Icon";



const Contact = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : 'herotext'}`}>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <ContactPage/>
      <ContactInfo/>
      <div className="w-28">
      <Icon/>

        </div>     
     
    </div>
  );
}

export default Contact;
