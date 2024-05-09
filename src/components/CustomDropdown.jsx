import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { tid } from "../assets/tid";

export const CustomDropdown = ({ onChange, enterKey }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const wrapperRef = useRef(null); //-----> es una referencia a wrapper

  const handleOptionClick = (id) => {
    setSelectedOption(id);
    onChange(id);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      enterKey(true);
      onChange(selectedOption);
    } else return;
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
      className="w-[80px] focus:outline-none items-center justify-center translate-y-[12px] z-30"
      onClick={() => setIsOpen(!isOpen)}
      tabIndex={0}
      onKeyDown={handleKeyPress}
      ref={wrapperRef} //----> indica la referencia a este div
    >
      <div
        id="customSelect"
        className="flex bg-[#f6f6f6] cursor-pointer font-Inter text-[16px] items-center justify-center text-[#1d1d1f35]"
      >
        <span
          className={`px-2 ${
            selectedOption ? "text-[#1d1d1f]" : "text-[#9c9cac]"
          }`}
        >
          {selectedOption || "tid"}
        </span>
        <svg
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition ${isOpen ? "rotate-180" : ""}`}
        >
          <path
            d="M1 1L7 7L13 1"
            stroke="#9C9CAC"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {isOpen && (
        <div
          id="dropdown"
          className="flex-col mt-[22px] w-[64px] font-Inter font-[16px] text-center text-[16px] text-[#1d1d1f] px-[10px] py-[8px] bg-[#F6F6F6] rounded-[6px] animate-fade-down animate-duration-[150ms] animate-ease-in"
        >
          {tid.map((id) => (
            <div
              key={id}
              className="pr-[1px] py-1 hover:bg-[#e6fafe] rounded-sm cursor-pointer"
              onClick={() => handleOptionClick(id)}
            >
              {id}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

CustomDropdown.propTypes = {
  onChange: PropTypes.func.isRequired,
  enterKey: PropTypes.func.isRequired,
};
