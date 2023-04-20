import "./index.css";
import React from "react";
import { Link } from "react-router-dom";

//components
import MyButton from "../MyButton/MyButton";

function SideMenu() {
  function handleClick() {
    console.log("OK");
  }

  return (
    <nav className="side-menu">
      <button className="btDeco" onClick={handleClick}>
        <img src="/public/images/bt-deco.png" alt="Deconnexion" />
      </button>
      <img
        className="logo-side"
        src="/images/logo-babble-admin.png"
        alt="babble"
      />
      <Link to={`users`}>
        <MyButton action={handleClick} text="Utilisateurs" color="btPurple" />
      </Link>
      <Link to={`rooms`}>
        <MyButton action={handleClick} text="Salons" color="btOrange" />
      </Link>
    </nav>
  );
}

export default SideMenu;
