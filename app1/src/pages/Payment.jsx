import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';
import FeeTypes from '../components/FeeTypes';
import AcademicDetails from '../components/AcademicDetails';
import './Payment.css';

function Payment() {
  // ---- Controlled State ----
  const [selectedFees, setSelectedFees] = useState([]);
  const [admissionYear, setAdmissionYear] = useState('');
  const [currentSemester, setCurrentSemester] = useState('');
  const [regNumber, setRegNumber] = useState('');
  const [amount, setAmount] = useState('');

  // ---- Success State ----
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // ---- Validation ----
  const validate = () => {
    const newErrors = {};
    if (selectedFees.length === 0) newErrors.fees = 'Please select at least one fee type.';
    if (!admissionYear) newErrors.admissionYear = 'Admission year is required.';
    if (!currentSemester) newErrors.semester = 'Current semester is required.';
    if (!regNumber.trim()) newErrors.regNumber = 'Registration number is required.';
    if (!amount || isNaN(amount) || Number(amount) <= 0)
      newErrors.amount = 'Please enter a valid amount.';
    return newErrors;
  };

  // ---- Submit ----
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  // ---- Reset ----
  const handleReset = () => {
    setSelectedFees([]);
    setAdmissionYear('');
    setCurrentSemester('');
    setRegNumber('');
    setAmount('');
    setErrors({});
    setSubmitted(false);
  };

  // ---- Success Screen ----
  if (submitted) {
    return (
      <main className="page-wrapper payment-page">
        <div className="payment__inner">
          <Card variant="default" className="payment__success-card animate-fade-up">
            <div className="card__body payment__success-body">
              <div className="success__icon">✅</div>
              <h2 className="success__title">Payment Initiated!</h2>
              <p className="success__message">
                Your payment request for <strong>₹{Number(amount).toLocaleString('en-IN')}</strong> has
                been received successfully.
              </p>

              <div className="success__details">
                <div className="success__detail-row">
                  <span>Registration No.</span>
                  <strong>{regNumber}</strong>
                </div>
                <div className="success__detail-row">
                  <span>Fee Types</span>
                  <strong>{selectedFees.map(f => f.charAt(0).toUpperCase() + f.slice(1)).join(', ')}</strong>
                </div>
                <div className="success__detail-row">
                  <span>Admission Year</span>
                  <strong>{admissionYear}</strong>
                </div>
                <div className="success__detail-row">
                  <span>Semester</span>
                  <strong>{currentSemester}</strong>
                </div>
                <div className="success__detail-row success__detail-row--total">
                  <span>Amount</span>
                  <strong>₹{Number(amount).toLocaleString('en-IN')}</strong>
                </div>
              </div>

              <Button variant="secondary" onClick={handleReset} fullWidth>
                ← Make Another Payment
              </Button>
            </div>
          </Card>
        </div>
      </main>
    );
  }

  // ---- Payment Form ----
  return (
    <main className="page-wrapper payment-page">

      {/* Page Header */}
      <div className="payment__header">
        <div className="payment__header-inner">
          <span className="section-eyebrow">Online Fee Portal</span>
          <h1 className="section-heading" style={{ color: 'var(--cream)' }}>Fee Payment</h1>
          <p style={{ color: 'rgba(247,243,235,0.6)', fontSize: '15px', marginTop: 8 }}>
            Complete your fee payment securely and instantly.
          </p>
        </div>
      </div>

      <div className="payment__inner">
        <Card variant="default" className="payment__card animate-fade-up">
          <div className="card__body payment__form-body">

            {/* Step indicator */}
            <div className="payment__steps">
              <div className="payment__step payment__step--active">
                <span className="step__num">1</span>
                <span className="step__label">Select Fees</span>
              </div>
              <div className="step__line" />
              <div className="payment__step payment__step--active">
                <span className="step__num">2</span>
                <span className="step__label">Your Details</span>
              </div>
              <div className="step__line" />
              <div className="payment__step">
                <span className="step__num">3</span>
                <span className="step__label">Confirm & Pay</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} noValidate>

              {/* ---- Section 1: Fee Types ---- */}
              <div className="payment__section">
                <FeeTypes selectedFees={selectedFees} onChange={setSelectedFees} />
                {errors.fees && <p className="payment__field-error">{errors.fees}</p>}
              </div>

              <div className="payment__divider" />

              {/* ---- Section 2: Academic Details ---- */}
              <div className="payment__section">
                <AcademicDetails
                  admissionYear={admissionYear}
                  currentSemester={currentSemester}
                  onAdmissionYearChange={setAdmissionYear}
                  onSemesterChange={setCurrentSemester}
                />
                {(errors.admissionYear || errors.semester) && (
                  <p className="payment__field-error">{errors.admissionYear || errors.semester}</p>
                )}
              </div>

              <div className="payment__divider" />

              {/* ---- Section 3: Registration & Amount ---- */}
              <div className="payment__section">
                <div className="payment__section-title">
                  <span>🪪</span> Payment Details
                </div>
                <div className="payment__two-col">
                  <div>
                    <Input
                      label="Registration Number"
                      id="reg-number"
                      type="text"
                      value={regNumber}
                      onChange={(e) => setRegNumber(e.target.value)}
                      placeholder="e.g. GWC2022CS001"
                      required
                      error={errors.regNumber}
                    />
                  </div>
                  <div>
                    <Input
                      label="Amount to Pay (₹)"
                      id="amount"
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="e.g. 25000"
                      prefix="₹"
                      required
                      min={1}
                      error={errors.amount}
                    />
                  </div>
                </div>
              </div>

              {/* ---- Summary preview ---- */}
              {(selectedFees.length > 0 || amount) && (
                <div className="payment__summary">
                  <div className="payment__summary-row">
                    <span>Fee Types:</span>
                    <span>{selectedFees.length > 0
                      ? selectedFees.map(f => f.charAt(0).toUpperCase() + f.slice(1)).join(', ')
                      : '—'}
                    </span>
                  </div>
                  <div className="payment__summary-row payment__summary-row--total">
                    <span>Total Amount:</span>
                    <span>{amount ? `₹${Number(amount).toLocaleString('en-IN')}` : '—'}</span>
                  </div>
                </div>
              )}

              {/* ---- Submit ---- */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                className="payment__submit-btn"
              >
                🔒 Pay Now
              </Button>

              <p className="payment__secure-note">
                🛡️ 256-bit SSL encrypted · Your data is never stored
              </p>
            </form>
          </div>
        </Card>
      </div>
    </main>
  );
}

export default Payment;