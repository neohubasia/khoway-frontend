import React from "react";
import UserFeed from "../User/UserFeed";
import UserCard from "../User/UserCard";

// import "./Profile.css";

const Profile = () => {
  return (
    <div className="">
      <div className="col-md-12 row">
        <div className="col-md-4 my-2">
          <UserCard />
        </div>
        <div className="col-md-8 my-2">
          <UserFeed />
        </div>
      </div>
    </div>
  );
};

export default Profile;
