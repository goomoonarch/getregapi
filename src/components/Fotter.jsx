export const Fotter = () => {
  return (
    <footer className="sm:flex flex flex-col justify-center items-center font-Inter">
      <div className="sm:flex leading-4 sm:mx-0 mx-4">
        <p className="font-normal">v2.0.3</p>
        <p className="font-light sm:pl-1">
          Development version for institutional use
        </p>
      </div>
      <div className="sm:flex sm:mx-0 mx-4 w-[305px] sm:w-full items-center justify-center">
        <p className="sm:pr-1">Build with 💖 for the PAI team by</p>
        <a href="https://www.instagram.com/parsevaltheorem/" target="_tab" className="hover:text-[#0D99FF] hover:underline">
          @ParsevalTheorem
        </a>
      </div>
    </footer>
  );
};
