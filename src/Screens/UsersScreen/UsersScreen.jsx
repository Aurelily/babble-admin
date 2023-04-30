import "./index.css";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

function UsersScreen() {
  //States
  const [usersList, setUsersList] = useState([]);
  const [usersLoading, setUsersLoading] = useState(true);

  const url = "https://api.aureliepreaud.me/";
  const avatarPath = "http://design-dev.net/projet-babble/avatars/";
  const tokenCookie = Cookies.get("userToken");

  // To get user list
  useEffect(() => {
    console.log(tokenCookie);
    async function fetchUsers() {
      try {
        await fetch(`${url}users`, {
          headers: {
            Authorization: `Bearer ${tokenCookie}`,
          },
        }).then((response) => {
          response.json().then((data) => {
            if (data.status == 200) {
              setUsersList(data.data);
              setUsersLoading(false);
              console.log(data);
            }
          });
        });
      } catch (e) {
        console.log(e);
      }
    }
    fetchUsers();
  }, []);

  return !usersLoading ? (
    <div className="main-container">
      <h1>Tableau de bord de gestion des Babblers</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>Infos</th>
            <th>ID</th>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Avatar</th>
            <th>Inscrit le</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((user) => {
            return (
              <tr>
                <td>
                  <Link to={`/users/details/${user._id}`}>
                    <img src="/public/images/bt-infos.png" alt="infos" />
                  </Link>
                </td>
                <td>{user._id}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>
                  <img src={`${avatarPath}${user.avatarPath}`} alt="avatar" />
                </td>
                <td>{user.dateCreation}</td>
                <td>
                  <img src="/public/images/bt-trash.png" alt="delete" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  ) : (
    <div className="main-container">Loading</div>
  );
}

export default UsersScreen;
