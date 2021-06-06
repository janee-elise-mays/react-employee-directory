import React from "react";

// image, name, phone, email, dob
function Employees(props){
    return (
    <tr>
      <td>{props.name}</td>
      <td>{props.img}</td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
      <td>{props.dob}</td>
    </tr>
    );
}

export default Employees;