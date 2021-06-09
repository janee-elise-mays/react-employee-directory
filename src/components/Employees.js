import React from "react";

// image, name, phone, email, dob

function Employees(props){
    return (
    <tr>
      <td>
      <img alt={props.firstName} src={props.picture} />
      </td>
      {/* <td>{props.picture}</td> */}
      <td>{props.firstName} {props.lastName}</td>
      <td>{props.email}</td>
      <td>{props.phone}</td>
      <td>{props.dob}</td>
    </tr>
    );
}

export default Employees;