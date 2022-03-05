import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { PrivateRoute } from "./PrivateRoute";

import Home from "../components/Home/Home";
import Login from "../components/Auth/Login";
import ChatRoom from "../components/ChatRoom/ChatRoom";

const ProtectedRoute = () => {
  return (
    <div>
      <p>You must log in to view the page</p>
      <button onClick={() => alert("HELLO")}>Log in</button>
    </div>
  );
};

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/room/:roomId" component={ChatRoom} />
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/protected">
          <ProtectedRoute />
        </PrivateRoute>
      </Switch>
    </Router>
  );
};
