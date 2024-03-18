import PropTypes from "prop-types";

export const ButtonSearch = ({enterKey}) => {
  return (
    <div className="flex pl-1 pr-2">
      <button onClick={() => enterKey(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="h-5 w-5 stroke-gray-600 hover:stroke-[#b3b4b9]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </div>
  );
};

ButtonSearch.propTypes = {
  enterKey: PropTypes.func
};