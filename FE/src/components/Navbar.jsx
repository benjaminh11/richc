import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Concordare Claims</h1>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
