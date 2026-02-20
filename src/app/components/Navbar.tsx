"use client"
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="backdrop-blur bg-transparent border-b border-wvsuwhite fixed top-0 w-full z-50">
      <div className="max-w-5xl flex flex-wrap items-center justify-between mx-auto p-4 px-10">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/WVSU_Main_Campus_Logo.svg/1200px-WVSU_Main_Campus_Logo.svg.png" 
          className="h-12" 
          alt="Flowbite Logo" />
          <span className="self-center text-lg font-semibold text-wvsuwhite whitespace-nowrap dark:text-white hidden sm:block hover:text-wvsuyellow">
            WVSU University Recognition 2024
          </span>
        </a>

        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-wvsuwhite rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={isMenuOpen ? "M3 1l12 12M1 13l12-12" : "M1 1h15M1 7h15M1 13h15"} />
          </svg>
        </button>
        <div className={`w-full md:block md:w-auto ${isMenuOpen ? '' : 'hidden'}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {/* Add your navigation links here */}
            <li className='flex gap-5 flex-col md:flex-row transition duration-300'>
              
              <a href="/" className="block py-2 px-3 text-wvsuwhite bg-blue-700 rounded md:bg-transparent md:text-white-700 md:p-0 dark:text-white md:dark:text-white hover:underline hover:text-wvsuyellow">
                Home
              </a>
              <a href="#" className="block py-2 px-3 text-wvsuwhite bg-blue-700 rounded md:bg-transparent md:text-white-700 md:p-0 dark:text-white md:dark:text-white hover:underline hover:text-wvsuyellow">
                About
              </a>
              <a href="/program" className="block py-2 px-3 text-wvsuwhite bg-blue-700 rounded md:bg-transparent md:text-white-700 md:p-0 dark:text-white md:dark:text-white hover:underline hover:text-wvsuyellow">
                Program
              </a>
              <a href="#" className="block py-2 px-3 text-wvsuwhite bg-blue-700 rounded md:bg-transparent md:text-white-700 md:p-0 dark:text-white md:dark:text-white hover:underline hover:text-wvsuyellow">
                Student Search
              </a>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
