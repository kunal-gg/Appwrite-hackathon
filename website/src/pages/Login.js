import React from "react";
import email from "../assets/email.png";
import password from "../assets/password.png";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="login-mainContainer">
        <div className="login-container">
          <form className="login-form">
            <p id="login-heading">Login</p>
            <div className="login-field">
              <label>
                <img src={email} alt="" />
              </label>
              <input
                autocomplete="off"
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
            </button>
            <p className="login-signup">Don't have an account?</p>
              <button className="google-btn">
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
