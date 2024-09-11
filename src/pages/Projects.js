// src/pages/Projects.js
import React from 'react';

const Projects = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Projects</h1>
      <div style={styles.projectsContainer}>
        <div style={styles.projectCard}>
          <img 
            src="https://your-image-source-url.com/printf.jpg" 
            alt="Printf" 
            style={styles.image}
          />
          <h3 style={styles.projectTitle}>Printf</h3>
          <p style={styles.projectDescription}>
            A custom implementation of the `printf` function in C, showcasing proficiency in handling formatted output.
          </p>
          <a 
            href="https://github.com/DennisMakaka/printf" 
            style={styles.viewMore} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            >>> View More
          </a>
        </div>

        <div style={styles.projectCard}>
          <img 
            src="https://your-image-source-url.com/simple-shell.jpg" 
            alt="Simple Shell" 
            style={styles.image}
          />
          <h3 style={styles.projectTitle}>Simple Shell</h3>
          <p style={styles.projectDescription}>
            A basic Unix shell implemented in C, providing a foundational understanding of process creation and management.
          </p>
          <a 
            href="https://github.com/DennisMakaka/simple-shell" 
            style={styles.viewMore} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            >>> View More
          </a>
        </div>

        <div style={styles.projectCard}>
          <img 
            src="https://your-image-source-url.com/smartspend.jpg" 
            alt="Smartspend Budget Management System" 
            style={styles.image}
          />
          <h3 style={styles.projectTitle}>Smartspend Budget Management System</h3>
          <p style={styles.projectDescription}>
            A comprehensive budgeting system that helps users track and manage their expenses and savings.
          </p>
          <a 
            href="https://github.com/DennisMakaka/Smartspend-Budgeting-System" 
            style={styles.viewMore} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            >>> View More
          </a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  projectsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  projectCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '10px',
    padding: '20px',
    maxWidth: '300px',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    borderRadius: '8px',
  },
  projectTitle: {
    margin: '10px 0',
    fontSize: '1.2em',
  },
  projectDescription: {
    fontSize: '0.9em',
    color: '#555',
  },
  viewMore: {
    display: 'inline-block',
    marginTop: '10px',
    color: '#007BFF',
    textDecoration: 'none',
  },
};

export default Projects;
