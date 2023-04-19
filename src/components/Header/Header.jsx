import "./index.css";
import React, { useState } from "react";

// import components
import MyButton from "../MyButton/MyButton";

function Header() {
  const [isConnected, setIsConnected] = useState(true);

  function handleClick() {
    console.log("OK");
  }

  return isConnected ? (
    <header className="header-connected">
      <img
        className="logo-connected"
        src="/public/images/logo-babble-header.png"
        alt="babble"
      />
      <div>
        <MyButton action={handleClick} text="Utilisateurs" color="btPurple" />
        <MyButton action={handleClick} text="Salons" color="btOrange" />
      </div>
      <button className="btDeco" onClick={handleClick}>
        <img src="/public/images/bt-deco.png" alt="Deconnexion" />
      </button>
    </header>
  ) : (
    <header className="header-main">
      <img
        className="logo-main"
        src="/public/images/logo-babble-admin.png"
        alt="babble"
      />
    </header>
  );
}

export default Header;
