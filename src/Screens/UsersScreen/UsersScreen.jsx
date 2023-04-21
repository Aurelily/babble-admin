import "./index.css";
import React from "react";

// components

function UsersScreen({ avatarPath }) {
  return (
    <div className="main-container">
      <h1>Tableau de bord de gestion des Babblers</h1>
      <table class="user-table">
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
