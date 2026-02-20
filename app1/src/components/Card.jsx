import React from 'react';
import './Card.css';

function Card({ children, className = '', variant = 'default', hoverable = false }) {
  return (
    <div
      className={`card card--${variant} ${hoverable ? 'card--hoverable' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
