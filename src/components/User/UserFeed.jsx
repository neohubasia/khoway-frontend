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

  return (
    <>
      {respData.map((room, idx) => (
        <Link key={idx} to={`/room/${room._id}`} className="col-md-6">
          <div className="card feed-card">
            <img
              src={"https://via.placeholder.com/300x100.png"}
              className="img"
              alt="Cover"
            />
            <div className="card-body">
              <h5 className="card-title">{room.name}</h5>
              <p className="card-text">
                {!room.status ? (
                  <small className="text-success">Active</small>
                ) : (
                  <small className="text-danger">Inactive</small>
                )}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default UserFeed;
