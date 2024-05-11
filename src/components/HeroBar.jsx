import malog from "../assets/new_ma_logo.png";
export const HeroBar = () => {
  return (
    <div>
      <div className="flex justify-center cursor-default">
          <div id="moonserachtitle" className="flex font-Inter text-[58px] tracking-tight">
            <div className="font-bold">Moon</div>
            <div className="font-light">Search</div>
          </div>
        <div className="flex absolute justify-center items-center h-10 translate-y-[60px] translate-x-[101px]">
          <h1 className="px-[1px] text-[18px] font-Inter translate-y-[-0.5px]">by</h1>
          <img className="w-[111px] h-[24px]" src={malog} alt="moonarchLogo" />
        </div>
      </div>
      <div className="items-center justify-center h-[80px] bg-gradient-to-r from-[#E6FAFE] to-[#ECDDFB] mt-4"></div>
    </div>
  );
};
