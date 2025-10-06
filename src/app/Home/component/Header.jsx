"use client";

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

const Header = ({ toggleDarkMode, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/About" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skill" },
    { name: "Contact", href: "/Contact" },
  ];

  return (
    <header
  className={`fixed w-full top-0 z-50 transition-all duration-500 backdrop-blur-lg shadow-md ${
    darkMode
      ? "bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2e] to-[#0f0f1a] text-white border-b border-gray-700"
      : "bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 border-b border-pink-200"
  }`}
>

      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 h-20">
        {/* Logo / Name */}
        <Link href="/" className="text-2xl font-bold text-pink-500 tracking-wide">
          <span className="text-gray-600">Kenny</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative font-medium transition-all duration-300 hover:text-pink-500 after:content-[''] after:block after:h-[2px] after:w-0 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:scale-110 transition-transform duration-300"
        >
          {darkMode ? (
            <FontAwesomeIcon
              icon={faSun}
              className="text-2xl text-yellow-400"
            />
          ) : (
            <FontAwesomeIcon icon={faMoon} className="text-2xl text-gray-600" />
          )}
        </button>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className={`p-2 rounded-md focus:outline-none ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            {isOpen ? (
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`lg:hidden absolute top-20 left-0 w-full transition-all duration-500 ${
            darkMode
              ? "bg-black/90 text-white"
              : "bg-pink-50/95 text-gray-800"
          }`}
        >
          <ul className="flex flex-col items-center py-8 space-y-6 text-lg font-semibold">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-pink-500 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
