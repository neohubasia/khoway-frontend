import React from "react";
import { Link } from "react-router-dom";
import { getRoomList } from "../../services/RestAPI";

import "./UserFeed.css";

const UserFeed = () => {
  const [respData, setRespData] = React.useState([]);

  const fetchData = () => {
    getRoomList({})
      .then((result) => {
        result.data.status === "SUCCESS"
          ? setRespData(result.data.data)
          : setRespData([]);
      })
      .catch((error) => {
        console.log("Error found: ", error);
      });
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return respData.map((room, idx) => (
    <Link key={idx} to={`/room/${room._id}`} className="card feed-card">
      <img
        alt="Cover"
        className="card-img-top"
        src="https://via.placeholder.com/240x100.png"
      />
      <div className="card-body">
        <h5 className="card-title">{room.name}</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </Link>
  ));
};

export default UserFeed;
