import React from "react";
import { useState } from "react";
import useAuth from "../useAuth";
import email from "../assets/email.png";
import password from "../assets/password.png";
import { Link } from "react-router-dom";
import "./Login.css";
import {account} from "../Config";

const Login = () => {
  const [user, setUser] = useState({});
  const { signup } = useAuth();

  function googleSignUp(e) {
    e.preventDefault();

    account.createOAuth2Session(
      "google",
      "http://localhost:3000/dashboard",
      "http://localhost:3000/login"
    );
  }

  function googleLogin(e) {
    e.preventDefault();

    account.createOAuth2Session(
      "google",
      "http://localhost:3000/dashboard",
      "http://localhost:3000/login"
    );
  }

  return (
    <>
      <div className="login-mainContainer">
        <div className="login-container">
          <form className="login-form">
            <p id="login-heading">Login</p>
            {/* <div className="login-field">
              <label>
                <img src={email} alt="" />
              </label>
              <input
                autoComplete="off"
                placeholder="Email"
                className="input-field"
                type="text"
              />
            </div>
            <div className="login-field">
              <label>
                <img src={password} alt="" />
              </label>
              <input
                placeholder="Password"
                className="input-field"
                type="password"
              />
            </div>
            <button type="submit" className="login-btn">
              Login
            </button> */}
            <button className="google-btn" onClick={(e) => googleLogin(e)}>
              <img
                src="https://img.icons8.com/color/16/000000/google-logo.png"
                alt=""
              />
              <p>Login with Google</p>
            </button>
            <p className="login-signup">Don't have an account?</p>
            <button className="google-btn" onClick={(e) => googleSignUp(e)}>
              <img
                src="https://img.icons8.com/color/16/000000/google-logo.png"
                alt=""
              />
              <p>Sign up with Google</p>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
