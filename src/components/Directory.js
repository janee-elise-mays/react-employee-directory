import React, { Component } from "react";
import Employees from "./Employees";
import API from "../utils/API";
import Table from "react-bootstrap/Table";

 class Directory extends Component {
     state = {
         employees: [],
         search: "",
         sort: [],
         sorted: false,
     }
     
    componentDidMount(){
        this.getEmployee();
    }

    getEmployee = () => {
        API.getRandomEmployee()
        .then(res => {
            this.setState({employees: res.data.results})})
    } 


    render = () => {
    return (
     <div>
        {/* <Find name="search" startSort={this.startSort} label="Search" /> */}
         <div className="container-fluid">
              {/* https://react-bootstrap.github.io/components/table/  */}
             <Table striped bordered hover>
                 <thread className="thread">
                     <tr>
                         <th>Image</th>
                         <th>Name</th>
                         <th>Email</th>
                         <th>Phone</th>
                         <th>Date of Birth</th>
                     </tr>
                 <tbody>
                 {this.state.employees.map(employee => (
                     <Employees
                     key ={employee.login.uuid}
                     firstName={employee.name.first}
                     lastName={employee.name.last}
                     phone={employee.phone}
                     email={employee.email}
                     picture={employee.picture.large}
                     dob={employee.dob.date} 
                     />
                 ))}
                 </tbody>
                 </thread>
             </Table>
         </div>
     </div>
    )};
};
export default Directory;