import React , { useState } from 'react';

function Navbar1() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left Side */}
        <div className="flex items-center space-x-4">
          <div className="text-xl font-bold text-gray-800">Accredian</div>
          <div className="relative">

            <button 
             onClick={toggleDropdown}
             className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md focus:outline-none">
              Course
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

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-800 hover:text-gray-600">Refer and Learn</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">Resources</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">About Us</a>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Login</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Try for Free</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar1;
