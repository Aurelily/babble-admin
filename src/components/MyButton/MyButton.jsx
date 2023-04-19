import "./index.css";
import React from "react";

function MyButton({ color, action, text }) {
  return (
    <button className={color} onClick={action}>
      {text}
    </button>
  );
}

export default MyButton;
