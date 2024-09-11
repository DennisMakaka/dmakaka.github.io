import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#333',
    padding: '20px',
    color: '#fff',
    textAlign: 'center',
    position: 'fixed',
    width: '100%',
    bottom: 0
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
  };

  return (
    <footer style={footerStyle}>
      <p>
        © 2024 My Portfolio |{' '}
        <a href="https://github.com/DennisMakaka" style={linkStyle} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </p>
    </footer>
  );
};

export default Footer;


