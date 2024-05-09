import { useState } from "react";
import {
  HeroBar,
  SearchBar,
  UserCard,
  LoadingBar,
  StatusUserInfo,
  Fotter,
  PersonSqueleton,
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
  
  return (
    <div>
      <HeroBar />
      <SearchBar onUserData={(userData) => setFromSearch(userData)} />
      <div className="flex flex-col justify-center items-center translate-y-[-12px]">
      {loadingBarS && <LoadingBar LoadingLabel={LoadingLabel} />}
      {<StatusUserInfo codes={{statusCode, isAuthReady, ERAsegData}} />}
      {loadingBarS && <PersonSqueleton />}  
      {isReady && <UserCard userInfo={{ dataResponse, isERAsegReady, ERAsegData, isReady, authERAdata, isAuthReady }} />}
      </div>
      <Fotter />
    </div>
  );
};
