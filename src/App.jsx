import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { HeroBar, SearchBar, UserCard, LoadingBar } from "./components";

export const App = () => {
  const [fromSearch, setFromSearch] = useState({onKey:false, isReady:false});
  const { dataResponse, statusCode, onKey, isReady } = fromSearch;
  console.log(dataResponse, statusCode, onKey, isReady);

  return (
    <div>
      <HeroBar />
      <SearchBar onUserData={(userData) => setFromSearch(userData)} />
      {(onKey && !isReady) && <LoadingBar />} {/* write the fuking ! when you finish */}
      {isReady && <UserCard userInfo = {{dataResponse, statusCode}}/>}
    </div>
  );
};
