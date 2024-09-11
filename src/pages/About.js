import React from 'react';

const About = () => {
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px'
  };

  const headerStyle = {
    textAlign: 'center',
    padding: '20px'
  };

  const headerTitleStyle = {
    fontSize: '2.5em',
    margin: '0'
  };

  const headerSubtitleStyle = {
    fontSize: '1.2em',
    color: '#666'
  };

  const contentStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: '20px',
    background: `url('data:image/jpeg;base64,[REPLACE_WITH_BASE64_IMAGE]') no-repeat center center/cover`,
    color: '#fff',
    borderRadius: '8px'
  };

  const bioStyle = {
    flex: '1',
    padding: '20px'
  };

  const bioTitleStyle = {
    fontSize: '2em',
    marginBottom: '10px'
  };

  const bioTextStyle = {
    fontSize: '1.1em',
    lineHeight: '1.6'
  };

  const contactInfoStyle = {
    marginTop: '20px',
    fontSize: '1.1em'
  };

  const contactLinkStyle = {
    color: '#1e90ff',
    textDecoration: 'none'
  };

  const contactLinkHoverStyle = {
    textDecoration: 'underline'
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1 style={headerTitleStyle}>About Me</h1>
        <p style={headerSubtitleStyle}>Welcome to my portfolio page. Here you can learn more about me and my work.</p>
      </header>
      <section style={contentStyle}>
        <div style={bioStyle}>
          <h2 style={bioTitleStyle}>Biography</h2>
          <p style={bioTextStyle}>
            Hello! I am a passionate developer with a love for creating dynamic and efficient applications. With a background in full-stack development, I enjoy working on both front-end and back-end technologies to build seamless and engaging user experiences. In addition to my technical skills, I am also a semi-pro basketball player and a coach, which helps me to maintain discipline and a strategic mindset in both my personal and professional life.
          </p>
        </div>
        <div style={contactInfoStyle}>
          <h2 style={bioTitleStyle}>Contact Information</h2>
          <p>
            Feel free to reach out to me via email at <a href="mailto:makakait123@gmail.com" style={contactLinkStyle}>makakait123@gmail.com</a> or follow me on <a href="https://github.com/DennisMakaka" target="_blank" rel="noopener noreferrer" style={contactLinkStyle}>GitHub</a>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;

