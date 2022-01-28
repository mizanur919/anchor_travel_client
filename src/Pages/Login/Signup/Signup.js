import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Signup.css";
import useAuth from "../../../contexts/useAuth";
import { useHistory } from "react-router-dom";

const Signup = () => {
  // Get and set email and password data using useState
  const [loginData, setLoginData] = useState({});

  const { user, registerUser, isLoading } = useAuth();
  const history = useHistory();

  // Login Function
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginInSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Password not matched");
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };

  return (
    <div className="login-container">
      <div className="bg-white login-form rounded col-md-3 p-5">
        <h4 className="font-weight-bold mb-2 text-uppercase">Anchor Travel</h4>
        <h6 className="mt-3 mb-4 fw-bold text-info">Create New Account</h6>
        {!isLoading && (
          <Form onSubmit={handleLoginInSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                name="name"
                onBlur={handleOnBlur}
                placeholder="Your Name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                onBlur={handleOnBlur}
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="password"
                onBlur={handleOnBlur}
                placeholder="Password"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="password2"
                onBlur={handleOnBlur}
                placeholder="Confirm Password"
              />
            </Form.Group>
            <button
              className="login-button btn btn-primary w-100"
              type="submit"
            >
              Sign Up
            </button>
            <br />
            <br />
          </Form>
        )}
        {isLoading && (
          <>
            <button class="btn btn-primary" type="button" disabled>
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              Account is creating...
            </button>
            <br />
            <br />
          </>
        )}
        {user?.email && (
          <div class="alert alert-success" role="alert">
            Account has been created
          </div>
        )}
        <NavLink className="new-account" as={Link} to="/login">
          Already Have Account Login Here
        </NavLink>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Signup;
