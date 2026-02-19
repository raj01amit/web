import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import './Home.css';

const COURSES = [
  {
    id: 1,
    icon: '💻',
    badge: 'Engineering',
    title: 'B.Tech Computer Science(DS)',
    description: 'Master algorithms, data structures, AI, and full-stack development with industry mentors.',
    duration: '4 Years',
    seats: '60 Seats',
  },
  {
    id: 2,
    icon: '💻',
    badge: 'Engineering',
    title: 'B.Tech Computer Science (AI)',
    description: 'Master algorithms, data structures, AI, and full-stack development with industry mentors.',
    duration: '4 Years',
    seats: '60 Seats',
  },
  {
    id: 3,
    icon: '🌉',
    badge: 'Engineering',
    title: 'B.Tech Civil',
    description: 'Explore the frontiers of life sciences, genetics and pharmaceutical research.',
    duration: '3 Years',
    seats: '120 Seats',
  },
  {
    id: 4,
    icon: '📐',
    badge: 'Engineering',
    title: 'B.Tech Mechanical',
    description: 'From thermodynamics to robotics — a comprehensive foundation in mechanical systems.',
    duration: '4 Years',
    seats: '60 Seats',
  },
  {
    id: 5,
    icon: '⚡',
    badge: 'Engineering',
    title: 'B.Tech Electrical',
    description: 'Dive into power systems, electronics, and embedded systems engineering.',
    duration: '4 Years',
    seats: '60 Seats',
  },
  {
    id: 6,
    icon: '⚡',
    badge: 'Engineering',
    title: 'B.Tech Mathematics and Computation',
    description: 'Dive into power systems, electronics, and embedded systems engineering.',
    duration: '4 Years',
    seats: '60 Seats',
  },
  
];

const STATS = [
  { value: '12,000+', label: 'Students Enrolled' },
  { value: '96%',     label: 'Placement Rate' },
  { value: '200+',    label: 'Faculty Members' },
  { value: '50+',     label: 'Research Papers' },
];

function Home() {
  const navigate = useNavigate();

  return (
    <main className="page-wrapper home">

      {/* ---- HERO ---- */}
      <section className="hero">
        <div className="hero__bg-pattern" aria-hidden="true" />
        <div className="hero__inner">
          <div className="hero__text animate-fade-up">
            <span className="hero__eyebrow">Est. 1978 · Accredited by NAAC A+</span>
            <h1 className="hero__heading">
              Shape Your Future at<br />
              <span className="hero__heading-highlight">Gec Munger</span>
            </h1>
            <p className="hero__subtext">
              A premier institution offering world-class education, cutting-edge research
              facilities, and holistic development programmes to prepare you for tomorrow's challenges.
            </p>
            <div className="hero__actions animate-fade-up-delay-1">
              <Button size="lg" onClick={() => navigate('/payment')}>
                Pay Fees Online →
              </Button>
              <Button variant="secondary" size="lg" onClick={() => {
                document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
              }}>
                Explore Courses
              </Button>
            </div>
          </div>

          <div className="hero__visual animate-fade-up-delay-2" aria-hidden="true">
            <div className="hero__badge-stack">
              <div className="hero__floating-badge hero__floating-badge--top">
                🏆 NAAC A+ Accredited
              </div>
              <div className="hero__emblem">🎓</div>
              <div className="hero__floating-badge hero__floating-badge--bottom">
                🌍 Global Alumni Network
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="hero__stats animate-fade-up-delay-3">
          {STATS.map((s) => (
            <div key={s.label} className="hero__stat">
              <span className="hero__stat-value">{s.value}</span>
              <span className="hero__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ---- COURSES ---- */}
      <section className="courses" id="courses">
        <div className="courses__inner">
          <div className="courses__header">
            <span className="section-eyebrow">Programmes Offered</span>
            <h2 className="section-heading">Find Your Course</h2>
            <p className="section-sub">
              Explore our range of undergraduate programmes designed to build career-ready graduates.
            </p>
          </div>

          <div className="courses__grid">
            {COURSES.map((course, i) => (
              <Card
                key={course.id}
                variant="default"
                hoverable
                className={`card--course animate-fade-up-delay-${Math.min(i % 4 + 1, 4)}`}
              >
                <div className="card__body">
                  <div className="card__accent" />
                  <span className="card__icon">{course.icon}</span>
                  <span className="card__badge">{course.badge}</span>
                  <h3 className="card__title">{course.title}</h3>
                  <p className="card__description">{course.description}</p>
                </div>
                <div className="card__divider" />
                <div className="card__footer">
                  <div className="course-meta">
                    <span className="course-meta__item">🕐 {course.duration}</span>
                    <span className="course-meta__item">👥 {course.seats}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="courses__cta animate-fade-up-delay-2">
            <Card variant="navy" className="courses__cta-card">
              <div className="card__body courses__cta-body">
                <div>
                  <h3 className="card__title">Ready to secure your spot?</h3>
                  <p className="card__description">
                    Complete your fee payment online in under 2 minutes. Secure, fast, and paperless.
                  </p>
                </div>
                <Button variant="primary" size="lg" onClick={() => navigate('/payment')}>
                  Pay Fees Now →
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Home;