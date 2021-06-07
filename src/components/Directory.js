import React, { Component } from "react";
// import Employees from "./Employees";
import Find from "./Find";
import API from "../utils/API";

class Directory extends Component {
    state = {
        employees: [],
        search: "",
        sort: [],
        sorted: false,
    }

componentDidMount = () => {
    API.getRandomEmployees().then((res) => {
        this.setState({
            employees: res.data.results,
        });
    });
};

render = () => {
    return (
        <div>
            <Find name="search" startSort={this.startSort} label="Search" />
            <div className="container-fluid">
                {/* https://react-bootstrap.github.io/components/table/ */}
                <table striped bordered hover>
                    <thread className="thread">
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Date of Birth</th>
                        </tr>
                    </thread>
                </table>
            </div>
        </div>
    );
}
};


export default Directory;