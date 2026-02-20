import React from 'react';
import Input from './Input';
import './AcademicDetails.css';

function AcademicDetails({ admissionYear, currentSemester, onAdmissionYearChange, onSemesterChange }) {
  return (
    <div className="academic-details">
      <div className="academic-details__header">
        <span className="academic-details__icon">🎓</span>
        <span className="academic-details__title">Academic Details</span>
      </div>

      <div className="academic-details__grid">
        <Input
          label="Admission Year"
          id="admission-year"
          type="number"
          value={admissionYear}
          onChange={(e) => onAdmissionYearChange(e.target.value)}
          placeholder="e.g. 2022"
          min={2000}
          max={new Date().getFullYear()}
          required
        />

        <Input
          label="Current Semester"
          id="current-semester"
          type="number"
          value={currentSemester}
          onChange={(e) => onSemesterChange(e.target.value)}
          placeholder="1 – 8"
          min={1}
          max={8}
          required
          helper="Enter a value between 1 and 8"
        />
      </div>
    </div>
  );
}

export default AcademicDetails;
