"use client"

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import VisitTracker from "@/app";

const Header = ({ toggleDarkMode, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`header ${darkMode ? 'bg-black text-white' : 'bg-[#e1eef7e4]'}`}>
      <nav className="border-grey-500 shadow-md mx-auto max-w-7xl flex items-center justify-between lg:px-8 h-20">
        <div className="ml-0 mt-5">
          {/* <Logo /> */}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-center">
          <Link href="/" className={`px-4 py-2 hover:text-gray-800 ml-10`}>Home</Link>
          <Link href={'/About'} className={`px-4 py-2 hover:text-gray-800 ml-10`}>About</Link>
          <Link href="/projects" className={`px-4 py-2 hover:text-gray-800 ml-10`}>Project</Link>
          <Link href="/skill" className={`px-4 py-2 hover:text-gray-800 ml-10`}>Skills</Link>
          <Link href={'/Contact'} className={`px-4 py-2 hover:text-gray-800 ml-10`}>Contact</Link>
        </div>
        <button onClick={toggleDarkMode} className=''>
          {darkMode ? (<FontAwesomeIcon icon={faSun} className="text-2xl lg:-ml-60 text-yellow-500"></FontAwesomeIcon>) : (<FontAwesomeIcon icon={faMoon} className="text-3xl lg:-ml-60 text-gray-500"></FontAwesomeIcon>)}
        </button>
        
        <div className="lg:hidden">
          <button onClick={toggleMenu} className={`flex items-center px-3 py-2 text-gray-600 border-gray-600 hover:text-gray-800 hover:border-gray-800 focus:outline-none ${darkMode ? 'text-white' : 'text-gray-600'}`}>
            {isOpen ? (
              <svg className="h-10 w-10 z-10 text-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Close</title><path fill="currentColor" d="M14.94 14.94a.75.75 0 0 1-1.06 0L10 11.06l-3.88 3.88a.75.75 0 0 1-1.06-1.06L8.94 10 5.06 6.12a.75.75 0 0 1 1.06-1.06L10 8.94l3.88-3.88a.75.75 0 0 1 1.06 1.06L11.06 10l3.88 3.88a.75.75 0 0 1 0 1.06z"></path></svg>
            ) : (
              <svg className="h-10 w-10 z-10" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path fill="currentColor" d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            )}
          </button>
          {isOpen && (
            <div className={`absolute top-0 right-0 w-screen pt-40 bg-black border rounded bg-opacity-80 h-screen shadow-lg`}>
              <Link href="/" className={`block px-4 py-2 text-white font-bold text-center`}>Home</Link>
              <Link href={'/About'} className={`block px-4 py-2 text-white font-bold text-center`}>About</Link>
              <Link href="/projects" className={`block px-4 py-2 text-white font-bold text-center`}>Projects</Link>
              <Link href="/skill" className={`block px-4 py-2 text-white  font-bold text-center`}>Skills</Link>
              <Link href={'/Contact'} className={`block px-4 py-2 text-white font-bold text-center`}>Contact</Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
