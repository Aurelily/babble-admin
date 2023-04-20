import "./index.css";
import React, { useState } from "react";

// components
import MyInput from "../MyInput/MyInput";
import MyButton from "../MyButton/MyButton";

function LoginForm() {
  function handleClick() {
    console.log("OK");
  }

  //States of input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");

  return (
    <div className="form-container">
      <form action="" method="post">
        <MyInput
          type="email"
          name="email"
          id="email"
          placeholder="email"
          value={email}
          setValue={setEmail}
        />
        <MyInput
          type="password"
          name="password"
          id="password"
          placeholder="password"
          value={password}
          setValue={setPassword}
        />
        <p className="alert">{alert}</p>
        <MyButton color="btPurple" action={handleClick} text="Se connecter" />
      </form>
    </div>
  );
}

export default LoginForm;
