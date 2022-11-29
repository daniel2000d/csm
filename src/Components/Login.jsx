import "../styles/Login.css";
import profile from "../img/a.png";
import email from "../img/email.jpg";
import pass from "../img/pass.png";
import React from "react";

function Login() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1>Login Page</h1>
            <div>
              <img src={email} alt="email" className="email" />
              <input type="text" placeholder="user name" className="name" />
            </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="email" />
              <input type="password" placeholder="password" className="name" />
            </div>
            <div className="login-button" type="submit">
              <button>Login</button>
            </div>

            <p className="link">
              <a href=" ">Forgot password ?</a> Or<a href=" "> Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
