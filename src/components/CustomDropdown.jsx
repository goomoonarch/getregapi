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
      className="w-[68px] px-[2px] focus:outline-none"
      onClick={() => setIsOpen(!isOpen)}
      tabIndex={0}
      onKeyDown={(e) =>
        e.key === "Enter" ? enterKey(true) /*-> Fetching de datos devuelve un prop boleano*/ : null
      }
      ref={wrapperRef} //----> indica la referencia a este div
    >
      <div
        id="customSelect"
        className="flex items-center justify-center m-3 bg-[#F6F6F6] cursor-pointer font-Inter font-[350] text-[#455a64]"
      >
        <span className={selectedOption ? "text-[#455a64]" : "text-gray-400"}>
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
          className={
            "flex-col mt-[25px] w-[68px] font-Inter font-[350] text-center text-[16px] text-[#455a64] px-[10px] py-[8px] bg-[#F6F6F6] rounded-[8px] animate-fade-down animate-duration-[150ms] animate-ease-in"
          }
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
  enterKey: PropTypes.func
};
