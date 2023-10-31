import React from "react";

function ERAsegSqueleton() {
  return (
    <div className="animate-pulse animate-duration-850">
      <div className="flex-col pl-[40px] pt-2">
        <div className="bg-[#EAEEF4] w-[60px] h-[25px] rounded-[8px]" />
        <div className="bg-[#EAEEF4] w-[240px] h-[20px] my-2 rounded-[8px]" />
        <div className="bg-[#EAEEF4] w-[75px] h-[20px] my-2 rounded-[8px]" />
        <div className="bg-[#EAEEF4] w-[100px] h-[35px] my-2 rounded-[8px]" />
      </div>
    </div>
  );
}

export default ERAsegSqueleton;
