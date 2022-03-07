import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

import Home from "../components/Home/Home";
import SignIn from "../components/Auth/SignIn";
import SignUp from "../components/Auth/SignUp";
import NewRoom from "../components/Home/NewRoom";
import ChatRoom from "../components/Room/ChatRoom";
import Profile from "../components/Profile/Profile";

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={SignIn} />
        <Route path="/register" component={SignUp} />
        <Route path="/room/:roomId" component={ChatRoom} />
        <PrivateRoute path="/profile">
          <Profile />
        </PrivateRoute>
        <PrivateRoute path="/new/room">
          <NewRoom />
        </PrivateRoute>
      </Switch>
    </Router>
  );
};
