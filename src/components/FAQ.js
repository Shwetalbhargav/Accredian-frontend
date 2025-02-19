import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("Eligibility");
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqs = {
    Eligibility: [
      {
        question: "Do I need to have prior Product Management and Project Management experience to enroll in the program?",
        answer:
          "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.",
      },
      {
        question: "What is the minimum system configuration required?",
        answer: "You will need a system with at least 4GB RAM and a stable internet connection.",
      },
    ],
    "How To Use?": [
      {
        question: "How can I access the learning materials?",
        answer: "Once enrolled, you can access the learning materials via our online dashboard.",
      },
    ],
    "Terms & Conditions": [
      {
        question: "What is the refund policy?",
        answer: "You can request a refund within 14 days of enrollment if you have not accessed more than 20% of the course content.",
      },
    ],
  };

  return (
    <div className="w-[1281px] h-[341px] mx-auto bg-white p-6">
      <h2 className="text-2xl font-semibold text-center">
        Frequently Asked <span className="text-blue-600">Questions</span>
      </h2>

      <div className="flex mt-6">
        {/* Left Side: Tabs */}
        <div className="flex flex-col space-y-4 w-1/3">
          {Object.keys(faqs).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full py-3 text-lg font-semibold border rounded-lg transition-all ${
                activeTab === tab
                  ? "bg-white text-blue-600 shadow-md border-blue-500"
                  : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Right Side: Questions */}
        <div className="w-2/3 pl-8">
          {faqs[activeTab].map((item, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-lg font-semibold text-blue-600 hover:text-blue-500"
                onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
              >
                {item.question}
                {openQuestion === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openQuestion === index && <p className="text-gray-600 mt-2">{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
