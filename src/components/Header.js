import React from "react";

const Header = () => {
  return (
    <div className="bg-blue-100 py-3 flex justify-center items-center">
      <p className="text-gray-800 text-lg">
        Navigate your ideal career path with tailored expert advice
        <a href="#" className="text-blue-600 font-semibold ml-2 hover:underline">
          Contact Expert
        </a>
      </p>
    </div>
  );
};

export default Header;
