import React from "react";
import moment from "moment";
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
      <img alt="Cover" className="card-img-top" src={room.cover_img} />
      <div className="card-body">
        <h5 className="card-title">
          <i className="fa fa-globe" />
          &nbsp; {room.name}
        </h5>
        <p className="card-text ml-5">
          <i className="fa fa-paragraph" />
          <span className="px-3">{room.description}</span>
        </p>
      </div>
      <div className="card-footer">
        <small className="text-muted">
          <i className="fa fa-clock" />
          &nbsp; {moment(room.created_at).format("DD/MM/YYYY, hh:mm A")}
        </small>
      </div>
    </Link>
  ));
};

export default UserFeed;
