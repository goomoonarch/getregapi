import { useState } from "react";

export const UserNotFound = () => {
  const [close, setClose] = useState(false);
  return (
    <>
      {!close && (
        <div className="flex animate-fade-up animate-duration-[250ms] animate-ease-in-out">
          <div className="flex font-Inter bg-[#FEF2F2] rounded-[6px] w-[360px] sm:w-[400px] h-[40px] justify-between items-center pl-[14px] pr-2">
            <div className="flex justify-center items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="animate-jump"
              >
                <path
                  d="M19.7101 9.85506C19.7101 15.2367 15.2464 19.7101 9.85506 19.7101C4.47343 19.7101 0 15.2367 0 9.85506C0 4.46377 4.46377 0 9.84541 0C15.2367 0 19.7101 4.46377 19.7101 9.85506ZM12.5701 6.04831L9.85506 8.74399L7.15942 6.05798C7.00483 5.91305 6.83092 5.83575 6.6087 5.83575C6.16425 5.83575 5.81643 6.17392 5.81643 6.62802C5.81643 6.84059 5.89373 7.03382 6.04831 7.18841L8.72462 9.8647L6.04831 12.5508C5.89373 12.6956 5.81643 12.8985 5.81643 13.1111C5.81643 13.5556 6.16425 13.9131 6.6087 13.9131C6.83092 13.9131 7.03382 13.8357 7.18841 13.6812L9.85506 10.9951L12.5314 13.6812C12.6763 13.8357 12.8792 13.9131 13.1014 13.9131C13.5556 13.9131 13.9131 13.5556 13.9131 13.1111C13.9131 12.8889 13.8357 12.686 13.6715 12.541L10.9951 9.8647L13.6812 7.17875C13.8551 7.00483 13.9227 6.83092 13.9227 6.6087C13.9227 6.16425 13.5652 5.81643 13.1208 5.81643C12.9082 5.81643 12.7343 5.88406 12.5701 6.04831Z"
                  fill="#F87171"
                />
              </svg>
              <h1 className="px-[8px] text-[#B91C1C]">
                Usuario no encontrado!
              </h1>
            </div>
            <button
              className="hover:bg-[#b91c1c17] flex justify-center items-center h-[24px] w-[24px] rounded-[4px]"
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
                  stroke="#F87171"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 5L15 15"
                  stroke="#F87171"
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
