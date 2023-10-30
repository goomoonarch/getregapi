import React, { useState, useRef, useEffect } from "react";

function CustomDropdown({ onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const wrapperRef = useRef(null);

  const handleOptionClick = (value) => {
    setSelectedOption(value);
    onChange(value);
  };

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative w-[70px]"
      onClick={() => setIsOpen(!isOpen)}
      ref={wrapperRef}
    >
      <div
        id="customSelect"
        className="flex justify-end items-center px-4 py-2 bg-[#F6F6F6] cursor-pointer font-SFpro text-[16px] text-blue-gray-700"
      >
        <span
          className={selectedOption ? "text-blue-gray-700" : "text-gray-400"}
        >
          {selectedOption || "Tid"}
        </span>
        <svg
          className={`h-5 w-5 text-gray-400 transform translate-x-3 transition ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {isOpen && (
        <div
          id="dropdown"
          className={"absolute w-full font-SFpro text-center text-[16px] text-blue-gray-700 px-[10px] py-[8px] bg-[#F6F6F6] rounded-[8px] translate-y-[18px] animate-fade-down animate-duration-[150ms] animate-ease-in"}
        >
          <div
            onClick={() => handleOptionClick("CC")}
            className="px-2 py-1 hover:bg-[#e6fafe] rounded-sm cursor-pointer"
          >
            CC
          </div>
          <div
            onClick={() => handleOptionClick("TI")}
            className="pr-[1px] py-1 hover:bg-[#e6fafe] rounded-sm cursor-pointer"
          >
            TI
          </div>
          <div
            onClick={() => handleOptionClick("RC")}
            className="px-2 py-1 hover:bg-[#e6fafe] rounded-sm cursor-pointer"
          >
            RC
          </div>
          <div
            onClick={() => handleOptionClick("PT")}
            className="px-2 py-1 hover:bg-[#e6fafe] rounded-sm cursor-pointer"
          >
            PT
          </div>
          <div
            onClick={() => handleOptionClick("PE")}
            className="px-2 py-1 hover:bg-[#e6fafe] rounded-sm cursor-pointer"
          >
            PE
          </div>
          <div
            onClick={() => handleOptionClick("CE")}
            className="px-2 py-1 hover:bg-[#e6fafe] rounded-sm cursor-pointer"
          >
            CE
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomDropdown;
