import "./index.css";
import React from "react";

// components

function RoomsScreen() {
  return (
    <div className="main-container">
      <h1>Tableau de bord de gestion des salons de discussions</h1>
      <table class="room-table">
        <thead>
          <th>ID</th>
          <th>Nom du salon</th>
          <th>Mode privé</th>
          <th>Nb. messages</th>
          <th>Crée le</th>
          <th>Dernier message le</th>
          <th></th>
        </thead>
        <tbody>
          <tr>
            <td>642d30e66cfdfd935f7eb2a4</td>
            <td>Name</td>
            <td>Privé</td>
            <td>10</td>
            <td>10/04/2023</td>
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

export default RoomsScreen;
