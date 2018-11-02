import React from "react";


const loggedIn = Object.keys(localStorage).length;
const NavBar = () => (
  <div className="row p-3 bg-light rounded">
    <span className="col-9 head-text">Authors Haven</span>
    <span className="row-2">
      <input className="searchbar" type="text" placeholder="Search..." />

      {loggedIn ? (
        <button
          className="btn-index"
          type="button"
        >
          Profile
        </button>
      ) : (
        <button
          className="btn-index"
          type="button"
          data-toggle="modal"
          data-target="#authModal"
        >
          Login
        </button>
      )}
    </span>
  </div>
);

export default NavBar;
