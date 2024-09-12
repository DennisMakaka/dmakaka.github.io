import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Global styles (optional)
import App from './App';  // Import the main App component

// Rendering the App component into the DOM
ReactDOM.render(
    <React.StrictMode>
        <App />  {/* Render the main App component which includes AppRoutes */}
    </React.StrictMode>,
    document.getElementById('root')  // Ensure this matches your index.html's root div ID
);
