/* eslint-disable react/prop-types */
import { OkAlert } from "./alerts/OkAlert";
import { OkERAsegAuthAlert } from "./alerts/OkERAsegAuthAlert";
import { UserNotFound } from "./alerts/UserNotFound";
export const StatusUserInfo = ({codes}) => {
  const {statusCode, isAuthReady} = codes;
  const reUnf = (statusCode) => {
    return statusCode === 500 || statusCode === 404 || statusCode === 204;
  };
  return (
    <div>
      {isAuthReady ? <OkERAsegAuthAlert /> : null}
      {statusCode === 200 ? <OkAlert /> : null}  
      {reUnf(statusCode) ? <UserNotFound /> : null}
    </div>
  );
};
