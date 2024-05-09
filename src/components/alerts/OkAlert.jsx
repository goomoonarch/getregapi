import { useState } from "react";

export const OkAlert = () => {
  const [close, setClose] = useState(false);
  return (
    <>
      {!close && (
        <div className="flex justify-center animate-fade-up animate-duration-[250ms] animate-ease-in-out">
          <div className="flex font-Inter bg-[#f0fdf4] rounded-[6px] w-[400px] h-[40px] justify-between items-center pl-[14px] pr-2">
            <div className="flex justify-start items-center">
              <svg
                width="23"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="animate-jump"
              >
                <path
                  d="M21.7101 11.9951C21.7101 17.4532 17.2464 21.9901 11.8551 21.9901C6.47343 21.9901 2 17.4532 2 11.9951C2 6.52718 6.46377 2 11.8454 2C17.2367 2 21.7101 6.52718 21.7101 11.9951ZM14.8599 8.10484L10.7343 14.827L8.77295 12.2596C8.53141 11.9363 8.31884 11.8481 8.03865 11.8481C7.60387 11.8481 7.2657 12.2106 7.2657 12.6516C7.2657 12.877 7.35266 13.0926 7.49759 13.2886L9.92271 16.3067C10.1739 16.6496 10.4445 16.7869 10.7729 16.7869C11.1015 16.7869 11.3816 16.6301 11.5845 16.3067L16.1256 9.05536C16.2415 8.84958 16.3672 8.6242 16.3672 8.40861C16.3672 7.94806 15.971 7.65409 15.5459 7.65409C15.2947 7.65409 15.0435 7.81087 14.8599 8.10484Z"
                  fill="#4ADE80"
                />
              </svg>
              <h1 className="px-[8px] text-[#166534] ">Usuario encontrado!</h1>
            </div>

            <button
              className="hover:bg-[#4ade801d] flex h-[24px] w-[24px] rounded-[4px] items-center justify-center"
              onClick={() => setClose(true)}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 5L5 15"
                  stroke="#4ADE80"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 5L15 15"
                  stroke="#4ADE80"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
