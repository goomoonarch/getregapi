export const PersonSqueleton = () => {
  return (
    <div>
      <div className="flex flex-col justify-center sm:w-[400px] w-[360px] h-[314px] bg-[#F6F6F6] rounded-[6px] animate-fade animate-ease-in animate-duration-300">
        <div className="sm:w-[358px] w-[338px] h-[40px] bg-[#E6E6E6] sm:mt-[22px] mt-[12px] mb-[18px] sm:mx-[22px] mx-[12px] rounded-[4px] animate-pulse"></div>
        <div className="flex sm:mb-[18px] mb-[12px]">
          <div className="w-[52px] h-[96px] bg-[#E6E6E6] sm:ml-[22px] ml-[12px] mr-[10px] rounded-[2px] animate-pulse animate-delay-[600ms]"></div>
          <div className="flex flex-col">
            <div className="w-[163px] h-[14px] bg-[#E6E6E6] rounded-[4px] mb-[5px] animate-pulse animate-delay-[600ms]"></div>
            <div className="w-[100px] h-[14px] bg-[#E6E6E6] rounded-[4px] mb-[7px] animate-pulse animate-delay-[800ms]"></div>
            <div className="w-[67px] h-[12.25px] bg-[#E6E6E6] rounded-[4px] mb-[8px] animate-pulse animate-delay-[1000ms]"></div>
            <div className="w-[141px] h-[12.25px] bg-[#E6E6E6] rounded-[4px] mb-[8px] animate-pulse animate-delay-[1200ms]"></div>
            <div className="w-[155px] h-[12.25px] bg-[#E6E6E6] rounded-[4px] animate-pulse animate-delay-[1400ms]"></div>
          </div>
        </div>
        <div className="flex">
          <div className="w-[52px] h-[96px] bg-[#E6E6E6] sm:ml-[22px] ml-[12px] mr-[10px] mb-[24px] rounded-[2px] animate-pulse animate-delay-[1600ms]"></div>
          <div className="flex flex-col">
            <div className="w-[67px] h-[20px] bg-[#E6E6E6] rounded-[4px] mb-[4px] animate-pulse animate-delay-[1800ms]"></div>
            <div className="w-[137px] h-[14px] bg-[#E6E6E6] rounded-[4px] mb-[6px] animate-pulse animate-delay-[2000ms]"></div>
            <div className="w-[165px] h-[14px] bg-[#E6E6E6] rounded-[4px] mb-[4px] animate-pulse animate-delay-[2200ms]"></div>
            <div className="w-[82px] h-[12.25px] bg-[#E6E6E6] rounded-[4px] mb-[6px] animate-pulse animate-delay-[2400ms]"></div>
            <div className="w-[126px] h-[12.25px] bg-[#E6E6E6] rounded-[4px] animate-pulse animate-delay-[2600ms]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
