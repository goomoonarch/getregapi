export const Fotter = () => {
  return (
    <footer className="flex flex-col justify-center items-center font-Inter">
      <div className="flex leading-4">
        <p className="font-normal">v2.0.3</p>
        <p className="font-light pl-1">
          Development version for institutional use
        </p>
      </div>
      <div className="flex">
        <p className="pr-1">Build with 💖 for the PAI team by</p>
        <a href="https://www.instagram.com/parsevaltheorem/" target="_tab" className="hover:text-[#0D99FF] hover:underline">
          @ParsevalTheorem
        </a>
      </div>
    </footer>
  );
};
