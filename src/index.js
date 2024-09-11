import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // If you have global styles
import AppRoutes from './routes';  // Import the routing component

// Rendering the AppRoutes component into the DOM
ReactDOM.render(
    <React.StrictMode>
        <AppRoutes />
    </React.StrictMode>,
    document.getElementById('root')
);
