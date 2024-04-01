import { ERAsegCard } from "./ERAsegCard";
import { PersonCard } from "./PersonCard";

/* eslint-disable react/prop-types */
export const UserCard = ({ userInfo }) => {
  const { dataResponse, statusCode } = userInfo;
  console.log(dataResponse);

  return (
    <div>
      {statusCode === 200 ? <PersonCard dataResponse /> : null}
      {statusCode === 200 ? <ERAsegCard dataResponse={dataResponse} /> : null}
    </div>
  );
};
