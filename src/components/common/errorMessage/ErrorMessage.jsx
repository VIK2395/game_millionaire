import React from 'react';
import './ErrorMessage.css';

const ErrorMessage = ({ error }) => (
  <div className="error-message">
    <p>{error.message}</p>
  </div>
);

export default ErrorMessage;
