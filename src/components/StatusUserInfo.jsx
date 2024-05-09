/* eslint-disable react/prop-types */
import { ERAsegWarning } from "./ERAsegEmpty";
import { OkAlert } from "./alerts/OkAlert";
import { OkERAsegAuthAlert } from "./alerts/OkERAsegAuthAlert";
import { UserNotFound } from "./alerts/UserNotFound";

export const StatusUserInfo = ({codes}) => {
  const {statusCode, isAuthReady, ERAsegData} = codes;
  
  const reUnf = (statusCode) => {
    return statusCode === 500 || statusCode === 404 || statusCode === 204;
  };
  return (
    <div className="mb-[12px]">
      {isAuthReady ? <OkERAsegAuthAlert /> : null}
      {(ERAsegData && ERAsegData.codigoRespuesta === "02") ? <ERAsegWarning /> : null}
      {statusCode === 200 ? <OkAlert /> : null}  
      {reUnf(statusCode) ? <UserNotFound /> : null}
    </div>
  );
};
