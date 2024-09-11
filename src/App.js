import React from 'react';
import Navbar from './components/Navbar';  // Importing the Navbar component
import Footer from './components/Footer';  // Importing the Footer component
import AppRoutes from './routes';  // Import the routing component

function App() {
    // Internal styles using JavaScript objects
    const appStyle = {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    };

    const mainStyle = {
        flex: 1,
        padding: '20px',
    };

    const footerStyle = {
        backgroundColor: '#f8f9fa',
        padding: '10px',
        textAlign: 'center',
    };

    return (
        <div style={appStyle}>
            <Navbar />  {/* Navbar at the top */}
            <main style={mainStyle}>
                <AppRoutes />  {/* Routes render the main content here */}
            </main>
            <footer style={footerStyle}>
                <Footer />  {/* Footer at the bottom */}
            </footer>
        </div>
    );
}

export default App;

