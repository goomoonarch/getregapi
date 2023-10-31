import React from "react";
import { BsCircleFill } from "react-icons/bs";

function UserSqueleton() {
  return (
    <div className="animate-pulse animate-duration-850">
      <div className="flex pt-2 px-[4px] items-center">
        <div id="circleSqueleton" className="pr-[4px]">
          <BsCircleFill className="w-[28px] h-[28px] fill-[#EAEEF4]" />
        </div>
        <div className="bg-[#EAEEF4] w-[180px] h-[25px] rounded-[8px]" />
      </div>
      <div className="flex-col pl-[40px]">
        <div className="bg-[#EAEEF4] w-[240px] h-[20px] my-2 rounded-[8px]" />
        <div className="bg-[#EAEEF4] w-[210px] h-[20px] my-2 rounded-[8px]" />
        <div className="bg-[#EAEEF4] w-[120px] h-[20px] my-2 rounded-[8px]" />
      </div>
    </div>
  );
}

export default UserSqueleton;
