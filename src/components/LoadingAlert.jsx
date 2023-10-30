import React from "react";

function LoadingAlert() {
  return (
    <div className="flex font-SFpro bg-[#efeff25e] rounded-[10px] px-[20px] py-[10px] mb-5 w-[350px] justify-between sm:w-[450px]">
      <div>
        <div className="flex justify-center items-center">
          <svg
            className="animate-spin h-5 w-5 mr-3 text-blue-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            ></path>
          </svg>
          <p className="text-blue-gray-700 text-[16px] font-SFpro">
            Cargando información...
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoadingAlert;
