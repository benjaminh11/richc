import React from 'react';
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
   

return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Concordare Claims</h1>
      </div>
      <ul className="navbar-links">
      <Link to="/">Home</Link>
      <Link to="/ContactPage">Contact</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
