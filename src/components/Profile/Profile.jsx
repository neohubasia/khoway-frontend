import React from "react";
import UserFeed from "../User/UserFeed";
import UserCard from "../User/UserCard";

import "./Profile.css";

const Profile = () => {
  return (
    <div className="">
      <div className="col-md-12 row">
        <div className="col-md-4 div-left ">
          <div className="col-md-12 sticky-top">
            <UserCard />
          </div>
        </div>
        <div className="col-md-6 div-middle ">
          <div className="col-md-12">
            <UserFeed />
          </div>
        </div>
        <div className="col-md-2 div-right">
          <div className="col-md-12"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
