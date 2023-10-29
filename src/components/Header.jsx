import React from "react";
import MoonArchLogo from "../assets/moonarch_logo_black.png";

function Header() {
  return (
    <div className="sm:scale-[1.2] sm:p-2">
      <div className="flex justify-center">
        <h1 className="text-[40px] font-bold font-Inter text-[#1D1D1F]">
          Moon
        </h1>
        <h1 className="text-[40px] font-light font-Inter text-[#1D1D1F]">
          Search
        </h1>
      </div>
      <div className="flex justify-center translate-x-[64px] translate-y-[-18px] text-[#1D1D1F]">
        <h1>by</h1>
        <div className="flex items-center pl-[3px] pr-[1px] translate-y-[1px]">
          <img src={MoonArchLogo} className="w-[12px] h-[12px] opacity-85" />
        </div>
        <h1 className="text-[#1D1D1F]">MoonArch.</h1>
      </div>
    </div>
  );
}

export default Header;
