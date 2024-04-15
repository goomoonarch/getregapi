import { useState } from "react";

export const ERAsegWarning = () => {
  const [close, setClose] = useState(false);
  return (
    <>
      {!close && (
        <div className="flex justify-center mb-2">
          <div className="flex font-Inter font-light bg-[#EFF6FF] rounded-[8px] w-[400px] justify-between py-2 px-3">
            <div className="flex justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 fill-[#60A5FA]"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
              <h1 className="px-[10px] text-[#1D4EDA]">Usuario Pobre o del régimen especial</h1>
            </div>
            <button
              className="hover:bg-[#60A5FA1d] flex h-[24px] w-[24px] rounded-[4px] items-center justify-center"
              onClick={() => setClose(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.6}
                stroke="currentColor"
                className="w-4 stroke-[#60A5FA] "
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
      )}
    </>
  );
};
