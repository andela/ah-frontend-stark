import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationPages from './NavigationPages';

const username = localStorage.getItem('username');
const loggedIn = Object.keys(localStorage).length;


const NavigationBar = () => (
  <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand brown" to="/homepage">
        Author's Haven
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <NavigationPages />
      </ul>

      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-1 searchbar"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-brown" type="submit">
            Search
        </button>
      </form>
      <ul className="navbar-nav">
        {loggedIn ? (
          <div className="navbar">
            <li className="nav-item">
              <Link
                className="nav-link dropdown-toggle"
                to="./"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="caret">{username}</span>
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to={'/profile/' + username}>
                    Profile
                </Link>
                <div className="dropdown-divider" />
                <Link class="dropdown-item" to="/createArticle">
                    Write article
                </Link>
                <Link className="dropdown-item" to="/myArticles">
                    My articles
                </Link>
                <div className="dropdown-divider" />
                <Link class="dropdown-item" to="#">
                    Log out
                </Link>
              </div>
            </li>
          </div>
        ) : (
          <button
            className="btn btn-outline-brown margin-4"
            type="button"
            data-toggle="modal"
            data-target="#authModal"
          >
              Login
          </button>
        )}
      </ul>
    </div>
  </nav>
);

export default NavigationBar;
