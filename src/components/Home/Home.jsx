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
        className="code-input"
      />
      <Link to={`/room/${roomCode}`} className="code-send-button">
        Join Room
      </Link>
    </div>
  );
};

export default Home;
