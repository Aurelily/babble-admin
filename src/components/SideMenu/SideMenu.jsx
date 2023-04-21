import "./index.css";
import React from "react";
import { Link } from "react-router-dom";

//components
import MyButton from "../MyButton/MyButton";

function SideMenu({
  setUserToken,
  isConnected,
  setIsConnected,
  setUserId,
  tokenCookie,
  Cookies,
}) {
  function disconnect() {
    console.log("Déconnexion");
    if (tokenCookie) {
      //on supprime le cookie du user en cours pour se déconnecter
      Cookies.remove("userToken");
      setUserToken(null);
      Cookies.remove("userId");
      setUserId(null);
      setIsConnected(false);
    }
  }

  return (
    <nav className="side-menu">
      <button className="btDeco" onClick={disconnect}>
        <img src="/public/images/bt-deco.png" alt="Deconnexion" />
      </button>
      <img
        className="logo-side"
        src="/images/logo-babble-admin.png"
        alt="babble"
      />
      <Link to={`users`}>
        <MyButton text="Utilisateurs" color="btPurple" />
      </Link>
      <Link to={`rooms`}>
        <MyButton text="Salons" color="btOrange" />
      </Link>
    </nav>
  );
}

export default SideMenu;
