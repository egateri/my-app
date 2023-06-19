import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login =() => {
  
  const [errorMessage, setErrorMessage] = useState("");
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleError = (error) => {
    setErrorMessage(error);
  };


  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev, [event.target.name]: [event.target.value],
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5500/login", values)
      .then((res) => {
        if (res.data ==="Success") {
          navigate("/");
          
        } 
        else if(res.data ==="Unsuccess"){

          handleError("Wrong User Name and Password Combination");
        }
        else if(res.data ==="Error"){

          handleError("Server Errors");
        }
        else {
          handleError("Other Errors");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <a className="navbar-brand" href="/">
          Home
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/signup">
                Sign Up
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
        <div className="bg-white p-3 rounded">
          <h2>Login:</h2>
          <form action="" method="" autoComplete="off" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                onChange={handleInput}
                name="email"
                className="form-control rounded-0 "
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter password"
                onChange={handleInput}
                name="password"
                className="form-control rounded-0 "
                required
              />
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-0">
              <strong>Login</strong>
            </button>
            <div className="alert alert-warning mb-3" > {errorMessage}</div>
            <p>You agree to Terms and Conditions</p>
            <Link
              to="/signup"
              className="btn btn-default border rounded-0 bg-light w-100 text-decoration-none"
            >
              <strong>Create Account</strong>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
