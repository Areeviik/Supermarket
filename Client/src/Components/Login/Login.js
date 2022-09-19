import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import img from "../../assets/images/user.png";
import background from "../../assets/images/e.jpg";

import "./Login.style.css";

import AuthService from "../../services/auth.service";

const required = (value) => {
  if (!value) {
    return <div className="invalid">This field is required!</div>;
  }
};

const Login = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(username, password).then(
        () => {
          navigate("/me");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="head">
      <div className="main">
        <p className="sign" align="center">
          Sign In
        </p>
        <img src={img} alt="Profile Img" className="profileImg" />

        <Form className="Form" onSubmit={handleLogin} ref={form}>
          <div className="form">
            <label htmlFor="username" className="username">
              Username
            </label>
            <Input
              type="text"
              className="un"
              name="username"
              value={username}
              onChange={onChangeUsername}
              validations={[required]}
            />
          </div>

          <div className="form">
            <label htmlFor="password" className="password">
              Password
            </label>
            <Input
              type="password"
              className="pass"
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />
          </div>
        
          <div className="form">
            <button className="submitL" disabled={loading}>
              {loading && <span className="spinner"></span>}
              <span>Login</span>
            </button>
          </div>

          {message && (
            <div className="form">
              <div className="alert" role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
      <img src={background} alt="background" className="background" />
    </div>
  );
};

export default Login;
