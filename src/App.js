import React from "react";
import Header from "./components/Header";
import Employees from "./components/Employees";

function App() {
    return (
        <div>
            <Header />
            <Employees />
        </div>
    );
}

export default App;

// ReactDOM.render(<App />, document.getElementById("root"));