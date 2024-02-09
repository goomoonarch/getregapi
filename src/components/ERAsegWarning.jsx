const ERAsegWarning = () => {
  return (
    <div className="z-[-10]">
      <div className="flex font-SFpro bg-[#FEFCE8] rounded-[10px] px-[10px] py-[10px] mb-5 w-[350px] justify-between sm:w-[450px]">
        <div className="flex justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 fill-[#FBBF24] animate-jump-in"
          >
            <path
              fillRule="evenodd"
              d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
              clipRule="evenodd"
            />
          </svg>
          <h1 className="px-[10px] text-[#854D0E] font-medium ">
            Active CORS ERAseg!
          </h1>
        </div>

        <a
          href="https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino?hl=es"
          target="_blank" rel="noreferrer"
        />
          <button
            className="hover:text-[#9f5843] text-[#A1624F] flex justify-center items-center"
          >
            <h1 className="text-[15px] pr-[1px]">Detalles</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-[18px]"
            >
              <path
                fillRule="evenodd"
                d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
      </div>
    </div>
  );
};

export default ERAsegWarning;
