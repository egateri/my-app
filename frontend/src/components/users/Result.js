import React from "react";
import "./Results.css";

const Result = (props) => {
    return (
        <React.Fragment>
            <tr>
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{props.email}</td> 
                <td>{props.password}</td> 
            </tr>
        </React.Fragment>
    );
  };

  export default Result;