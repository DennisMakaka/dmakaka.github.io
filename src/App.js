import React from 'react';
import AppRoutes from './routes';  // Import the routing component

function App() {
    // Internal styles using JavaScript objects (optional if you need custom layout)
    const appStyle = {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    };

    const mainStyle = {
        flex: 1,
        padding: '20px',
    };

    return (
        <div style={appStyle}>
            {/* Main content rendered by AppRoutes */}
            <main style={mainStyle}>
                <AppRoutes />
            </main>
        </div>
    );
}

export default App;
