import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Concordare Claims</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Services">Services</Link>
        </li>
        <li>
          <Link to="/ContactPage">Contact</Link>
        </li>
        <li>
          <Link to="/Testimonials">Testimonials</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
