import React, { useState } from 'react';
import NavbarLogo from './NavbarLogo';
import { AudioLines, Home, ListCheck, Phone, Waypoints, Webhook } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // SVG for the menu (hamburger) icon
  const MenuIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="4" y1="12" x2="20" y2="12"></line>
      <line x1="4" y1="6" x2="20" y2="6"></line>
      <line x1="4" y1="18" x2="20" y2="18"></line>
    </svg>
  );

  // SVG for the close icon
  const XIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );

  return (
    <>
      <nav className="fixed w-full px-3 pt-2 z-100 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="">
                <a href="/#Home_Section" className="">
                  <NavbarLogo ></NavbarLogo>
                </a>
              </div>
            </div>
            <div className="flex items-center">
              {/* Desktop Navigation Links */}
              <div className="hidden md:flex space-x-8">
                <a href="/" className="fontHeadingMimmi text-base md:text-xl font-medium text-orange-600 hover:text-white transition-all duration-300 ease-in-out  hover:bg-orange-600 py-1.5 px-3 rounded-4xl flex items-center justify-center hover:underline">
                  <Home />&nbsp;Home
                </a>
                <a href="/" className="fontHeadingMimmi text-base md:text-xl font-medium text-orange-600 hover:text-white transition-all duration-300 ease-in-out  hover:bg-orange-600 py-1.5 px-3 rounded-4xl flex items-center justify-center hover:underline">
                  <Webhook />&nbsp;Services
                </a>
                <a href="/" className="fontHeadingMimmi text-base md:text-xl font-medium text-orange-600 hover:text-white transition-all duration-300 ease-in-out  hover:bg-orange-600 py-1.5 px-3 rounded-4xl flex items-center justify-center hover:underline">
                  <AudioLines />&nbsp;Our Story
                </a>
                <a href="/" className="fontHeadingMimmi text-base md:text-xl font-medium text-orange-600 hover:text-white transition-all duration-300 ease-in-out  hover:bg-orange-600 py-1.5 px-3 rounded-4xl flex items-center justify-center hover:underline">
                  <ListCheck />&nbsp;Results
                </a>
                <a href="/" className="fontHeadingMimmi text-base md:text-xl font-medium text-orange-600 hover:text-white transition-all duration-300 ease-in-out  hover:bg-orange-600 py-1.5 px-3 rounded-4xl flex items-center justify-center hover:underline">
                  <Waypoints />&nbsp;Blog
                </a>
              </div>
            </div>
            <div className=" h-full  flex items-center justify-center">
            <a href="/" className="fontHeadingMimmi text-base md:text-xl  flex items-center justify-center font-medium text-white transition-all duration-300 ease-in-out  hover:bg-orange-700 bg-orange-600  px-3 py-1.5 rounded-xl hover:italic">
                  <Phone />&nbsp;Contact
                </a>
                </div>
            <div className="md:hidden flex items-center">
              {/* Mobile menu button */}
              <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-black  hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all duration-300 ease-in-out"
                aria-expanded={isOpen ? "true" : "false"}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <XIcon className="block h-6 w-6 text-gray-500" /> : <MenuIcon className="block h-6 w-6 text-gray-500" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}

        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-orange-300 rounded-2xl`} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" onClick={() => setIsOpen(!isOpen)} className="flex w-[100%] text-gray-200 hover:text-white hover:bg-orange-700 transition-all duration-300 ease-in-out px-3 py-2 rounded-md font-medium bg-orange-600"><Home />&nbsp;Home</a>
            <a href="/" onClick={() => setIsOpen(!isOpen)} className="flex w-[100%] text-gray-200 hover:text-white hover:bg-orange-700 transition-all duration-300 ease-in-out px-3 py-2 rounded-md font-medium bg-orange-600"><Webhook />&nbsp;Services</a>
            <a href="/" onClick={() => setIsOpen(!isOpen)} className="flex w-[100%] text-gray-200 hover:text-white hover:bg-orange-700 transition-all duration-300 ease-in-out px-3 py-2 rounded-md font-medium bg-orange-600"><AudioLines />&nbsp;Our Story</a>
            <a href="/" onClick={() => setIsOpen(!isOpen)} className="flex w-[100%] text-gray-200 hover:text-white hover:bg-orange-700 transition-all duration-300 ease-in-out px-3 py-2 rounded-md font-medium bg-orange-600"><ListCheck />&nbsp;Results</a>
            <a href="/" onClick={() => setIsOpen(!isOpen)} className="flex w-[100%] text-gray-200 hover:text-white hover:bg-orange-700 transition-all duration-300 ease-in-out px-3 py-2 rounded-md font-medium bg-orange-600"><Waypoints />&nbsp;Blog</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;