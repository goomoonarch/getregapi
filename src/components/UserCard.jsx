// eslint-disable-next-line react/prop-types
export const UserCard = ({ userInfo }) => {
  console.log(userInfo);
  return <div>{JSON.stringify(userInfo)}</div>;
};
