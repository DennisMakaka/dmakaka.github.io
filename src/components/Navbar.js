import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  // Styling objects
  const navbarStyle = {
    backgroundColor: '#333',
    padding: '10px',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap' // Flex wrap for responsiveness
  };

  const navLinksStyle = {
    listStyle: 'none',
    display: 'flex',
    gap: '15px',
    margin: 0,
    padding: 0
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px'
  };

  const activeLinkStyle = {
    ...linkStyle,
    borderBottom: '2px solid #fff' // Active link indicator
  };

  const brandStyle = {
    fontSize: '24px',
    fontWeight: 'bold'
  };

  return (
    <nav style={navbarStyle} aria-label="Main Navigation">
      <div>
        <Link to="/" style={linkStyle}>
          <h1 style={brandStyle}>My Portfolio</h1>
        </Link>
      </div>
      <ul style={navLinksStyle}>
        <li>
          <Link
            to="/"
            style={location.pathname === '/' ? activeLinkStyle : linkStyle}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            style={location.pathname === '/about' ? activeLinkStyle : linkStyle}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            style={location.pathname === '/projects' ? activeLinkStyle : linkStyle}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            style={location.pathname === '/blog' ? activeLinkStyle : linkStyle}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            style={location.pathname === '/contact' ? activeLinkStyle : linkStyle}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

