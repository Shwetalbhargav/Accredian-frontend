import React from 'react';
import { useNavigate } from 'react-router-dom';
import coupleImage from '../assests/couple.png';

function Article() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/ReferralForm');
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden flex  h-[600px]">
      {/* Left Half */}
      <div className="w-1/2 p-8">
        <h1 className="text-3xl font-bold text-gray-800">Let's Learn And Earn</h1>
        <h2 className="text-xl text-gray-600 mt-4">Get a Chance to win up-to Rs. 15,000</h2>
        <button
          onClick={handleButtonClick}
          className="mt-4  bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 "
        >
          Referral
        </button>
      </div>
      {/* Right Half */}
      <div
        className="w-1/2 bg-cover bg-center"
        style={{ backgroundImage:  `url(${coupleImage})`  }}
      ></div>
    </div>
  </div>
  );
}

export default Article;
