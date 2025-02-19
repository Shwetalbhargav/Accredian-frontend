import React, { useState } from "react";
import { FaGraduationCap, FaChevronRight, FaChevronDown, FaToggleOn, FaToggleOff } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const programs = [
  { name: "Professional Certificate Program in Product Management", referrerBonus: "₹ 7,000", refereeBonus: "₹ 9,000" },
  { name: "PG Certificate Program in Strategic Product Management", referrerBonus: "₹ 9,000", refereeBonus: "₹ 11,000" },
  { name: "Executive Program in Data Driven Product Management", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000" },
  { name: "Executive Program in Product Management and Digital Transformation", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000" },
  { name: "Executive Program in Product Management", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000" },
  { name: "Advanced Certification in Product Management", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000" },
  { name: "Executive Program in Product Management and Project Management", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000" },
];

const categories = [
  "Product Management",
  "Strategy & Leadership",
  "Business Management",
  "Fintech",
  "Senior Management",
  "Data Science",
  "Digital Transformation",
  "Business Analytics",
];

const Table = () => {
  const [expanded, setExpanded] = useState(null);
  const [enrolled, setEnrolled] = useState(false);
  const [showMore, setShowMore] = useState(false);
   
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/ReferralForm');
  };
  return (
    <div className="flex w-[1281px] mx-auto bg-white p-6 rounded-lg shadow-md">
      {/* Sidebar */}
      <div className="w-1/4 bg-white-100 rounded-lg p-4">
        <button className="w-full text-left flex justify-between items-center bg-blue-600 text-white px-4 py-3 rounded-lg mb-3">
          ALL PROGRAMS <FaChevronRight />
        </button>
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setExpanded(expanded === index ? null : index)}
            className="w-full flex justify-between items-center text-gray-700 bg-white border border-gray-300 px-4 py-3 rounded-lg mb-2 hover:bg-gray-200"
          >
            {category} {expanded === index ? <FaChevronDown /> : <FaChevronRight />}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="w-3/4 pl-6 relative">
        {/* Header (Centered Title) */}
        <div className="flex justify-center items-center mb-4">
          <h2 className="text-xl font-semibold text-center">
            What Are The <span className="text-blue-600">Referral Benefits?</span>
          </h2>
        </div>

        {/* Enrolled Toggle (Top Right Corner) */}
        <div className="absolute top-0 right-0 mt-2">
          <button onClick={() => setEnrolled(!enrolled)} className="flex items-center">
            Enrolled {enrolled ? <FaToggleOn className="text-blue-600 text-2xl ml-2" /> : <FaToggleOff className="text-gray-400 text-2xl ml-2" />}
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-blue-200 text-left">
                <th className="py-3 px-4 border-b border-gray-300">Programs</th>
                <th className="py-3 px-4 border-b border-gray-300">Referrer Bonus</th>
                <th className="py-3 px-4 border-b border-gray-300">Referee Bonus</th>
              </tr>
            </thead>
            <tbody>
              {programs.map((program, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-100 transition duration-200">
                  <td className="py-3 px-4 flex items-center">
                    <FaGraduationCap className="mr-2 text-blue-500" />
                    {program.name}
                  </td>
                  <td className="py-3 px-4">{program.referrerBonus}</td>
                  <td className="py-3 px-4">{program.refereeBonus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Show More Button (Bottom Right Corner) */}
        <div className="absolute bottom-0 right-0 mb-2">
          <button
            onClick={() => setShowMore(!showMore)}
            className="flex items-center bg-gray-200 text-gray-700 px-4 py-1 text-sm rounded-lg hover:bg-gray-300"
          >
            Show More {showMore ? <FaChevronDown className="ml-2" /> : <FaChevronRight className="ml-2" />}
          </button>
        </div>

        {/* Refer Now Button */}
        <div className="mt-6 flex justify-center">
        <Link to="/ReferralForm" >
          <button  onClick={handleButtonClick} className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Refer Now</button>
          </Link>  
        </div>
      </div>
    </div>
  );
};

export default Table;
