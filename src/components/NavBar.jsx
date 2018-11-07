import React from 'react';

const NavBar = () => (
  <div className="row p-3 bg-light rounded">
    <span className="col-9 head-text">Authors Haven</span>
    <span className="row-2">
      <input
        className="searchbar"
        type="text"
        placeholder="Search..."
      />
      <button className="btn-index" type="button">Login</button>
    </span>
  </div>
);

export default NavBar;
