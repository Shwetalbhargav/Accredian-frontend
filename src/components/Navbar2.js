import React, { useState } from 'react';

function Navbar2() {
  const [active, setActive] = useState("Refer");

  return (
    <div className="flex justify-center my-6">
      <div className="flex space-x-6 bg-blue-100 p-4 shadow-lg rounded-full w-full max-w-[600px] justify-center">
        {['Refer', 'Benefits', 'FAQs', 'Support'].map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`px-4 py-2 rounded-full text-lg font-medium transition-all duration-200 ${
              active === item ? 'text-blue-600 relative' : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            {item}
            {active === item && <span className="block w-1 h-1 bg-blue-600 rounded-full mx-auto mt-1"></span>}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Navbar2;
