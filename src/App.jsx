import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";

// import component
import SideMenu from "./components/SideMenu/SideMenu";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";

//Après avoir installé le package via le Terminal : npm install js-cookie, je l'importe ici
import Cookies from "js-cookie";

const url = "https://api.aureliepreaud.me/";
const avatarPath = "http://design-dev.net/projet-babble/avatars/";

function App() {
  // states
  const [isConnected, setIsConnected] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userId, setUserId] = useState(null);

  return isConnected ? (
    <>
      <main>
        <SideMenu
          isConnected={isConnected}
          setIsConnected={setIsConnected}
          setUserToken={setUserToken}
          setUserId={setUserId}
          Cookies={Cookies}
        />
        <div className="container">
          <Outlet avatarPath={avatarPath} />
        </div>
      </main>
    </>
  ) : (
    <>
      <Header />
      <main>
        <div className="container">
          <LoginScreen
            url={url}
            userId={userId}
            setUserId={setUserId}
            userToken={userToken}
            setUserToken={setUserToken}
            setIsConnected={setIsConnected}
            Cookies={Cookies}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
