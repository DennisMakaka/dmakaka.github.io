import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn, faTwitter, faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const styles = {
    body: {
      margin: 0,
      fontFamily: "'Poppins', sans-serif",
      background: "url('https://cdn.pixabay.com/photo/2016/11/29/05/08/architecture-1867232_1280.jpg') no-repeat center center fixed",
      backgroundSize: 'cover',
      backgroundColor: '#2d2d2d',
      color: '#f0f0f0',
      position: 'relative',
      overflowX: 'hidden',
    },
    bodyBefore: {
      content: "''",
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.6)',
      zIndex: -1,
    },
    header: {
      backgroundColor: 'rgba(30, 42, 56, 0.9)',
      padding: '20px',
      borderBottom: '2px solid rgba(27, 38, 51, 0.9)',
      textAlign: 'center',
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 10,
      transition: 'background-color 0.3s',
    },
    nav: {
      ul: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'center',
        padding: 0,
        margin: 0,
      },
      li: {
        margin: '0 15px',
      },
      a: {
        color: '#f0f0f0',
        textDecoration: 'none',
        fontSize: '18px',
        fontWeight: 600,
        fontFamily: "'Poppins', sans-serif",
        transition: 'color 0.3s',
      },
      aHover: {
        color: '#4a90e2',
      },
    },
    contactContainer: {
      padding: '100px 20px',
      maxWidth: '800px',
      margin: 'auto',
      textAlign: 'center',
      lineHeight: 1.6,
    },
    contactContent: {
      backgroundColor: 'rgba(44, 56, 70, 0.9)',
      padding: '40px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      marginTop: '60px',
    },
    h1: {
      fontFamily: "'Raleway', sans-serif",
      fontSize: '36px',
      fontWeight: 800,
      color: '#50c878',
      marginBottom: '20px',
    },
    p: {
      fontSize: '18px',
      fontWeight: 400,
      color: '#d0d0d0',
      marginBottom: '20px',
    },
    a: {
      fontSize: '18px',
      fontWeight: 400,
      color: '#d0d0d0',
      marginBottom: '20px',
      textDecoration: 'none',
      transition: 'color 0.3s',
    },
    socialLinks: {
      marginTop: '20px',
      display: 'flex',
      justifyContent: 'center',
    },
    socialLink: {
      color: '#f0f0f0',
      fontSize: '32px',
      margin: '0 15px',
      textDecoration: 'none',
      transition: 'color 0.3s',
    },
    socialLinkHover: {
      color: '#50c878',
    },
    footer: {
      backgroundColor: 'rgba(30, 42, 56, 0.9)',
      textAlign: 'center',
      padding: '10px',
      color: '#f0f0f0',
      borderTop: '2px solid rgba(27, 38, 51, 0.9)',
      position: 'relative',
      bottom: 0,
      width: '100%',
      marginTop: '40px',
    },
  };

  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <nav>
          <ul style={styles.nav.ul}>
            <li style={styles.nav.li}><a style={styles.nav.a} href="/">Home</a></li>
            <li style={styles.nav.li}><a style={styles.nav.a} href="/about">About Me</a></li>
            <li style={styles.nav.li}><a style={styles.nav.a} href="/projects">Projects</a></li>
            <li style={styles.nav.li}><a style={styles.nav.a} href="/skills">Skills</a></li>
            <li style={styles.nav.li}><a style={styles.nav.a} href="/contact">Contact</a></li>
            <li style={styles.nav.li}><a style={styles.nav.a} href="#blog">Blog</a></li>
          </ul>
        </nav>
      </header>

      <section style={styles.contactContainer}>
        <div style={styles.contactContent}>
          <h1 style={styles.h1}>Contact Me</h1>
          <p style={styles.p}><FontAwesomeIcon icon={faMapMarkerAlt} /> Location: Nairobi, Kenya</p>
          <p style={styles.p}><FontAwesomeIcon icon={faPhoneAlt} /> Phone: <a href="tel:+254799066347" style={styles.a}>+254799066347</a></p>
          <p style={styles.p}><FontAwesomeIcon icon={faEnvelope} /> Email: <a href="mailto:makakait123@gmail.com" style={styles.a}>makakait123@gmail.com</a></p>
          <p style={styles.p}><FontAwesomeIcon icon={faEnvelope} /> Email: <a href="mailto:dennismakaka@outlook.com" style={styles.a}>dennismakaka@outlook.com</a></p>
          
          <div style={styles.socialLinks}>
            <a href="https://github.com/DennisMakaka" target="_blank" rel="noopener noreferrer" title="GitHub" style={styles.socialLink}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/dennis-anyende-makaka" target="_blank" rel="noopener noreferrer" title="LinkedIn" style={styles.socialLink}>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://twitter.com/dennis_makaka" target="_blank" rel="noopener noreferrer" title="Twitter" style={styles.socialLink}>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.facebook.com/dennis.makaka" target="_blank" rel="noopener noreferrer" title="Facebook" style={styles.socialLink}>
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://www.instagram.com/dennis.makaka" target="_blank" rel="noopener noreferrer" title="Instagram" style={styles.socialLink}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        <p>© 2024 Dennis Anyende Makaka. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
