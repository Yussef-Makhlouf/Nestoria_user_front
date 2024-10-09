import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/home/2.jpg')" }}
    >
      <div className="bg-green-800 bg-opacity-80 text-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <h1 className="text-4xl font-bold mb-4">Success!</h1>
        <p className="text-lg mb-6">
          Your payment has been processed successfully.
        </p>
        <div className="mb-6">
          <svg
            className="w-24 h-24 mx-auto text-green-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
        <button
          onClick={() => navigate("/")}
          className="bg-white text-green-900 font-semibold py-2 px-4 rounded-lg hover:bg-green-100 transition duration-300"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;