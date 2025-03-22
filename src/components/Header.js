import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="nav-container">
          <li className="logo"><Link to="/">My Blog</Link></li>
          <div className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/myblogs">My Blog</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/create">Create Blog</Link></li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
