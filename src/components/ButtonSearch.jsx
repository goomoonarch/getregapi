import PropTypes from "prop-types";

export const ButtonSearch = ({ enterKey }) => {
  return (
    <div className="flex items-center justify-center pr-4 pl-1 translate-y-[1px] fill-[#9c9cac] hover:fill-[#1D1D1F]">
      <button onClick={() => enterKey(true)}>
        <svg
          width="19"
          height="20"
          viewBox="0 0 18 19"
          fill="currenColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 7.35108C0 11.4043 3.29785 14.7022 7.35108 14.7022C8.95394 14.7022 10.4186 14.1863 11.6254 13.3204L16.1577 17.8619C16.3695 18.0737 16.6459 18.1751 16.9407 18.1751C17.5671 18.1751 18 17.7052 18 17.0881C18 16.7933 17.8895 16.5261 17.696 16.3326L13.1914 11.8004C14.1403 10.566 14.7022 9.02767 14.7022 7.35108C14.7022 3.29785 11.4043 0 7.35108 0C3.29785 0 0 3.29785 0 7.35108ZM1.57524 7.35108C1.57524 4.16378 4.16378 1.57524 7.35108 1.57524C10.5384 1.57524 13.1269 4.16378 13.1269 7.35108C13.1269 10.5384 10.5384 13.1269 7.35108 13.1269C4.16378 13.1269 1.57524 10.5384 1.57524 7.35108Z"
          />
        </svg>
      </button>
    </div>
  );
};

ButtonSearch.propTypes = {
  enterKey: PropTypes.func,
};
