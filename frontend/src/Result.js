import "./Results.css";
const Result = (props) => {
    return (
            <tr>
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{props.email}</td> 
                <td>{props.password}</td> 
            </tr>
    );
  };

  export default Result;