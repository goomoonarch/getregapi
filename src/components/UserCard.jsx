import { ERAsegCard } from "./ERAsegCard";
import { PersonCard } from "./PersonCard";
import { copyFunction } from "../utils";

/* eslint-disable react/prop-types */
export const UserCard = ({ userInfo }) => {
  const { dataResponse, ERAsegData, isERAsegReady, isReady, authERAdata, isAuthReady } = userInfo;
  return (
    <>
      {dataResponse && (
        <div className="flex justify-center">
          <div className="flex flex-col font-Inter bg-[#F6F6F620] border border-[#F6F6F6] mt-3 w-[400px] rounded-[8px] px-2 py-[10px]">
            <div className="flex justify-between pb-1 pr-1">
            <div className="text-[#1d1d1d80] pl-[49px]">Información de Usuario</div>
            { (isReady && isERAsegReady) && <button onClick={copyFunction(userInfo)} className="hover:bg-[#F6F6F6] flex h-[26px] w-[26px] rounded-[4px] items-center justify-center"><svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="#B3B4B9"  strokeWidth="1.75"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-copy"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" /><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" /></svg></button>}
            </div>
            {isReady && <PersonCard dataResponse={dataResponse} />}
            {isERAsegReady && <ERAsegCard ERAsegData={{ERAsegData, authERAdata, isAuthReady}} />}
          </div>
        </div>
      )}
    </>
  );
};
