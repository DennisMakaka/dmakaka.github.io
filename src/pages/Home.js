import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	  const styles = {
		      body: {
			            margin: 0,
			            fontFamily: "'Lato', sans-serif",
			            background: "url('/assets/background.jpg') no-repeat center center fixed",
			            backgroundSize: "cover",
			            backgroundColor: "#2d2d2d",
			            color: "#f0f0f0",
			            overflowX: "hidden",
			            display: "flex",
			            flexDirection: "column",
			            minHeight: "100vh",
			            position: "relative"
			          },
		      overlay: {
			            content: '""',
			            position: "fixed",
			            top: 0,
			            left: 0,
			            width: "100%",
			            height: "100%",
			            background: "rgba(0, 0, 0, 0.5)",
			            zIndex: -1
			          },
		      header: {
			            backgroundColor: "rgba(30, 42, 56, 0.9)",
			            padding: "20px",
			            borderBottom: "2px solid rgba(27, 38, 51, 0.9)",
			            textAlign: "center",
			            width: "100%",
			            top: 0,
			            zIndex: 10,
			            transition: "background-color 0.3s",
			            position: "fixed"
			          },
		      nav: {
			            listStyleType: "none",
			            display: "flex",
			            justifyContent: "center",
			            padding: 0,
			            margin: 0
			          },
		      navItem: {
			            margin: "0 15px"
			          },
		      navLink: {
			            color: "#f0f0f0",
			            textDecoration: "none",
			            fontSize: "18px",
			            fontWeight: 600,
			            fontFamily: "'Raleway', sans-serif",
			            transition: "color 0.3s"
			          },
		      navLinkHover: {
			            color: "#4a90e2"
			          },
		      homeSection: {
			            display: "flex",
			            flexDirection: "column",
			            justifyContent: "center",
			            alignItems: "center",
			            flex: 1,
			            textAlign: "center",
			            color: "#f0f0f0",
			            padding: "100px 20px",
			            boxSizing: "border-box"
			          },
		      introText: {
			            h1: {
					            fontFamily: "'Raleway', sans-serif",
					            fontSize: "48px",
					            fontWeight: 800,
					            color: "#50c878",
					            marginBottom: "10px",
					            lineHeight: 1.2
					          },
			            p: {
					            fontSize: "22px",
					            fontWeight: 400,
					            color: "#d0d0d0",
					            marginBottom: "30px",
					            lineHeight: 1.5
					          }
			          },
		      ctaButton: {
			            display: "inline-block",
			            margin: "10px 20px",
			            padding: "12px 25px",
			            backgroundColor: "#4a90e2",
			            color: "#ffffff",
			            textDecoration: "none",
			            fontSize: "18px",
			            fontFamily: "'Raleway', sans-serif",
			            fontWeight: 600,
			            borderRadius: "20px",
			            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.4)",
			            transition: "background-color 0.3s, transform 0.3s"
			          },
		      ctaButtonHover: {
			            backgroundColor: "#357abd",
			            transform: "scale(1.05)"
			          },
		      socialLinks: {
			            marginTop: "20px",
			            display: "flex",
			            justifyContent: "center",
			            gap: "15px"
			          },
		      socialIcon: {
			            color: "#f0f0f0",
			            fontSize: "24px",
			            transition: "color 0.3s"
			          }
		    };

	  return (
		      <div style={styles.body}>
		        <header style={styles.header}>
		          <nav>
		            <ul style={styles.nav}>
		              <li style={styles.navItem}><Link to="/" style={styles.navLink}>Home</Link></li>
		              <li style={styles.navItem}><Link to="/about" style={styles.navLink}>About</Link></li>
		              <li style={styles.navItem}><Link to="/projects" style={styles.navLink}>Projects</Link></li>
		              <li style={styles.navItem}><Link to="/contact" style={styles.navLink}>Contact</Link></li>
		            </ul>
		          </nav>
		        </header>

		        <section id="home" style={styles.homeSection}>
		          <div className="intro-text">
		            <h1 style={styles.introText.h1}>Dennis Anyende Makaka</h1>
		            <p style={styles.introText.p}>Full-Stack Developer Portfolio</p>
		            <Link to="/projects" style={styles.ctaButton}>View My Work</Link>
		          </div>

		          <div className="social-links" style={styles.socialLinks}>
		            <a href="https://github.com/DennisMakaka" style={styles.socialIcon}><i className="fab fa-github"></i></a>
		            <a href="https://twitter.com/your_twitter" style={styles.socialIcon}><i className="fab fa-twitter"></i></a>
		            <a href="https://linkedin.com/in/dennismakaka" style={styles.socialIcon}><i className="fab fa-linkedin"></i></a>
		          </div>
		        </section>
		      </div>
		    );
};

export default Home;

