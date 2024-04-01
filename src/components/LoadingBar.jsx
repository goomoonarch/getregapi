/* eslint-disable react/prop-types */
export const LoadingBar = ({LoadingLabel}) => {
  return (
    <div className="flex justify-center mb-2">
      <div className="flex w-[400px] rounded-[8px] font-Inter font-light text-gray-700 justify-between items-center py-2 px-3 bg-[#F6F6F6]">
        <div className="flex justify-center items-center">
          <svg
            className="animate-spin h-5 w-5 mr-3 text-blue-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            ></path>
          </svg>
          <p className="text-blue-gray-700 text-[16px] font-Inter">
            {`${LoadingLabel}`}
          </p>
        </div>
      </div>
    </div>
  );
}
