import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import {
  HeroBar,
  SearchBar,
  UserCard,
  LoadingBar,
  StatusUserInfo,
} from "./components";
import { loadingBar } from "./utils";

export const App = () => {
  const [fromSearch, setFromSearch] = useState({
    onKey: false,
    isReady: false,
    isAuthReady: false,
    isERAsegReady: false,
    allReady: false,
  });
  const { isReady, dataResponse, statusCode, onKey, isERAsegReady, ERAsegData, isAuthReady, LoadingLabel, allReady, authERAdata } = fromSearch;
  const loadingBarS = loadingBar({onKey, isReady, isERAsegReady, allReady, statusCode});
  console.log(onKey, isReady, isERAsegReady, isAuthReady, allReady, statusCode);
  console.log(authERAdata);
  
  return (
    <div>
      <HeroBar />
      <SearchBar onUserData={(userData) => setFromSearch(userData)} />
      {loadingBarS && <LoadingBar LoadingLabel={LoadingLabel} />}
      {<StatusUserInfo codes={{statusCode, isAuthReady}} />}
      {isReady && <UserCard userInfo={{ dataResponse, isERAsegReady, ERAsegData, isReady, authERAdata, isAuthReady }} />}
    </div>
  );
};
