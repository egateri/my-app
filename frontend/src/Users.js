import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import Header from "./Header";

const Users = () => {
  const [results, setResults] = useState([]);

  const handleResult = (result) => {
    setResults(result);
  };

  const getResults = () => {
    axios
      .post("http://localhost:5500/users")
      .then((res) => {
        console.log(res.data);
        handleResult(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Header />
      <button onClick={getResults}>Results:</button>
      <div>
        <table>
          <tr>
            <th>ID</th>
            <td>Name</td>
            <td>Email</td>
            <td>Password</td>
          </tr>

          {results.map((result) => {
            return (
              <Result
                id={result.id}
                name={result.name}
                email={result.email}
                password={result.password}
              />
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Users;
