import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

function RoomMessagesCount(props) {
  const [messagesCount, setMessagesCount] = useState(0);

  // Function to get number of messages by room id
  async function fetchMessagesCountByRoomId(roomId) {
    const url = "https://api.aureliepreaud.me/";
    const tokenCookie = Cookies.get("userToken");
    try {
      const response = await fetch(`${url}messages/room/${roomId}`, {
        headers: {
          Authorization: `Bearer ${tokenCookie}`,
        },
      });
      const data = await response.json();
      if (data.status === 200) {
        return data.data.length;
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    async function fetchData() {
      const count = await fetchMessagesCountByRoomId(props.id);
      setMessagesCount(count);
    }
    fetchData();
  }, [props.id]);

  return <td>{messagesCount}</td>;
}

export default RoomMessagesCount;
