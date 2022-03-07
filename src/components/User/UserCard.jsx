import React from "react";
import { Link, Redirect, useLocation } from "react-router-dom";
import { authUser } from "../../services/AuthUser";

import "./UserCard.css";

const UserTab = () => {
  const { state } = useLocation();
  const [redirectTo, setRedirectTo] = React.useState(false);

  const handleSingOut = async (e) => {
    e.preventDefault();
    authUser.signOut(() => {
      setRedirectTo(true);
    });
  };

  if (redirectTo === true) {
    return <Redirect to={state?.from || "/"} />;
  }

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
  const user = authUser.getUser();

  return (
    <div className="user-card">
      <div className="user-avatar">
        <img src={user.avatar} className="card-img-top" alt="Profile" />
      </div>
      <div className="card-body">
        <h4 className="card-title text-center">{user.fullname}</h4>
        <div className="card-button my-4">
          <Link to={`/new/room`} className="btn col-12 room-create-button">
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
