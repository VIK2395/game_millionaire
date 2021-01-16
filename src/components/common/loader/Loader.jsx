import React from 'react';
import './Loader.css';

const Loader = ({ isActive, children }) => {
  if (isActive) {
    return (
      <div className="loader">
        <p>Loading...</p>
      </div>
    );
  }
  return children;
};

export default Loader;
