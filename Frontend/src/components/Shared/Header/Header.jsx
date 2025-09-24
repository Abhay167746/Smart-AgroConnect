import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import logo from '/src/assets/logo11.jpg';


const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 flex h-20 w-full items-center justify-between bg-gradient-to-r from-green-700 to-green-900 px-4 shadow-md sm:px-8 md:px-[3%]">
      
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt="SmartAgroConnect Logo"
          className="h-10 w-10 object-cover rounded-full border-2 border-white"
        />
        <NavLink to="/" className="text-2xl font-bold text-white">
          SmartAgroConnect
        </NavLink>
      </div>

      {/* Navigation */}
      <nav className="hidden space-x-8 font-semibold text-white md:flex">
        <NavLink to="/" className="hover:text-yellow-300">
          Home
        </NavLink>
        <NavLink to="/marketplace" className="hover:text-yellow-300">
          Marketplace
        </NavLink>
        <NavLink to="/learning-hub" className="hover:text-yellow-300">
          Learning Hub
        </NavLink>
        <NavLink to="/crop-prediction" className="hover:text-yellow-300">
          Crop Prediction
        </NavLink>
      </nav>

      {/* Right section */}
      <div className="flex items-center gap-5 text-white">
        <span className="hidden font-medium sm:inline">📍Kolkata</span>
        <FaSearch className="cursor-pointer text-xl hover:text-yellow-300" />
        <NavLink to="/login">
          <FaUserCircle className="cursor-pointer text-2xl hover:text-yellow-300" />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;

