import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Signup = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleError = (error) => {
    setErrorMessage(error);
  };
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5500/signup", values)
      .then((res) => {
        if (res.data === "Success") {
          navigate("/login");
        }
        else if (res.data === "Error") {
          handleError("Server Errors");
        }
        else if (res.data === "exists") {
          handleError("User Exists");
        }})
      .catch((err) => console.log(err));
  };
  return (
    <div>
 <Header />
      <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
        <div className="bg-white p-3 rounded">
          <h2>Sign Up:</h2>
          <form action="" method="" autoComplete="off" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name">
                <strong>Name</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                onChange={handleInput}
                name="name"
                className="form-control rounded-0 "
                required
              />
            </div>
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
              />
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-0">
              <strong>Sign Up</strong>
            </button>
            <div className="alert alert-warning mb-3" > {errorMessage}</div>
            <p>You agree to Terms and Conditions</p>
            <Link
              to="/login"
              className="btn btn-default border rounded-0 bg-light w-100"
            >
              <strong>Login</strong>
            </Link>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
