import malog from "../assets/new_ma_logo.png";
export const HeroBar = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex">
          <h1 className="text-[40px] font-bold font-Inter text-[#1D1D1F]">
            Moon
          </h1>
          <h1 className="text-[40px] font-light font-Inter text-[#1D1D1F]">
            Search
          </h1>
        </div>
        <div className="flex absolute justify-center text-[#1D1D1F] h-10 translate-y-[42px] translate-x-[56px]">
          <h1>by</h1>
          <img className="w-25 h-6 translate-y-3" src={malog} alt="moonarchLogo" />
        </div>
      </div>
      <div className="items-center justify-center h-[80px] bg-gradient-to-r from-[#E6FAFE] to-[#ECDDFB] translate-y-5"></div>
    </div>
  );
};
