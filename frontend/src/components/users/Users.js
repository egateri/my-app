import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Users = () => {
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState("");

  const handleResult = (result) => {
    setResults(result);
  };

  const handleMessage =(message) =>{
    setMessage(message);
  }

  const getResults = () => {
    axios
      .post("http://localhost:5500/users")
      .then((res) => {

        if(res.data ==="Error"){

          handleMessage("Errors connecting with database");
        }
        else if(res.data ==="No Users"){
          handleMessage("No Users");

        }
        else{console.log(res.data);
          handleResult(res.data);}
        
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Header/>
      <button onClick={getResults}>Results:</button>
      <h1>{message}</h1>
      <div>
        <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            </tr>
            </thead>
          <tbody>
            
          {results.map((result) => {
            return (
              <tr>
              <Result
                id={result.id}
                name={result.name}
                email={result.email}
                password={result.password}
              />
              </tr>
            );
          })}
         
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Users;
