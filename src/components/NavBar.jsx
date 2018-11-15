import React from "react";
import { Link } from 'react-router-dom';

const loggedIn = Object.keys(localStorage).length;
let username = localStorage.getItem('username');
let profileUrl = "/profile/" + username;
const NavBar = () => (
  <div className="row p-3 bg-light rounded">
    <span className="col-9 head-text">Authors Haven</span>
    <span className="row-2">
      <input className="searchbar" type="text" placeholder="Search..." />

      {loggedIn ? (
        <Link to={profileUrl}>
        <button
          className="btn-index"
          type="button"
        >
          Profile
        </button>
        </Link>
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
