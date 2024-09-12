import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// A 404 Page Component
const NotFound = () => {
    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
        </div>
    );
};

const AppRoutes = () => {
    return (
        <Router>
            {/* Navbar will appear on all pages */}
            <Navbar />
            
            {/* Main Page Content */}
            <>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/projects" element={<Projects />} />
                    
                    {/* Catch-all route for undefined paths */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </>
            
            {/* Footer will appear on all pages */}
            <Footer />
        </Router>
    );
};

export default AppRoutes;
