import { useState } from "react";

export const UserNotFound = () => {
  const [close, setClose] = useState(false);
  return (
    <>
      { !close &&
        <div className="flex justify-center">
          <div className="flex font-Inter font-light bg-[#FEF2F2] px-3 py-2 rounded-[8px] w-[400px] justify-between">
            <div className="flex justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 fill-[#F87171]"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                  clipRule="evenodd"
                />
              </svg>
              <h1 className="px-[10px] text-[#B91C1C]">
                Usuario no encontrado!
              </h1>
            </div>
            <button 
            className="hover:bg-[#b91c1c17] flex justify-center items-center h-[24px] w-[24px] rounded-[4px]"
            onClick={() => setClose(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.6}
                stroke="currentColor"
                className="w-4 stroke-[#B91C1C] "
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
      }
    </>
  );
};
