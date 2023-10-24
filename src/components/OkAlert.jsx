import React from "react";
function OkAlert() {

  return (
    <div>
      <div className="flex font-SFpro bg-[#F0FDF4] rounded-[8px] px-[20px] py-[10px] m-4 w-[450px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 fill-[#4ade80]"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clipRule="evenodd"
          />
        </svg>
        <h1 className="px-[10px] text-[#166534] font-medium ">
          Usuario encontrado!
        </h1>
        <button className="hover:bg-[#4ade801d] flex h-[24px] w-[24px] rounded-[4px] items-center justify-center translate-x-[196px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.6}
            stroke="currentColor"
            className="w-4 stroke-[#4ade80] "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default OkAlert;