import React, { useState } from "react";

// Placeholder for PaymentOption component
const PaymentOption = ({ active, onClose }) => {
  if (!active) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-80 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Select Payment Method</h2>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full mb-4"
          onClick={() => alert("Processing Payment...")}
        >
          Credit/Debit Card
        </button>
        <button
          className="bg-green-500 text-white py-2 px-4 rounded-lg w-full mb-4"
          onClick={() => alert("Processing Payment via UPI...")}
        >
          UPI
        </button>
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded-lg w-full"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

const StudentPaymentInfo = () => {
  const [active, setActive] = useState(false); // State to track button action

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-96 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-indigo-500 text-white flex flex-col items-center py-6">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex justify-center items-center">
            {/* Placeholder for avatar */}
            <svg
              className="w-12 h-12 text-indigo-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 14l9-5-9-5-9 5 9 5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 14l6.16-3.422A2 2 0 0019 9.236V5a2 2 0 00-2-2H7a2 2 0 00-2 2v4.236a2 2 0 00.84 1.614L12 14z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mt-4">Kathryn Murphy</h2>
          <p className="text-sm">$8999</p>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">General</h3>
          <div className="mb-4">
            <p className="text-sm text-gray-500">Date of Birth</p>
            <p className="text-gray-800">21.07.2003</p>
          </div>
          <div className="mb-4">
            <p className="text-sm text-gray-500">Class / Section</p>
            <p className="text-gray-800">6 / D</p>
          </div>
          <div className="mb-4">
            <p className="text-sm text-gray-500">Roll Number</p>
            <p className="text-gray-800">7564359</p>
          </div>
          <div className="mb-4">
            <p className="text-sm text-gray-500">Day Scholar / Residential</p>
            <p className="text-gray-800">Day Scholar</p>
          </div>
          <div className="mb-4">
            <p className="text-sm text-gray-500">Phone Number</p>
            <p className="text-gray-800">8988277234</p>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Emergency Contacts
          </h3>
          <div className="mb-4">
            <p className="text-sm text-gray-500">Gauri Murphy (Mother)</p>
            <p className="text-gray-800">+91 0987654321</p>
          </div>
          <div className="mb-6">
            <p className="text-sm text-gray-500">Shahrukh Murphy (Father)</p>
            <p className="text-gray-800">+91 0987654321</p>
          </div>
          {/* Add the Pay Now button */}
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg"
            onClick={() => setActive(true)}
          >
            Pay Now
          </button>
        </div>
      </div>
      {/* PaymentOption component */}
      <PaymentOption active={active} onClose={() => setActive(false)} />
    </div>
  );
};

export default StudentPaymentInfo;
