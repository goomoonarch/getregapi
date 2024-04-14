import { ERAsegCard } from "./ERAsegCard";
import { PersonCard } from "./PersonCard";
//import { copyFunction } from "../utils";

/* eslint-disable react/prop-types */
export const UserCard = ({ userInfo }) => {
  const { dataResponse, ERAsegData, isERAsegReady, isReady, authERAdata, isAuthReady } = userInfo;
  return (
    <>
      {dataResponse && (
        <div className="flex justify-center mt-2">
          <div className="flex flex-col font-Inter bg-[#fcfcfc10] w-[400px] rounded-[8px] px-[0px] py-[10px]">
            {isReady && <PersonCard dataResponse={dataResponse} />}
            {isERAsegReady && <ERAsegCard ERAsegData={{ERAsegData, authERAdata, isAuthReady}} />}
          </div>
        </div>
      )}
    </>
  );
};
