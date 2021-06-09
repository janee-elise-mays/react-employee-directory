import React from "react";

function Header() {
  return (
    <div>
      <header>
        <h1>Employee Directory</h1>
        <p>Use the search bar to narrow your results.</p>
        <input type="text" placeholder="Search.." name="search"></input>
      </header>
    </div>
  );
}

export default Header;