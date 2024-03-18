import { useState } from "react";
import { HeroBar, SearchBar, UserCard } from "./components";

export const App = () => {

  const [fromSearch, setFromSearch] = useState({});

  const {dataResponse, isLoading, onKey} = fromSearch;
  console.log(dataResponse, isLoading, onKey);

  return (
    <div>
      <HeroBar />
      <SearchBar onUserData={(userData) => setFromSearch(userData)}/>
      {isLoading && <UserCard />}
    </div>
  );
};
