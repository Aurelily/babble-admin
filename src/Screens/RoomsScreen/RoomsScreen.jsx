import "./index.css";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import moment from "moment";

// components
import RoomMessagesCount from "../../components/RoomMessagesCount/RoomMessagesCount";

function RoomsScreen() {
  const [rooms, setRooms] = useState([]);
  const [roomsLoading, setRoomsLoading] = useState(true);

  const url = "https://api.aureliepreaud.me/";
  const avatarPath = "http://design-dev.net/projet-babble/avatars/";
  const tokenCookie = Cookies.get("userToken");

  // Function to Delete a room
  async function deleteRoom(roomIdToDelete) {
    try {
      const response = await fetch(`${url}rooms/delete/${roomIdToDelete}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + tokenCookie,
        },
      });

      if (response.ok) {
        console.log("Room deleted successfully");
      } else {
        console.log("Error deleting room");
      }
    } catch (error) {
      console.error(error);
    }
  }

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
          <th>Nombre de messages</th>
          <th>Crée le</th>
          <th></th>
        </thead>
        <tbody>
          {rooms.map((room) => {
            const date = moment(room.dateCreation).format(
              "DD/MM/YYYY  à  HH:mm:ss"
            );
            return (
              <tr>
                <td>{room._id}</td>
                <td>{room.name}</td>
                <td>
                  {room.creator.firstname} {room.creator.lastname}
                </td>
                <td>{room.privateCode}</td>
                <RoomMessagesCount id={room._id} />
                <td>{date}</td>
                <td>
                  <form
                    key={room._id}
                    className="form-delete"
                    onSubmit={() => deleteRoom(room._id)}
                  >
                    <button type="submit">
                      <img src="/public/images/bt-trash.png" alt="delete" />
                    </button>
                  </form>
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
