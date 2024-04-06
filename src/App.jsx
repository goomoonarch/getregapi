import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import {
  HeroBar,
  SearchBar,
  UserCard,
  LoadingBar,
  StatusUserInfo,
} from "./components";

export const App = () => {
  const [fromSearch, setFromSearch] = useState({
    onKey: false,
    isReady: false,
    isAuthReady: false,
    isERAsegReady: false,
    allReady: false,
  });
  const { isReady, dataResponse, statusCode, onKey, isERAsegReady, ERAsegData, isAuthReady, LoadingLabel, allReady } = fromSearch;
  console.log({
    "onkey": onKey,
    "personInfo": isReady,
    "ERAsegInfo": isERAsegReady,
    "Authenticator": isAuthReady,
    "allReady": allReady
  });
  return (
    <div>
      <HeroBar />
      <SearchBar onUserData={(userData) => setFromSearch(userData)} />
      {!allReady && (onKey || isReady || isERAsegReady) && <LoadingBar LoadingLabel={LoadingLabel} />}
      {<StatusUserInfo codes={{statusCode, isAuthReady}} />}
      {isReady && <UserCard userInfo={{ dataResponse, isERAsegReady, ERAsegData, isReady }} />}
    </div>
  );
};
