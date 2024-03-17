import { useState } from "react";
import PropTypes from "prop-types";

export const InputData = ({ onChange, enterKey }) => {
  const [docNumber, setDocNumber] = useState("");
  const onInputChange = ({ target }) => {
    setDocNumber(target.value);
    onChange(target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      enterKey(true);
      onChange(docNumber);
    } else return;
  };

  return (
    <>
      <input
        type="text"
        placeholder="Número de documento"
        className="bg-[#F6F6F6] px-2 focus:outline-none font-Inter font-light text-gray-700 w-[280px]"
        value={docNumber}
        onChange={onInputChange}
        onKeyDown={handleKeyPress}
      />
      {docNumber && (
        <button onClick={() => setDocNumber("")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 fill-gray-400 hover:fill-gray-500 animate-jump-in animate-duration-200"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </>
  );
};

InputData.propTypes = {
  onChange: PropTypes.func.isRequired,
  enterKey: PropTypes.func,
};
