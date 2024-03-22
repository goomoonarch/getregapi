/* eslint-disable react/prop-types */
export const UserCard = ({userInfo}) => {
  const {dataResponse, statusCode} = userInfo;
  console.log(dataResponse, statusCode);
  return <div>N</div>;
};
