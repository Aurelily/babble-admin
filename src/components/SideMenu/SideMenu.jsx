import "./index.css";
import React from "react";
import { Link } from "react-router-dom";

//components
import MyButton from "../MyButton/MyButton";

function SideMenu({ handleDisconnect }) {
  return (
    <nav className="side-menu">
      <button className="btDeco" onClick={handleDisconnect}>
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
