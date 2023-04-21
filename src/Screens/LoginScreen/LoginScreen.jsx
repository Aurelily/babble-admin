import "./index.css";
import React, { useState } from "react";

/* //Après avoir installé le package via le Terminal : npm install js-cookie, je l'importe ici
import Cookies from "js-cookie"; */

// jwt-decode library to decode jwtToken
import jwtDecode from "jwt-decode";

// components
import MyButton from "../../components/MyButton/MyButton";

function LoginScreen({
  url,
  userToken,
  setUserToken,
  setIsConnected,
  userId,
  setUserId,
  Cookies,
}) {
  //States of input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");

  //handleSubmit function for sign in button
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email && password) {
      if (alert !== null) {
        setAlert(null);
      }
      var userToLogin = {
        email: email,
        password: password,
      };
      const requestOptions = {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userToLogin),
      };

      try {
        await fetch(`${url}users/login`, requestOptions).then((response) => {
          response.json().then((data) => {
            if (data.status == 200) {
              setAlert(data.message);
              if (data.data.token) {
                const token = data.data.token;
                if (token) {
                  const decodedToken = jwtDecode(token);
                  if (decodedToken.isAdmin) {
                    //on crée le cookie avec le token du user
                    Cookies.set("userToken", token, { expires: 10 });
                    setUserToken(token);
                    setUserId(decodedToken.userId);
                    Cookies.set("userId", decodedToken.userId, { expires: 10 });

                    setIsConnected(true);
                  } else {
                    setAlert("Vous n'êtes pas administrateur");
                  }
                } else {
                  //on supprime le cookie du user en cours pour se déconnecter
                  Cookies.remove("userToken");
                  setUserToken(null);
                  Cookies.remove("userId");
                  setUserId(null);
                  setIsConnected(false);
                }
              }
            }
            if (data.status == 500) {
              setAlert(data.message);
            }
            if (data.status == 400) {
              setAlert("Email ou mot de passe incorrect !");
            }
          });
        });
      } catch (error) {
        console.log(error.message);
      }
    } else {
      setAlert("Veuillez remplir tous les champs.");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} method="post">
        <input
          className="my-input"
          type="email"
          name="email"
          id="email"
          placeholder="email"
          value={email}
          required
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          className="my-input"
          type="password"
          name="password"
          id="password"
          placeholder="password"
          value={password}
          required
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <p className="alert">{alert}</p>
        <MyButton color="btPurple" text="Se connecter" />
      </form>
    </div>
  );
}

export default LoginScreen;
