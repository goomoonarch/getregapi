import { useState } from "react";

export const OkAlert = () => {
  const [close, setClose] = useState(false);
  return (
    <>
      {!close && (
        <div className="flex justify-center animate-fade-up animate-duration-[250ms] animate-ease-in-out">
          <div className="flex font-Inter bg-[#f0fdf4] rounded-[6px] w-[360px] h-[40px] sm:w-[400px] justify-between items-center pl-[14px] pr-2">
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
                  d="M19 9.5C19 14.6988 14.6427 19 9.50001 19C4.30118 19 0 14.7362 0 9.5C0 4.30118 4.30118 0 9.50001 0C14.7175 0 19 4.28251 19 9.5ZM12.8662 5.29233L8.32186 11.6132L6.02167 9.12594C5.81595 8.92024 5.51674 8.73322 5.12403 8.73322C4.46949 8.73322 3.94586 9.23813 3.94586 9.9114C3.94586 10.1733 4.03938 10.5098 4.26378 10.7529L7.42422 14.2313C7.66734 14.4931 8.06005 14.624 8.35926 14.624C8.77068 14.624 9.1447 14.4558 9.3504 14.1752L14.7737 6.63872C14.942 6.39568 15.0354 6.13381 15.0354 5.92811C15.0354 5.27351 14.4931 4.76859 13.8574 4.76859C13.4271 4.76859 13.0906 4.97445 12.8662 5.29233Z"
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
