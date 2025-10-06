"use client";
import { useState, useEffect } from "react";
import Header from "../Home/component/Header";
import ContactInfo from "./conponent/ContactInfo";

const Contact = () => {
  const [darkMode, setDarkMode] = useState(false);

  // persist dark mode
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
        className={`min-h-screen flex flex-col transition-colors duration-700 overflow-hidden ${
          darkMode
            ? "bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2e] to-[#0f0f1a] text-white"
            : "bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 text-slate-900"
        }`}
      >
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <div className="flex-1 flex items-center justify-center">
          <ContactInfo darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
