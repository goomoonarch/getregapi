import Header from "./components/Header";
import { Search } from "./components/Search";
import { useState } from "react";
import UserCard from "./components/UserCard";
import OkAlert from "./components/okAlert";
import NoAlert from "./components/NoAlert";

function App() {
  const [PersonData, SetPersonData] = useState([]);
  const [ERAsegData, SetERAsegData] = useState([]);
  const [UserStatus, SetUserStatus] = useState("");
  const [showAlert, setShowAlert] = useState(true);

  function handleAlertDismiss() {
    setShowAlert(false);
  }

  return (
    <main className="relative">
      <Header />
      <Search
        onPersonData={SetPersonData}
        onERAsegData={SetERAsegData}
        onUserStatus={SetUserStatus}
      />
      <div>
        {UserStatus === 200 ? (
          <div>
            <div className="flex w-full justify-center">
              <OkAlert />
            </div>
            <div className="flex justify-center">
              <UserCard
                PersonData={PersonData}
                ERAsegData={ERAsegData}
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
    </main>
  );
}

export default App;
