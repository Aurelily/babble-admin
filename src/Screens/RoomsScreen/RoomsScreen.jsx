import "./index.css";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

// components

function RoomsScreen() {
  const [rooms, setRooms] = useState([]);
  const [roomsLoading, setRoomsLoading] = useState(true);

  const url = "https://api.aureliepreaud.me/";
  const avatarPath = "http://design-dev.net/projet-babble/avatars/";
  const tokenCookie = Cookies.get("userToken");

  // To get Rooms list
  useEffect(() => {
    async function fetchAllRooms() {
      try {
        await fetch(`${url}rooms`, {
          headers: {
            Authorization: `Bearer ${tokenCookie}`,
          },
        }).then((response) => {
          response.json().then((data) => {
            if (data.status == 200) {
              setRooms(data.data);
              setRoomsLoading(false);
            }
          });
        });
      } catch (e) {
        console.log(e.message);
      }
    }

    fetchAllRooms();
  }, []);

  return !roomsLoading ? (
    <div className="main-container">
      <h1>Tableau de bord de gestion des salons de discussions</h1>
      <table className="room-table">
        <thead>
          <th>ID</th>
          <th>Nom du salon</th>
          <th>Créateur</th>
          <th>Mode privé</th>
          <th>Crée le</th>
          <th></th>
        </thead>
        <tbody>
          {rooms.map((room) => {
            return (
              <tr>
                <td>{room._id}</td>
                <td>{room.name}</td>
                <td>
                  {room.creator.firstname} {room.creator.lastname}
                </td>
                <td>{room.privateCode}</td>
                <td>{room.dateCreation}</td>
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
    <div className="main-container">Loading...</div>
  );
}

export default RoomsScreen;
