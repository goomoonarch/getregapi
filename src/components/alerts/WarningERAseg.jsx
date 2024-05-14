import { useState } from "react";

export const WarningERAseg = () => {
  const [close, setClose] = useState(false);
  const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  return (
    <>
      {!close && (
        <div className="flex justify-center animate-fade-up animate-duration-[250ms] animate-ease-in-out mb-[10px]">
          <div className="flex font-Inter bg-[#fefce8] rounded-[6px] w-[360px] sm:w-[400px] h-[40px] justify-between items-center pl-[14px] pr-2">
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
                  d="M19.7101 9.85506C19.7101 15.2367 15.2464 19.7101 9.85506 19.7101C4.47343 19.7101 0 15.2367 0 9.85506C0 4.46377 4.46377 0 9.84541 0C15.2367 0 19.7101 4.46377 19.7101 9.85506ZM8.77293 13.8551C8.77293 14.4251 9.27537 14.8889 9.85506 14.8889C10.4347 14.8889 10.9372 14.4348 10.9372 13.8551C10.9372 13.2754 10.4445 12.8116 9.85506 12.8116C9.26572 12.8116 8.77293 13.285 8.77293 13.8551ZM8.93717 5.59421L9.06282 10.8599C9.07246 11.372 9.3527 11.6522 9.85506 11.6522C10.3382 11.6522 10.6184 11.3817 10.628 10.8599L10.7633 5.60387C10.7729 5.09179 10.3768 4.71498 9.84541 4.71498C9.30439 4.71498 8.92752 5.08213 8.93717 5.59421Z"
                  fill="#FACC15"
                />
              </svg>
              <h1 className="px-[8px] text-[#89550E] ">
                {isMobileDevice ? "ERAseg no disponible!" : "Ejecute el controlador"}
              </h1>
            </div>
            <div className="flex items-center">
              <a href="https://webextension.org/listing/access-control.html" target="_tab" className="group flex items-center pr-[8px] cursor-pointer">
                <h1 className="text-[#89550E] pr-[6px] group-hover:text-[#0D99FF] group-hover:underline">Detalles</h1>
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="#FACC15"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:fill-[#0D99FF]"
                >
                  <path
                    d="M11 8.17351L10.9927 0.859603C10.9927 0.349669 10.6578 0 10.1337 0H2.81734C2.3223 0 1.98015 0.371523 1.98015 0.808609C1.98015 1.23841 2.35142 1.59536 2.7955 1.59536H5.409L8.4957 1.49338L7.17075 2.65894L0.262078 9.57947C0.0946393 9.7543 0 9.95828 0 10.1623C0 10.5921 0.393117 11 0.837194 11C1.04103 11 1.24487 10.9126 1.41959 10.745L8.33554 3.8245L9.51489 2.49868L9.39113 5.45629V8.19536C9.39113 8.64702 9.74785 9.02583 10.1919 9.02583C10.6287 9.02583 11 8.6543 11 8.17351Z"
                  />
                </svg>
              </a>
              <button
                className="hover:bg-[#facc1525] flex h-[24px] w-[24px] rounded-[4px] items-center justify-center"
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
                    stroke="#FACC15"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 5L15 15"
                    stroke="#FACC15"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
