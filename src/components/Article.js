import React from 'react';
import coupleImage from '../assests/couple.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Article() {
  
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/ReferralForm');
  };
 
  
  return (
    <div className="w-[1360px] h-[692px] flex justify-center items-center bg-blue-100 mx-auto p-6 shadow-lg rounded-xl">
      
      {/* Container with Two Sections */}
      <div className="flex w-full justify-between items-center">
        
        {/* Left Section (Text + Button) */}
        <div className="w-[502px] h-[367px] bg-transparent  p-6  flex flex-col justify-between">
          <div>
            <h1 className="text-7xl font-bold text-gray-900">
              Let’s Learn & Earn
            </h1>
            <p className="mt-4 text-4xl text-gray-700">
              Get a chance to win up to <span className="text-blue-600  text-5xl font-bold">Rs. 15,000</span>
            </p>
          </div>
          
          {/* Refer Now Button */}
          <Link to="/ReferralForm" >
          <button  onClick={handleButtonClick} className="bg-blue-600 text-white w-fit  px-4 py-3 rounded-lg hover:bg-blue-700 text-lg font-semibold mt-4">
            Refer Now
          </button>
          </Link>
        </div>

        {/* Right Section (Image) */}
        <div className="w-[800px] h-auto flex justify-center items-center">
          <img src={coupleImage} alt="Couple Celebrating" className="w-full h-auto" />
        </div>

      </div>
      
    </div>
  );
};


export default Article;
