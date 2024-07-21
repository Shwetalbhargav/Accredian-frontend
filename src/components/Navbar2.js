import React from 'react';

function Navbar2() {
  return (
    <div className="flex justify-center my-5">
      <div className="flex space-x-4 bg-white p-4 rounded-md shadow-md">
        <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">Refer</a>
        <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">Benefit</a>
        <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">FAQ</a>
        <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">Support</a>
      </div>
    </div>
  );
}

export default Navbar2;
