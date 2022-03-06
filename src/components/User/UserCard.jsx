import React from "react";
import { Link } from "react-router-dom";
import { authUser } from "../../services/AuthUser";

import "./UserCard.css";

const UserTab = () => {
  const handleSingOut = async (e) => {
    e.preventDefault();
    authUser.signout(() => {
      console.log("Sign out event is occured.");
    });
  };

  return (
    <ul className="list-group list-group-flush">
      <li className="list-group-item" key={1}>
        <i className="far fa-comment-alt" />
        &nbsp; My Room
      </li>
      <li className="list-group-item" key={2}>
        <i className="far fa-comment-alt" />
        &nbsp; Public Room
      </li>
      <li className="list-group-item" key={3}>
        <i className="fa fa-sign-out-alt" />
        <Link to={`/`} className="sign-out-link" onClick={handleSingOut}>
          &nbsp; Sign Out
        </Link>
      </li>
    </ul>
  );
};

const UserCard = () => {
  return (
    <div className="user-card">
      <div className="user-avatar">
        <img
          src={"../../../khoway-2.png"}
          className="card-img-top"
          alt="Profile"
        />
      </div>
      <div className="card-body">
        <h4 className="card-title text-center">Wai Phyo Naing</h4>
        <div className="card-button my-4">
          <Link to={`/room/#new`} className="btn col-12 room-create-button">
            Create Room
          </Link>
        </div>
        <div className="card-list border">
          <UserTab />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
