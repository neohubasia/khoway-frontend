import React from "react";
import { useLocation, Redirect, Link } from "react-router-dom";
import { authUser } from "../../services/AuthUser";
import { signIn } from "../../services/RestAPI";

import "./Auth.css";

const Login = () => {
  const { state } = useLocation();
  const [redirectTo, setRedirectTo] = React.useState(false);
  const [signInData, setSignInData] = React.useState({
    username: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setSignInData({
      ...signInData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await signIn(signInData);
      data.status === "SUCCESS"
        ? authUser.authenticate(() => {
            setRedirectTo(true);
          })
        : setRedirectTo(false);
    } catch (error) {
      console.log("Error found: ", error);
    }
  };

  if (redirectTo === true) {
    return <Redirect to={state?.from || "/"} />;
  }

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form className="login" onSubmit={handleOnSubmit}>
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input
                type="text"
                name="username"
                className="login__input"
                placeholder="Enter Username"
                defaultValue={signInData.username}
                onChange={handleOnChange}
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input
                type="password"
                name="password"
                className="login__input"
                placeholder="Enter Password"
                defaultValue={signInData.password}
                onChange={handleOnChange}
              />
            </div>
            <button className="button login__submit">
              <span className="button__text">Sign In</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
          <div className="social-login">
            <span>If you don't have account?</span>
            <div className="social-icons">
              <Link to={`/register`} className=" social-login__icon">
                <i className="fa fa-long-arrow-alt-right"></i>
              </Link>
              {/* <a href="#" className="social-login__icon fab fa-instagram"></a>
              <a href="#" className="social-login__icon fab fa-facebook"></a>
              <a href="#" className="social-login__icon fab fa-twitter"></a> */}
            </div>
          </div>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape_4"></span>
          <span className="screen__background__shape screen__background__shape_3"></span>
          <span className="screen__background__shape screen__background__shape_2"></span>
          <span className="screen__background__shape screen__background__shape_1"></span>
        </div>
      </div>
    </div>
  );
};

export default Login;
