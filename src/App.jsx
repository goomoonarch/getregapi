import Header from "./components/Header";
import { Search } from "./components/Search";
import { useState } from "react";
import UserCard from "./components/UserCard";
import OkAlert from "./components/okAlert";
import NoAlert from "./components/NoAlert";
import LoadingAlert from "./components/LoadingAlert";
import ERAsegCard from "./ERAsegCard";

function App() {

  function setLoadingState(newLoadingState) {
    setLoading(newLoadingState);
  }

  const [PersonData, SetPersonData] = useState([]);
  const [ERAsegData, SetERAsegData] = useState([]);
  const [UserStatus, SetUserStatus] = useState("");
  const [showAlert, setShowAlert] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleUserStatus = (status) => {
    SetUserStatus(status);
    if (status === 204 || 500) {
      setLoading(false);
    }
  };

  return (
    <main className="relative">
      <Header />
      <Search
        onPersonData={SetPersonData}
        onERAsegData={SetERAsegData}
        onUserStatus={handleUserStatus}
        setLoadingState={setLoadingState}
      />
      <div className="flex w-full justify-center">
        {loading && <LoadingAlert />}
      </div>
      <div>
        {UserStatus === 200 ? (
          <div>
            <div className="flex w-full justify-center">
              <OkAlert />
            </div>
            <div className="flex justify-center">
              <UserCard
                PersonData={PersonData}
                UserStatus={UserStatus}
              />
            </div>
          </div>
        ) : UserStatus === 204 && showAlert ? (
          <div className="flex w-full justify-center">
            <NoAlert />
          </div>
        ) : null}
      </div>
      <ERAsegCard ERAsegData={ERAsegData} />
    </main>
  );
}

export default App;
