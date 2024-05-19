import { ERAsegCard } from "./ERAsegCard";
import { PersonCard } from "./PersonCard";
import { UserBar } from "./UserBar";

/* eslint-disable react/prop-types */
export const UserCard = ({ userInfo }) => {
  const {
    dataResponse,
    ERAsegData,
    isERAsegReady,
    isReady,
    authERAdata,
    isAuthReady,
  } = userInfo;
  const showCard = isReady && isERAsegReady;

  return (
    <>
      {dataResponse && (
        <div className="flex justify-center animate-fade-up animate-ease-in-out -z-50">
          <div className="flex flex-col font-Inter items-center bg-[#FDFDFD] sm:w-[400px] w-[360px] rounded-[6px] py-3">
            {showCard && (
              <div className="animate-fade animate-delay-[200ms]">
                <UserBar userInfo={userInfo} />
                <PersonCard dataResponse={dataResponse} />
                <ERAsegCard
                  ERAsegData={{ ERAsegData, authERAdata, isAuthReady }}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
