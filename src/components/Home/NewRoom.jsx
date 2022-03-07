import React from "react";
import { Redirect, useLocation } from "react-router-dom";
import { createRoom } from "../../services/RestAPI";
import { authUser } from "../../services/AuthUser";

import "./Home.css";

const NewRoom = () => {
  const user = authUser.getUser();
  const { state } = useLocation();
  const [redirectTo, setRedirectTo] = React.useState(false);
  const [roomData, setRoomData] = React.useState({
    name: "",
    description: "",
    userid: user._id,
  });

  const handleOnChange = (e) => {
    setRoomData({
      ...roomData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await createRoom(roomData);
      data.status === "SUCCESS" ? setRedirectTo(true) : setRedirectTo(false);
    } catch (error) {
      console.log("Error found: ", error);
    }
  };

  if (redirectTo === true) {
    return <Redirect to={state?.from || "/"} />;
  }

  return (
    <div className="home-container">
      <input
        type="text"
        name="name"
        value={roomData.name}
        placeholder="Enter Name"
        onChange={handleOnChange}
        className="room-input"
      />
      <input
        type="text"
        name="description"
        value={roomData.description}
        placeholder="Enter Description"
        onChange={handleOnChange}
        className="room-input"
      />
      <button
        type="submit"
        className="room-submit-button"
        onClick={handleOnSubmit}
      >
        Create Room
      </button>
    </div>
  );
};

export default NewRoom;
