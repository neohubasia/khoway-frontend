import React, { Component } from "react";
import { useLocation, Redirect, Link } from "react-router-dom";
import { fakeAuth } from "../../services/FakeAuth";

import "./Auth.css";

const Login = () => {
  const [redirectToReferrer, setRedirectToReferrer] = React.useState(false);

  const { state } = useLocation();

  const login = () =>
    fakeAuth.authenticate(() => {
      setRedirectToReferrer(true);
    });

  if (redirectToReferrer === true) {
    return <Redirect to={state?.from || "/"} />;
  }

  //   login();

  return (
    <div class="container">
      <div class="screen">
        <div class="screen__content">
          <form class="login">
            <div class="login__field">
              <i class="login__icon fas fa-user"></i>
              <input
                type="text"
                class="login__input"
                placeholder="Enter Username"
              />
            </div>
            <div class="login__field">
              <i class="login__icon fas fa-lock"></i>
              <input
                type="password"
                class="login__input"
                placeholder="Enter Password"
              />
            </div>
            <button class="button login__submit">
              <span class="button__text">Sign In</span>
              <i class="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
          <div class="social-login">
            <h5>If you don't have account?</h5>
            <div class="social-icons">
              <a
                href="/register"
                class="social-login__icon fa fa-long-arrow-alt-right"
              ></a>
              {/* <a href="#" class="social-login__icon fab fa-instagram"></a>
              <a href="#" class="social-login__icon fab fa-facebook"></a>
              <a href="#" class="social-login__icon fab fa-twitter"></a> */}
            </div>
          </div>
        </div>
        <div class="screen__background">
          <span class="screen__background__shape screen__background__shape_4"></span>
          <span class="screen__background__shape screen__background__shape_3"></span>
          <span class="screen__background__shape screen__background__shape_2"></span>
          <span class="screen__background__shape screen__background__shape_1"></span>
        </div>
      </div>
    </div>
  );
};

export default Login;
