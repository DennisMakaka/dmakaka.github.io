

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navbarStyle = {
    backgroundColor: '#333',
    padding: '10px',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const navLinksStyle = {
    listStyle: 'none',
    display: 'flex',
    gap: '15px'
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px'
  };

  return (
    <nav style={navbarStyle}>
      <div>
        <Link to="/" style={linkStyle}>
          <h1>My Portfolio</h1>
        </Link>
      </div>
      <ul style={navLinksStyle}>
        <li>
          <Link to="/" style={linkStyle}>Home</Link>
        </li>
        <li>
          <Link to="/about" style={linkStyle}>About</Link>
        </li>
        <li>
          <Link to="/projects" style={linkStyle}>Projects</Link>
        </li>
        <li>
          <Link to="/blog" style={linkStyle}>Blog</Link>
        </li>
        <li>
          <Link to="/contact" style={linkStyle}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
