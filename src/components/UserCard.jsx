import { ERAsegCard } from "./ERAsegCard";
import { PersonCard } from "./PersonCard";

/* eslint-disable react/prop-types */
export const UserCard = ({ userInfo }) => {
  const { dataResponse, ERAsegData, isERAsegReady, isReady } = userInfo;

  return (
    <div>
      {isReady && <PersonCard dataResponse={dataResponse} />}
      {isERAsegReady && <ERAsegCard ERAsegData={ERAsegData} />}
    </div>
  );
};
