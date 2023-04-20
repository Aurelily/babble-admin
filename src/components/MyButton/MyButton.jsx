import "./index.css";
import React from "react";

function MyButton({ color, action, text }) {
  return (
    <>
      <button className={color} onClick={action}>
        <img className="shiny" src="/images/shiny.png" />
        {text}
      </button>
    </>
  );
}

export default MyButton;
