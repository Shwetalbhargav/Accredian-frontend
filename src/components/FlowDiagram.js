import React from "react";
import { FaUserPlus, FaClipboardList, FaWallet } from "react-icons/fa";
import flowDiagram from "../assests/flow-diagram.png"; 
import { useNavigate } from 'react-router-dom';
import "../styles/FlowDiagram.css"; 
import { Link } from "react-router-dom";

const FlowDiagram = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/ReferralForm');
  };
  return (
    <div className="relative w-[1534px] h-[785px] flex flex-col justify-center items-center bg-blue-100 mx-auto p-6 rounded-lg shadow-md">
      
      {/* Title */}
      <h2 className="text-3xl font-semibold text-center text-gray-900 mb-5">
        How Do I <span className="text-blue-600">Refer?</span>
      </h2>

      {/* Image Container */}
      <div className="relative w-full flex justify-center mt-[-40px]">
        <img src={flowDiagram} alt="Referral Process" className="w-[1500px] h-auto" />

        {/* Step 1 - Left */}
        <div className="step-container step-left">
          <FaUserPlus className="step-icon" />
          <p className="step-text">
            Submit referrals easily via our website’s referral section.
          </p>
        </div>

        {/* Step 2 - Center */}
        <div className="step-container step-center">
          <FaClipboardList className="step-icon" />
          <p className="step-text">
            Earn rewards once your referral joins an Accredian program.
          </p>
        </div>

        {/* Step 3 - Right */}
        <div className="step-container step-right">
          <FaWallet className="step-icon" />
          <p className="step-text">
            Referrer receives a bonus 30 days after program enrollment.
          </p>
        </div>
      </div>

      {/* Refer Now Button - Centered Below Image */}
      <div className="absolute bottom-1 flex justify-center w-full">
      <Link to="/ReferralForm" >
        <button  onClick={handleButtonClick} className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 text-lg font-semibold">
          Refer Now
        </button>
        </Link>
      </div>
      
    </div>
  );
};

export default FlowDiagram;
