import React from "react";
import { Redirect, Route } from "react-router-dom";
import { fakeAuth } from "../services/FakeAuth";

export const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return fakeAuth.isAuthenticated === true ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};
