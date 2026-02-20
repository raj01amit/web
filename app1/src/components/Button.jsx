import React from 'react';
import './Button.css';

function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  className = '',
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn btn--${variant} btn--${size} ${fullWidth ? 'btn--full' : ''} ${className}`}
    >
      <span className="btn__content">{children}</span>
      {variant === 'primary' && <span className="btn__shine" />}
    </button>
  );
}

export default Button;
