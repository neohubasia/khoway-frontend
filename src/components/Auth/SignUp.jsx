import React from "react";
import { useLocation, Redirect, Link } from "react-router-dom";
import { authUser } from "../../services/AuthUser";
import { signUp } from "../../services/RestAPI";

import "./Auth.css";

const Register = () => {
  const { state } = useLocation();
  const [redirectTo, setRedirectTo] = React.useState(false);
  const [signUpData, setSignUpData] = React.useState({
    fullname: "",
    username: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await signUp(signUpData);
      data.status === "SUCCESS"
        ? authUser.signIn(data.data, () => {
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
              <i className="login__icon far fa-id-badge"></i>
              <input
                type="text"
                name="fullname"
                className="login__input"
                placeholder="Enter Full Name"
                defaultValue={signUpData.fullname}
                onChange={handleOnChange}
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input
                type="text"
                name="username"
                className="login__input"
                placeholder="Enter Username"
                defaultValue={signUpData.username}
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
                defaultValue={signUpData.password}
                onChange={handleOnChange}
              />
            </div>
            <button type="submit" className="button login__submit">
              <span className="button__text">Sign Up</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
          <div className="social-login">
            <span>Already have an account?</span>
            <div className="social-icons">
              <Link to={`/login`} className=" social-login__icon">
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

export default Register;
