import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Product</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Solutions</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Resources</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Quote Request</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">News</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
