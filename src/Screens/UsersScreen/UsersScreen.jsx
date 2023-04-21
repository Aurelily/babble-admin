import "./index.css";
import React, { useState, useEffect } from "react";

function UsersScreen({ avatarPath, url, userToken }) {
  //States
  const [usersList, setUsersList] = useState([]);
  const [usersLoading, setUsersLoading] = useState(true);

  // To get user list

  useEffect(() => {
    async function fetchUsers() {
      try {
        await fetch(`${url}users`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }).then((response) => {
          response.text().then((data) => {
            if (data.status == 200) {
              setUsersList(data.data);
              setUsersLoading(false);
              console.log(data.data);
            }
          });
        });
      } catch (e) {
        console.log(e);
      }
    }
    fetchUsers();
  }, []);

  return usersLoading ? (
    <div className="main-container">
      <h1>Tableau de bord de gestion des Babblers</h1>
      <table className="user-table">
        <thead>
          <th>ID</th>
          <th>Prénom</th>
          <th>Nom</th>
          <th>Email</th>
          <th>Avatar</th>
          <th>Inscrit le</th>
          <th></th>
        </thead>
        <tbody>
          <tr>
            <td>642d30e66cfdfd935f7eb2a4</td>
            <td>Firstname</td>
            <td>Lastname</td>
            <td>email@gmail.com</td>
            <td>
              {/*   <img src={avatarPath + "avatar-23.png"} alt="avatar" /> */}
              <img
                src="http://design-dev.net/projet-babble/avatars/avatar-23.png"
                alt="avatar"
              />
            </td>
            <td>10/04/2023</td>
            <td>
              <img src="/public/images/bt-trash.png" alt="delete" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ) : (
    <div className="main-container">
      <h1>Tableau de bord de gestion des Babblers</h1>
      <table className="user-table">
        <thead>
          <th>ID</th>
          <th>Prénom</th>
          <th>Nom</th>
          <th>Email</th>
          <th>Avatar</th>
          <th>Inscrit le</th>
          <th></th>
        </thead>
        <tbody>
          <tr>
            <td>642d30e66cfdfd935f7eb2a4</td>
            <td>Firstname</td>
            <td>Lastname</td>
            <td>email@gmail.com</td>
            <td>
              {/*   <img src={avatarPath + "avatar-23.png"} alt="avatar" /> */}
              <img
                src="http://design-dev.net/projet-babble/avatars/avatar-23.png"
                alt="avatar"
              />
            </td>
            <td>10/04/2023</td>
            <td>
              <img src="/public/images/bt-trash.png" alt="delete" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UsersScreen;
