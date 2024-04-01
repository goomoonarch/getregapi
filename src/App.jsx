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
  });
  const { isReady, dataResponse, statusCode, onKey, isERAsegReady, ERAsegData, isAuthReady, LoadingLabel } = fromSearch;

  return (
    <div>
      <HeroBar />
      <SearchBar onUserData={(userData) => setFromSearch(userData)} />
      { !isAuthReady && (onKey || isReady || isERAsegReady) && <LoadingBar LoadingLabel={LoadingLabel} />}
      {<StatusUserInfo codes={{statusCode, isAuthReady}} />}
      {isReady && <UserCard userInfo={{ dataResponse, isERAsegReady, ERAsegData, statusCode }} />}
    </div>
  );
};
