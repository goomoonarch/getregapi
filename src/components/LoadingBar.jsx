/* eslint-disable react/prop-types */
export const LoadingBar = ({ LoadingLabel }) => {
  
  return (
    <div className="flex justify-center mb-2 animate-fade-up animate-duration-[250ms] animate-ease-in-out">
      <div className="flex w-[360px] sm:w-[400px] h-[40px] rounded-[6px] font-Inter justify-between items-center bg-[#f6f6f6] text-[#292929]">
        <div className="flex justify-center items-center px-2">
        <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-spin">
        <path d="M27.6137 20.0318C27.9979 19.6459 27.9201 19.2315 27.3466 19.1352L26.2474 18.9506C26.4981 14.8241 23.5418 11.019 19.392 10.3222C16.9626 9.9142 14.5783 10.6522 12.792 12.1212C12.4397 12.4142 12.4074 12.851 12.6805 13.1262C12.9537 13.4014 13.3494 13.3859 13.6538 13.134C15.1278 11.9155 17.1096 11.3311 19.1646 11.6762C22.6374 12.2594 25.033 15.307 24.8774 18.7206L23.6906 18.5213C23.1251 18.4263 22.9162 18.7925 23.1466 19.2734L24.5041 22.1139C24.6975 22.5231 25.0785 22.5953 25.4042 22.2651L27.6137 20.0318ZM23.2554 24.7706C23.6156 24.479 23.6467 24.0501 23.3655 23.7736C23.0923 23.4984 22.7059 23.5072 22.3936 23.7578C20.9129 24.9669 18.9298 25.5593 16.8907 25.2169C13.4259 24.6351 11.0303 21.5875 11.1792 18.1647L12.366 18.364C12.9315 18.4589 13.1392 18.1007 12.9101 17.6117L11.5526 14.7713C11.3592 14.3621 10.9782 14.2899 10.6524 14.6201L8.45093 16.8547C8.05738 17.2473 8.14454 17.655 8.718 17.7513L9.80924 17.9346C9.56648 22.0624 12.5135 25.8741 16.6633 26.571C19.0927 26.979 21.4677 26.2476 23.2554 24.7706Z" fill="#1D1D1F" fillOpacity="0.7"/>
        </svg>
          <p>
            {`${LoadingLabel}`}
          </p>
        </div>
      </div>
    </div>
  );
};