import Header from "./components/Header";
import { Search } from "./components/Search";
import { useState } from "react";
import UserCard from "./components/UserCard";
import OkAlert from "./components/OkAlert";
import NoAlert from "./components/NoAlert";
import LoadingAlert from "./components/LoadingAlert";
import Hero from "./components/Hero";
import Error500 from "./components/Error500";
import Fotter from "./components/Fotter";
import ERAsegWarning from "./components/ERAsegWarning";

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
  const [showUserCard, setShowUserCard] = useState(false);
  const [showERAsegWarning, setShowERAsegWarning] = useState(false);

  const handleUserStatus = (status) => {
    SetUserStatus(status);
    if (status === 204) {
      setLoading(false);
    }
  };

  return (
    <div>
      <main className="realtive">
        <Header />
        <Hero />
        <Search
          onPersonData={SetPersonData}
          onERAsegData={SetERAsegData}
          onUserStatus={handleUserStatus}
          onERAsegStatus={setERAsegStatus}
          onShowERAsegCard={setShowERAsegCard}
          onShowUserCard={setShowUserCard}
          setLoadingState={setLoadingState}
          onShowERAsegWarning={setShowERAsegWarning}
        />
        <div className="flex w-full justify-center">
          {loading && <LoadingAlert />}
          {showERAsegWarning && <ERAsegWarning />}
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
                  showUserCard={showUserCard}
                  showERAsegWarning
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
          ) :  null }
        </div>
        <Fotter />
      </main>
    </div>
  );
}

export default App;
