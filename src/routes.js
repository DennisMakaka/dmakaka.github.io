import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const AppRoutes = () => {
    return (
        <Router>
            {/* Navbar will appear on all pages */}
            <Navbar />
            
            {/* Routes for different pages */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
            
            {/* Footer will appear on all pages */}
            <Footer />
        </Router>
    );
};

export default AppRoutes;


