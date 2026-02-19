import React from 'react';
import './FeeTypes.css';

const FEE_OPTIONS = [
  { id: 'hostel',       label: 'Hostel',       icon: '🏠', description: 'Accommodation charges' },
  { id: 'mess',         label: 'Mess',         icon: '🍽️', description: 'Dining facility fee' },
  { id: 'admission',    label: 'Admission',    icon: '📋', description: 'One-time admission fee' },
  { id: 'registration', label: 'Registration', icon: '📝', description: 'Semester registration' },
  { id: 'exam',         label: 'Exam',         icon: '📄', description: 'Examination charges' },
  { id: 'fine',         label: 'Fine',         icon: '⚠️', description: 'Penalty / late charges' },
];

function FeeTypes({ selectedFees, onChange }) {
  const handleToggle = (feeId) => {
    if (selectedFees.includes(feeId)) {
      onChange(selectedFees.filter((f) => f !== feeId));
    } else {
      onChange([...selectedFees, feeId]);
    }
  };

  return (
    <div className="fee-types">
      <div className="fee-types__header">
        <span className="fee-types__title">Fee Type</span>
        {selectedFees.length > 0 && (
          <span className="fee-types__count">{selectedFees.length} selected</span>
        )}
      </div>

      <div className="fee-types__grid">
        {FEE_OPTIONS.map((fee) => {
          const isSelected = selectedFees.includes(fee.id);
          return (
            <label
              key={fee.id}
              className={`fee-chip ${isSelected ? 'fee-chip--selected' : ''}`}
            >
              <input
                type="checkbox"
                className="fee-chip__input"
                checked={isSelected}
                onChange={() => handleToggle(fee.id)}
              />
              <span className="fee-chip__icon">{fee.icon}</span>
              <span className="fee-chip__body">
                <span className="fee-chip__label">{fee.label}</span>
                <span className="fee-chip__desc">{fee.description}</span>
              </span>
              <span className="fee-chip__check">
                {isSelected ? '✓' : ''}
              </span>
            </label>
          );
        })}
      </div>

      {selectedFees.length === 0 && (
        <p className="fee-types__hint">Select at least one fee type to proceed</p>
      )}
    </div>
  );
}

export default FeeTypes;