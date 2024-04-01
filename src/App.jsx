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
  });
  const { dataResponse, statusCode, onKey, isReady, isAuthReady, LoadingLabel } = fromSearch;
  console.log(dataResponse, statusCode, onKey, isReady, isAuthReady, LoadingLabel);

  return (
    <div>
      <HeroBar />
      <SearchBar onUserData={(userData) => setFromSearch(userData)} />
      {onKey && !isReady && <LoadingBar LoadingLabel={LoadingLabel} />}{/* write the fuking ! when you finish */}
      {<StatusUserInfo codes={{statusCode, isAuthReady}} />}
      {isReady && <UserCard userInfo={{ dataResponse, statusCode }} />}
    </div>
  );
};
