import React from "react";

const Paymentlnfo = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm">
        <h1 className="text-xl font-semibold text-gray-800 mb-6">
          Choose Payment Option
        </h1>
        <div className="space-y-4">
          <button className="flex items-center justify-between w-full px-4 py-3 border rounded-lg text-gray-800 hover:bg-gray-50">
            <span>Debit / Credit Card</span>
            <img
              src="https://img.icons8.com/ios-filled/50/000000/bank-card-back-side.png"
              alt="Card Icon"
              className="w-5 h-5"
            />
          </button>
          <button className="flex items-center justify-between w-full px-4 py-3 border rounded-lg text-gray-800 hover:bg-gray-50">
            <span>Internet Banking</span>
            <img
              src="https://img.icons8.com/ios-filled/50/000000/bank.png"
              alt="Bank Icon"
              className="w-5 h-5"
            />
          </button>
          <button className="flex items-center justify-between w-full px-4 py-3 border rounded-lg text-gray-800 hover:bg-gray-50">
            <span>GPay</span>
            <img
              src="https://img.icons8.com/color/50/000000/google-pay-india.png"
              alt="GPay Icon"
              className="w-5 h-5"
            />
          </button>
          <button className="flex items-center justify-between w-full px-4 py-3 border rounded-lg text-gray-800 hover:bg-gray-50">
            <span>PhonePe</span>
            <img
              src="https://img.icons8.com/color/50/000000/rupay.png"
              alt="PhonePe Icon"
              className="w-5 h-5"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Paymentlnfo;
