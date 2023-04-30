import "./index.css";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

//components
import RoomMessagesCount from "../../components/RoomMessagesCount/RoomMessagesCount";

function UserDetailScreen() {
  const { id } = useParams();

  //States
  const [userInfos, setUserInfos] = useState([]);
  const [userInfosLoading, setUserInfosLoading] = useState(true);
  const [rooms, setRooms] = useState([]);
  const [roomsLoading, setRoomsLoading] = useState(true);
  const [count, setCount] = useState(0);

  const url = "https://api.aureliepreaud.me/";
  const avatarPath = "http://design-dev.net/projet-babble/avatars/";
  const tokenCookie = Cookies.get("userToken");

  // Function to get user details
  async function fetchUserDetails() {
    try {
      await fetch(`${url}users/details/${id}`, {
        headers: {
          Authorization: `Bearer ${tokenCookie}`,
        },
      }).then((response) => {
        response.json().then((data) => {
          if (data.status == 200) {
            setUserInfos(data.data);
            setUserInfosLoading(false);
            console.log(data);
          }
        });
      });
    } catch (e) {
      console.log(e);
    }
  }

  // Function to get user's rooms list
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

  useEffect(() => {
    console.log(tokenCookie);
    fetchUserDetails();
    fetchAllRooms();
  }, []);

  return !userInfosLoading && !roomsLoading ? (
    <div className="main-container-details">
      <img src={`${avatarPath}${userInfos.avatarPath}`} alt="avatar" />
      <h1>
        {userInfos.firstname} {userInfos.lastname}
      </h1>
      <h2> ID : {userInfos._id}</h2>
      <h2>Email : {userInfos.email}</h2>
      <table className="user-detail-table ">
        <thead>
          <tr>
            <th>Salons crées</th>
            <th>Nombre de messages du salon</th>
            <th>Date de création</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => {
            if (room.creator._id === userInfos._id)
              return (
                <tr>
                  <td>{room.name}</td>

                  <RoomMessagesCount id={room._id} />

                  <td>{room.dateCreation}</td>
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

export default UserDetailScreen;
