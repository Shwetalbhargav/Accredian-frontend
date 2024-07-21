import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';



const programs = [
  { name: 'Professional Certificate Program in Product Management', referrerBonus: '₹ 7,000', refereeBonus: '₹ 9,000' },
  { name: 'PG Certificate Program in Strategic Product Management', referrerBonus: '₹ 9,000', refereeBonus: '₹ 11,000' },
  { name: 'Executive Program in Data Driven Product Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
  { name: 'Executive Program in Product Management and Digital Transformation', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
  { name: 'Executive Program in Product Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
  { name: 'Advanced Certification in Product Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
  { name: 'Executive Program in Product Management and Project Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
];

function Table() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/ReferralForm');
  };
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-blue-200">
            <th className="py-2 px-4 border-b border-gray-200">Programs</th>
            <th className="py-2 px-4 border-b border-gray-200">Referrer Bonus</th>
            <th className="py-2 px-4 border-b border-gray-200">Referee Bonus</th>
          </tr>
        </thead>
        <tbody>
          {programs.map((program, index) => (
            <tr key={index} className="text-left border-b border-gray-200">
              <td className="py-2 px-4 flex items-center">
                <FontAwesomeIcon icon={faGraduationCap} className="mr-2 text-blue-500" />
                {program.name}
              </td>
              <td className="py-2 px-4">{program.referrerBonus}</td>
              <td className="py-2 px-4">{program.refereeBonus}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
          onClick={handleButtonClick}
          className="mt-4  bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 "
        >
          Referral
        </button>
    </div>
  );
}

export default Table;
