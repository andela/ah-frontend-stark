import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header-image">
    <div>
      <h1>Authors Haven</h1>
    </div>

    <div>
      <Link to="/signup"><button className="btn-index" type="button">Get started</button></Link>
    </div>
  </div>
);

export default Header;
