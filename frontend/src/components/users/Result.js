import React from "react";
import "./Results.css";

const Result = (props) => {
    return (
        <React.Fragment>
          
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{props.email}</td> 
                <td>{props.password}</td> 
           
        </React.Fragment>
    );
  };

  export default Result;