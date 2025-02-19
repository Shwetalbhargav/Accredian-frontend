import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube, FaPlus, FaMinus } from "react-icons/fa";

const Footer = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-5 md:px-20 py-5 border-b border-gray-700">
        <div className="flex items-center">
          <img src="/your-logo-path.png" alt="Accredian Logo" className="h-10" />
          <span className="ml-2 text-sm text-gray-400">credentials that matter</span>
        </div>
        <div className="text-center">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-500">
            Schedule 1-on-1 Call Now
          </button>
          <p className="text-xs text-gray-400 mt-1">Speak with our Learning Advisor</p>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 py-10 px-5 md:px-20">
        
        {/* Programs Section with Dropdown */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Programs</h3>
          {[
            "Data Science & AI",
            "Product Management",
            "Business Analytics",
            "Digital Transformation",
            "Business Management",
            "Project Management",
            "Strategy & Leadership",
            "Senior Management",
            "Fintech",
          ].map((program, index) => (
            <div key={index}>
              <button
                onClick={() => toggleDropdown(index)}
                className="w-full flex justify-between items-center text-left py-2 hover:text-gray-400"
              >
                {program}
                {openDropdown === index ? (
                  <FaMinus className="text-sm" />
                ) : (
                  <FaPlus className="text-sm" />
                )}
              </button>
              {openDropdown === index && (
                <p className="text-gray-400 text-sm pl-4">More details about {program}...</p>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section with Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm  ">
            <li className="cursor-pointer hover:text-gray-400">Email (Data Science): <a href="mailto:admissions@accredian.com" className="text-gray-400 ">admissions@accredian.com</a></li>
            <li className="cursor-pointer hover:text-gray-400">Email (Product Management): <a href="mailto:pm@accredian.com" className="text-gray-400">pm@accredian.com</a></li>
            <li >Data Science Helpline: <span className="text-gray-400">+91 9079653292 (9 AM - 7 PM)</span></li>
            <li>Product Management Helpline: <span className="text-gray-400">+91 9625811095</span></li>
            <li>Student Helpline: <span className="text-gray-400">+91 7969322507</span></li>
            <li>Office: 4th Floor, 250, Phase IV, Udyog Vihar, Gurugram, Haryana 122015</li>
          </ul>

          {/* Social Media Icons */}
          <h3 className="text-lg font-semibold mt-6">Why Accredian</h3>
          <h3 className="text-lg font-semibold mt-6">Follow Us</h3>
          <div className="flex space-x-4 mt-2 ">
            <FaFacebookF className="cursor-pointer text-xl hover:text-blue-400" />
            <FaLinkedinIn className="cursor-pointer text-xl hover:text-blue-400" />
            <FaTwitter className="cursor-pointer text-xl hover:text-blue-400" />
            <FaInstagram className="cursor-pointer text-xl hover:text-pink-400" />
            <FaYoutube className="cursor-pointer text-xl hover:text-red-400" />
          </div>
        </div>

        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Accredian</h3>
          <ul className="space-y-2">
            {["About", "Career", "Blog", "Admission Policy", "Referral Policy", "Privacy Policy", "Terms of Service", "Master FAQs"].map((item, index) => (
              <li key={index} className="cursor-pointer hover:text-gray-400">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm text-gray-500 py-5">
        &copy; 2024 Accredian. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
