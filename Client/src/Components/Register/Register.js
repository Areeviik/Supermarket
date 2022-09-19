import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { useNavigate } from "react-router-dom";

import background from "../../assets/images/i.jpg";
import img from "../../assets/images/user.png";

import AuthService from "../../services/auth.service";

import "./Register.style.css";

const required = (value) => {
  if (!value) {
    return <div className="invalidR">This field is required!</div>;
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return <div className="invalidR">This is not a valid email.</div>;
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="invalidR">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="invalidR">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const Register = (props) => {
  const form = useRef();
  const checkBtn = useRef();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(username, email, password).then(
        (data) => {
          setMessage(data.message);
          setSuccessful(true);
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

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };

  return (
    <div className="head">
      <div className="mainR">
        <p className="sign" align="center">
          Sign Up
        </p>
        <img src={img} alt="Profile Img" className="profileImg" />

        <Form className="Form" onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
              <div className="form">
                <label htmlFor="username" className="label">
                  Username
                </label>
                <Input
                  type="text"
                  className="inputR"
                  name="username"
                  value={username}
                  onChange={onChangeUsername}
                  validations={[required, vusername]}
                />
              </div>

              <div className="form">
                <label htmlFor="email" className="label">
                  Email
                </label>
                <Input
                  type="text"
                  className="inputR"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}
                />
              </div>

              <div className="form">
                <label htmlFor="password" className="label">
                  Password
                </label>
                <Input
                  type="password"
                  className="inputR"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required, vpassword]}
                />
              </div>

              <div className="form">
                <button className="submitR">Sign Up</button>
              </div>
            </div>
          )}

          {message && (
            <div className="form">
              <div className={successful ? "success" : "danger"} role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
      <img src={background} alt="background" className="backgroundR" />
    </div>
  );
};

export default Register;
