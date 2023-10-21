import React from "react";
import Logo from "../assets/moonarch_logo_black.svg";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="flex place-content-between items-center px-[20px] py-[10px] sm:px-16 sm:py-[10px]">
      <img src={Logo} alt="moonarch_logo_black" width="38" />
      <Navbar />
    </header>
  );
};

export default Header;
