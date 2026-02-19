import React from 'react';
import './Input.css';

function Input({
  label,
  id,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  required = false,
  disabled = false,
  min,
  max,
  prefix,
  suffix,
  helper,
  error,
  className = '',
}) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className={`input-group ${error ? 'input-group--error' : ''} ${className}`}>
      {label && (
        <label htmlFor={inputId} className="input-group__label">
          {label}
          {required && <span className="input-group__required">*</span>}
        </label>
      )}

      <div className={`input-group__wrapper ${prefix ? 'has-prefix' : ''} ${suffix ? 'has-suffix' : ''}`}>
        {prefix && <span className="input-group__prefix">{prefix}</span>}

        <input
          id={inputId}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          min={min}
          max={max}
          className="input-group__field"
        />

        {suffix && <span className="input-group__suffix">{suffix}</span>}
      </div>

      {helper && !error && (
        <p className="input-group__helper">{helper}</p>
      )}
      {error && (
        <p className="input-group__error-msg">{error}</p>
      )}
    </div>
  );
}

export default Input;