//import { ERAsegCard } from "./ERAsegCard";
import { PersonCard } from "./PersonCard";

/* eslint-disable react/prop-types */
export const UserCard = ({ userInfo }) => {
  const { dataResponse, statusCode, ERAsegData } = userInfo;

  return (
    <div>
      UserCard is rendered
      <PersonCard dataResponse={dataResponse} />
      {/*statusCode === 200 ? <ERAsegCard dataResponse={ERAsegData} /> : null*/}
    </div>
  );
};
