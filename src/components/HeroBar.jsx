import malog from "../assets/new_ma_logo.png";
export const HeroBar = () => {
  return (
    <div>
      <div className="flex justify-center cursor-default">
        <div className="flex">
          <h1 className="text-[50px] font-bold font-Inter text-[#1D1D1F]">
            Moon
          </h1>
          <h1 className="text-[50px] font-light font-Inter text-[#1D1D1F]">
            Search
          </h1>
        </div>
        <div className="flex absolute justify-center items-center text-[#1D1D1F] h-10 translate-y-[50px] translate-x-[90px]">
          <h1 className="px-[1px] text-[16px] font-Inter translate-y-[-0.5px]">by</h1>
          <img className="w-25 h-[21px]" src={malog} alt="moonarchLogo" />
        </div>
      </div>
      <div className="items-center justify-center h-[80px] bg-gradient-to-r from-[#E6FAFE] to-[#ECDDFB] translate-y-5"></div>
    </div>
  );
};
