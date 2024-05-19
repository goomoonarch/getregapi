export const Fotter = () => {
  return (
    <div className="font-Inter leading-4 mt-4 sm:w-[400px] w-[360px]">
      <p className="text-center">
        v2.0.6
        <span className="font-light">
          {" "}
          Development version for institutional use
        </span>
        <span>
          {" "}
          Build with 💖 for the PAI team by{" "}
          <a
            href="https://www.instagram.com/parsevaltheorem/"
            target="_tab"
            className="hover:text-[#0D99FF] hover:underline"
          >
            @ParsevalTheorem
          </a>
        </span>
      </p>
    </div>
  );
};
