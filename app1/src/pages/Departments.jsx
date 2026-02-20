import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import './Departments.css';

const DEPARTMENTS_DATA = [
  {
    id: 'civil',
    name: 'Civil Engineering',
    code: 'CE',
    icon: '🏗️',
    color: 'blue',
    shortDesc: 'Building infrastructure, designing sustainable solutions, and shaping the physical world.',
    highlights: ['Surveying & Geomatics', 'Structural Design', 'Environmental Engineering', 'Transportation'],
    facultyCount: 12,
    labCount: 7,
  },
  {
    id: 'mechanical',
    name: 'Mechanical Engineering',
    code: 'ME',
    icon: '⚙️',
    color: 'orange',
    shortDesc: 'Innovating mechanical systems, manufacturing processes, and energy solutions.',
    highlights: ['Thermodynamics', 'CAD/CAM', 'Robotics', 'Manufacturing'],
    facultyCount: 8,
    labCount: 6,
  },
  {
    id: 'electrical',
    name: 'Electrical Engineering',
    code: 'EE',
    icon: '⚡',
    color: 'yellow',
    shortDesc: 'Powering the future with electrical systems, electronics, and control systems.',
    highlights: ['Power Systems', 'Control Systems', 'Electronics', 'Embedded Systems'],
    facultyCount: 7,
    labCount: 5,
  },
  {
    id: 'cse-ai',
    name: 'Computer Science (AI)',
    code: 'CSE-AI',
    icon: '🤖',
    color: 'purple',
    shortDesc: 'Pioneering artificial intelligence, machine learning, and intelligent systems.',
    highlights: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'AI Applications'],
    facultyCount: 6,
    labCount: 4,
  },
  {
    id: 'cse-ds',
    name: 'Computer Science (Data Science)',
    code: 'CSE-DS',
    icon: '📊',
    color: 'cyan',
    shortDesc: 'Transforming data into insights through analytics, big data, and visualization.',
    highlights: ['Big Data', 'Analytics', 'Cloud Computing', 'Data Mining'],
    facultyCount: 7,
    labCount: 2,
  },
  {
    id: 'mc',
    name: 'Mathematics and Computation',
    code: 'MC',
    icon: '📐',
    color: 'green',
    shortDesc: 'Foundation in mathematics and programming for engineering excellence.',
    highlights: ['Mathematics', 'Programming', 'Problem Solving', 'Computation'],
    facultyCount: 2,
    labCount: 3,
  },
];

function Departments() {
  const navigate = useNavigate();

  const handleDeptClick = (deptId) => {
    navigate(`/departments/${deptId}`);
  };

  return (
    <main className="page-wrapper departments-page">

      {/* Hero */}
      <section className="departments-hero">
        <div className="departments-hero__bg" aria-hidden="true" />
        <div className="departments-hero__inner">
          <span className="section-eyebrow animate-fade-up">Academic Excellence</span>
          <h1 className="section-heading animate-fade-up-delay-1" style={{ color: 'var(--cream)' }}>
            Our Departments
          </h1>
          <p className="departments-hero__subtitle animate-fade-up-delay-2">
            Explore world-class education across 6 specialized departments with state-of-the-art facilities, 
            experienced faculty, and industry-aligned curriculum.
          </p>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="departments-content">
        <div className="departments-grid">
          {DEPARTMENTS_DATA.map((dept, i) => (
            <Card
              key={dept.id}
              variant="default"
              hoverable
              className={`dept-detail-card dept-detail-card--${dept.color} animate-fade-up-delay-${(i % 3) + 1}`}
            >
              <div className="card__body dept-detail-card__body">
                <div className="dept-detail-card__header">
                  <span className="dept-detail-card__icon">{dept.icon}</span>
                  <div className="dept-detail-card__badge">{dept.code}</div>
                </div>

                <h3 className="card__title dept-detail-card__title">{dept.name}</h3>
                <p className="card__description">{dept.shortDesc}</p>

                <div className="dept-detail-card__highlights">
                  {dept.highlights.map((h) => (
                    <span key={h} className="highlight-tag">{h}</span>
                  ))}
                </div>

                <div className="dept-detail-card__stats">
                  <div className="dept-stat">
                    <span className="dept-stat__icon">👨‍🏫</span>
                    <span className="dept-stat__value">{dept.facultyCount}</span>
                    <span className="dept-stat__label">Faculty</span>
                  </div>
                  <div className="dept-stat">
                    <span className="dept-stat__icon">🔬</span>
                    <span className="dept-stat__value">{dept.labCount}</span>
                    <span className="dept-stat__label">Labs</span>
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="md"
                  fullWidth
                  onClick={() => handleDeptClick(dept.id)}
                  className="dept-detail-card__btn"
                >
                  Explore Department →
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

    </main>
  );
}

export default Departments;
