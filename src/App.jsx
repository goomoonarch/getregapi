import Header from "./components/Header";
import { Search } from "./components/Search";
import { useState } from "react";
import UserCard from "./components/UserCard";
import OkAlert from "./components/okAlert";
import NoAlert from "./components/NoAlert";
import LoadingAlert from "./components/LoadingAlert";
import Hero from "./components/Hero";
import Error500 from "./components/Error500";

function App() {
  function setLoadingState(newLoadingState) {
    setLoading(newLoadingState);
  }

  const [PersonData, SetPersonData] = useState([]);
  const [ERAsegData, SetERAsegData] = useState([]);
  const [UserStatus, SetUserStatus] = useState("");
  const [ERAsegStatus, setERAsegStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [showERAsegCard, setShowERAsegCard] = useState(false);

  const handleUserStatus = (status) => {
    SetUserStatus(status);
    if (status === 204) {
      setLoading(false);
    }
  };

  return (
    <main className="relative">
      <Header />
      <Hero />
      <Search
        onPersonData={SetPersonData}
        onERAsegData={SetERAsegData}
        onUserStatus={handleUserStatus}
        onERAsegStatus={setERAsegStatus}
        onShowERAsegCard={setShowERAsegCard}
        setLoadingState={setLoadingState}
      />
      <div className="flex w-full justify-center">
        {loading && <LoadingAlert />}
      </div>
      <div>
        {UserStatus === 200 ? (
          <div>
            <div className="flex items-center justify-center">
              <OkAlert />
            </div>
            <div className="flex justify-center">
              <UserCard
                PersonData={PersonData}
                UserStatus={UserStatus}
                ERAsegData={ERAsegData}
                ERAsegStatus={ERAsegStatus}
                showERAsegCard={showERAsegCard}
              />
            </div>
          </div>
        ) : UserStatus === 204 ? (
          <div className="flex w-full justify-center">
            <NoAlert />
          </div>
        ) : UserStatus === 500 ? (
          <div className="flex w-full justify-center">
            <Error500 />
          </div>
        ) : null}
      </div>
      <div className="m-5  text-blue-gray-500">
        <h1 className="font-SFpro text-[12px]">v1.1.8</h1>
        <h1 className="font-SFpro text-[12px]">
          Developer version for institutional use
        </h1>
      </div>
    </main>
  );
}

export default App;
