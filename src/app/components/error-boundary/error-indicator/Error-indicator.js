import React from 'react';
import './Error-indicator.scss';

const ErrorIndicator = () => (
  <div className="error-indicator">
    <img src="/public/images/death-star.png" alt="error icon" width="512" height="512" />
    <span className="boom">BOOM!</span>
    <span>something has gone terribly wrong</span>
    <span>(but we already sent droids to fix it)</span>
  </div>
);

export default ErrorIndicator;
