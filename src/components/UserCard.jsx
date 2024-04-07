import { ERAsegCard } from "./ERAsegCard";
import { PersonCard } from "./PersonCard";
import { copyFunction } from "../utils";

/* eslint-disable react/prop-types */
export const UserCard = ({ userInfo }) => {
  const { dataResponse, ERAsegData, isERAsegReady, isReady } = userInfo;
  const ready2copy = isReady && isERAsegReady;

  return (
    <>
      {<button onClick={copyFunction(ready2copy, dataResponse, ERAsegData)}>BUTON</button>}
      {isReady && <PersonCard dataResponse={dataResponse} />}
      {isERAsegReady && <ERAsegCard ERAsegData={ERAsegData} />}
    </>
  );
};
