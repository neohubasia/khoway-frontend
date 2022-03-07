import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  const [roomCode, setRoomCode] = React.useState("");

  const handleRoomCodeChange = (event) => {
    setRoomCode(event.target.value);
  };

  return (
    <div className="home-container">
      <input
        type="text"
        value={roomCode}
        placeholder="Enter Code"
        onChange={handleRoomCodeChange}
        className="room-input"
      />
      <Link to={`/room/${roomCode}`} className="room-submit-button">
        Join Room
      </Link>
      <Link to={`/profile`} className="profile-view-button">
        Go Profile
      </Link>
    </div>
  );
};

export default Home;
