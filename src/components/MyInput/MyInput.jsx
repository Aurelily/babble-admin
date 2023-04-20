import "./index.css";
import React from "react";

function MyInput({ type, name, id, placeholder, value, setValue }) {
  return (
    <>
      <input
        className="my-input"
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        setValue={setValue}
      />
    </>
  );
}

export default MyInput;
