import { useState } from "react";

export const ERAsegWarning = () => {
  const [close, setClose] = useState(false);
  return (
    <>
      {!close && (
        <div className="flex animate-fade-up animate-duration-[250ms] animate-ease-in-out mb-[8px]">
          <div className="flex font-Inter bg-[#EFF6FF] rounded-[6px] w-[400px] h-[40px] justify-between items-center pl-[14px] pr-2">
            <div className="flex justify-start items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="animate-jump"
              >
                <path
                  d="M19.7101 9.85514C19.7101 15.2369 15.2464 19.7103 9.85506 19.7103C4.47343 19.7103 0 15.2369 0 9.85514C0 4.4638 4.46377 0 9.84541 0C15.2367 0 19.7101 4.4638 19.7101 9.85514ZM8.28022 8.06771C7.8744 8.06771 7.55556 8.38657 7.55556 8.773C7.55556 9.18846 7.8744 9.48799 8.28022 9.48799H9.34297V14.0291H8.11595C7.70048 14.0291 7.38164 14.3479 7.38164 14.7344C7.38164 15.1499 7.70048 15.4494 8.11595 15.4494H12.1643C12.5797 15.4494 12.8985 15.1499 12.8985 14.7344C12.8985 14.3479 12.5797 14.0291 12.1643 14.0291H10.9372V8.97591C10.9372 8.43488 10.6667 8.06771 10.1546 8.06771H8.28022ZM8.46375 5.11116C8.46375 5.84546 9.04352 6.42518 9.76816 6.42518C10.4928 6.42518 11.0628 5.84546 11.0628 5.11116C11.0628 4.37685 10.4928 3.79714 9.76816 3.79714C9.04352 3.79714 8.46375 4.37685 8.46375 5.11116Z"
                  fill="#60A5FA"
                  fillOpacity="0.85"
                />
              </svg>
              <h1 className="px-[8px] text-[#1D4EDA]">
                Usuario PNA o del régimen especial
              </h1>
            </div>
            <button
              className="hover:bg-[#60A5FA1d] flex h-[24px] w-[24px] rounded-[4px] items-center justify-center"
              onClick={() => setClose(true)}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 1L1 11"
                  stroke="#60A5FA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 1L11 11"
                  stroke="#60A5FA"
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
