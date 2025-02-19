import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function Navbar1() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (

    
    <nav className="bg-white  py-3">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Left Side - Logo & Course Button */}
        <div className="flex items-center space-x-6">
          <div className="text-2xl font-bold text-blue-600">accredian</div>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-blue-700"
            >
              <span>Courses</span>
              <FaChevronDown className="text-sm" />
            </button>
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute mt-2 w-48 bg-white rounded-md shadow-lg">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Course 1</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Course 2</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Course 3</a>
              </div>
            )}
          </div>
        </div>

        {/* Right Side - Navigation Links & Buttons */}
        <div className="flex items-center space-x-6">
          <a href="#" className="text-gray-800 hover:text-gray-600">Refer & Earn</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">Resources</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">About Us</a>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">Login</button>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700">Try for free</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar1;
