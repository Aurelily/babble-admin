import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";

// import component
import SideMenu from "./components/SideMenu/SideMenu";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";

function App({ children }) {
  // states
  const [isConnected, setIsConnected] = useState(true);
  return isConnected ? (
    <>
      <main>
        <SideMenu />
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  ) : (
    <>
      <Header />
      <main>
        <LoginScreen />
      </main>
      <Footer />
    </>
  );
}

export default App;
