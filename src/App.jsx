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

function App() {
  // states
  const [isConnected, setIsConnected] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userId, setUserId] = useState(null);

  const tokenCookie = Cookies.get("userToken");

  const url = "https://api.aureliepreaud.me/";

  const handleDisconnect = async (event) => {
    console.log("Déconnexion");
    if (tokenCookie) {
      //on supprime le cookie du user en cours pour se déconnecter
      Cookies.remove("userToken");
      setUserToken(null);
      Cookies.remove("userId");
      setUserId(null);
      setIsConnected(false);
    }
  };

  return tokenCookie ? (
    <>
      <main>
        <SideMenu handleDisconnect={handleDisconnect} />
        <div className="container">
          <Outlet />
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
            setUserId={setUserId}
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
