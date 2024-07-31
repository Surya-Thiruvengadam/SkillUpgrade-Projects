import React from 'react';
import './NotFound.css'; 

const NotFound = () => { 
  return (
    <div className="not-found">
      <div className="not-found-container">
        <h1 className="error-code">404</h1>
        <p className="error-message-404">Page Not Found</p>
        <a href="/" className="home-link">Go to Homepage</a>
      </div>
    </div>
  );
};

export default NotFound;
