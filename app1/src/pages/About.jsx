import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import './About.css';

const DEPARTMENTS = [
  { code: 'CSE-AI', name: 'Computer Science & Engineering (AI)', icon: '🤖', id: 'cse-ai' },
  { code: 'CSE-DS', name: 'Computer Science & Engineering (Data Science)', icon: '📊', id: 'cse-ds' },
  { code: 'EE', name: 'Electrical Engineering', icon: '⚡', id: 'electrical' },
  { code: 'ME', name: 'Mechanical Engineering', icon: '⚙️', id: 'mechanical' },
  { code: 'CE', name: 'Civil Engineering', icon: '🏗️', id: 'civil' },
  { code: 'MC', name: 'Mathematics and Computation', icon: '📐', id: 'mc' },
];

const STATS_DATA = [
  { value: '750+', label: 'Students', icon: '👨‍🎓' },
  { value: '28', label: 'Faculty Members', icon: '👨‍🏫' },
  { value: '8', label: 'PhDs (41%)', icon: '🎓' },
  { value: '6', label: 'B.Tech Programs', icon: '📚' },
];

const RESEARCH_AREAS = [
  { area: 'Environment & Sustainability', icon: '🌱' },
  { area: 'PLC & Automation', icon: '🔧' },
  { area: 'CAD/CAM & CNC Machining', icon: '⚙️' },
  { area: 'Embedded Systems', icon: '💻' },
  { area: 'Low Power VLSI Design', icon: '🔌' },
  { area: 'Big Data & Cloud Computing', icon: '☁️' },
  { area: 'Wireless Technology', icon: '📡' },
  { area: 'Image Processing', icon: '📷' },
  { area: 'Earthquake Engineering', icon: '🏗️' },
  { area: 'Geotechnical Engineering', icon: '🌍' },
  { area: 'AI & Machine Learning', icon: '🤖' },
  { area: 'Next-Gen Networks', icon: '🌐' },
];

const ADMINISTRATIVE_SECTIONS = [
  {
    title: 'Academic',
    icon: '📖',
    members: [
      { name: 'Amit Kumar Sinha', designation: 'Asst. Professor (CIVIL)', role: 'Academic P/I' },
      { name: 'Jitendra Kumar', designation: 'Asst. Professor (CIVIL)', role: 'Student Welfare Officer' },
      { name: 'Md. Nishat Afsar', designation: 'Asst. Professor (CIVIL)', role: 'Admission Incharge' },
    ]
  },
  {
    title: 'Training & Placement',
    icon: '💼',
    members: [
      { name: 'Abhishek Anand', designation: 'Asst. Professor (CIVIL)', role: 'Professor Incharge', contact: '+919304466728' },
    ]
  },
  {
    title: 'Examination',
    icon: '📝',
    members: [
      { name: 'Dr. Rajendra Pandit', designation: 'Asst. Professor (ASH)', role: 'Examination Controller' },
      { name: 'Dr. Govind Kumar Jha', designation: 'Asst. Professor (CSE)', role: 'Examination Controller' },
    ]
  },
  {
    title: 'Library',
    icon: '📚',
    members: [
      { name: 'Aradhana Kumari', designation: 'Asst. Professor (CIVIL)', role: 'Professor Incharge' },
      { name: 'Abhishek Anand', designation: 'Asst. Professor (CIVIL)', role: 'Professor Incharge' },
    ]
  },
  {
    title: 'Sports',
    icon: '⚽',
    members: [
      { name: 'Aditya Kumar', designation: 'Asst. Professor (CIVIL)', role: 'Professor Incharge' },
    ]
  },
  {
    title: 'Cultural Activities',
    icon: '🎭',
    members: [
      { name: 'Abhaya', designation: 'Asst. Professor (CSE)', role: 'Professor Incharge' },
      { name: 'Akash Deep', designation: 'Asst. Professor (CIVIL)', role: 'Professor Incharge' },
    ]
  },
];

function About() {
  const navigate = useNavigate();

  return (
    <main className="page-wrapper about-page">

      {/* ---- HERO ---- */}
      <section className="about-hero">
        <div className="about-hero__bg" aria-hidden="true" />
        <div className="about-hero__inner">
          <div className="about-hero__badge animate-fade-up">Est. 2019 · AICTE Approved</div>
          <h1 className="about-hero__title animate-fade-up-delay-1">
            Government Engineering College
            <span className="about-hero__subtitle">Munger, Bihar</span>
          </h1>
          <p className="about-hero__tagline animate-fade-up-delay-2">
            Inspiring innovation, fostering excellence, shaping tomorrow's engineers
          </p>
        </div>
      </section>

      {/* ---- STATS BAR ---- */}
      <section className="about-stats">
        <div className="about-stats__inner">
          {STATS_DATA.map((stat, i) => (
            <div key={stat.label} className={`about-stat animate-fade-up-delay-${i % 4 + 1}`}>
              <span className="about-stat__icon">{stat.icon}</span>
              <span className="about-stat__value">{stat.value}</span>
              <span className="about-stat__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ---- CONTENT CONTAINER ---- */}
      <div className="about-content">

        {/* ---- OVERVIEW ---- */}
        <section className="about-section">
          <div className="section-header">
            <span className="section-eyebrow">Our Story</span>
            <h2 className="section-heading">About GEC Munger</h2>
          </div>

          <Card variant="default" className="about-card">
            <div className="card__body">
              <div className="card__accent" />
              <p className="about-text">
                Government Engineering College, Munger was established in <strong>2019</strong> under the visionary leadership of Hon'ble Chief Minister <strong>Nitish Kumar</strong> as part of his <strong>Saat Nischay Program-1: Sabh Padhe Sab Badhe</strong>. The college is run by the Department of Science, Technology and Technical Education, Bihar Government, and is one of 38 institutions set up under this transformative initiative.
              </p>
              <p className="about-text">
                GEC Munger is a prestigious engineering college offering six B.Tech programs in cutting-edge disciplines. The college is approved by <strong>AICTE, New Delhi</strong>, recognized by the <strong>Government of Bihar</strong>, and permanently affiliated to <strong>Bihar Engineering University, Patna</strong>.
              </p>
              <p className="about-text">
                With approximately <strong>750 students</strong> and <strong>28 faculty members</strong> (including 8 PhDs — 41%), the college maintains a healthy faculty-student ratio. Our faculty hails from prestigious institutions and brings a wealth of academic and research expertise.
              </p>
            </div>
          </Card>
        </section>

        {/* ---- DEPARTMENTS ---- */}
        <section className="about-section">
          <div className="section-header">
            <span className="section-eyebrow">Academic Programs</span>
            <h2 className="section-heading">Departments</h2>
          </div>

          <div className="departments-grid">
            {DEPARTMENTS.map((dept, i) => (
              <Card 
                key={dept.code} 
                variant="cream" 
                hoverable 
                className={`dept-card animate-fade-up-delay-${i % 3 + 1}`}
                onClick={() => navigate(`/departments/${dept.id}`)}
                style={{ cursor: 'pointer' }}
              >
                <div className="card__body">
                  <span className="card__icon">{dept.icon}</span>
                  <h3 className="card__title">{dept.name}</h3>
                  <span className="dept-code">{dept.code}</span>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* ---- VISION MISSION PHILOSOPHY ---- */}
        <section className="about-section">
          <div className="vmf-grid">
            <Card variant="navy" className="vmf-card">
              <div className="card__body">
                <div className="vmf-icon">🎯</div>
                <h3 className="card__title">Vision</h3>
                <p className="card__description">
                  To provide students with a thorough, excellent education that equips them to succeed in their careers, supported by a vibrant intellectual community, and able to navigate a technologically complex world with original leadership skills. To play a key role in the emergence of new knowledge through creative research that inspires entrepreneurship and economic growth for the good of the entire community.
                </p>
              </div>
            </Card>

            <Card variant="default" className="vmf-card">
              <div className="card__body">
                <div className="vmf-icon">🚀</div>
                <h3 className="card__title">Mission</h3>
                <p className="card__description">
                  To develop professionals that are ethically upstanding, socially progressive, and capable of cooperating across cultural boundaries. To foster innovation, research, and entrepreneurship while maintaining the highest standards of technical and moral education.
                </p>
              </div>
            </Card>

            <Card variant="outlined" className="vmf-card">
              <div className="card__body">
                <div className="vmf-icon">💡</div>
                <h3 className="card__title">Philosophy</h3>
                <p className="card__description">
                  We believe that education is for emancipation and that the essence of learning is the pursuit of truth that frees one from the darkness of ignorance. Engineering education encompasses all scientific disciplines essential to the growth of the global community and the advancement of civilization.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* ---- RESEARCH AREAS ---- */}
        <section className="about-section">
          <div className="section-header">
            <span className="section-eyebrow">Innovation & Discovery</span>
            <h2 className="section-heading">Research & Development</h2>
          </div>

          <Card variant="default" className="about-card">
            <div className="card__body">
              <p className="about-text">
                Research activity at GEC Munger follows the philosophy of <strong>Inspire, Innovate, and Implement</strong> to benefit contemporary society. The college actively pursues sponsored research from agencies including DST, AICTE, and UGC. Internal revenue generation through consultancy includes energy audits, mobile apps, drones in agriculture, agricultural tools, and material testing.
              </p>
              
              <div className="research-tags">
                {RESEARCH_AREAS.map((r) => (
                  <span key={r.area} className="research-tag">
                    <span className="research-tag__icon">{r.icon}</span>
                    {r.area}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </section>

        {/* ---- PLACEMENT ---- */}
        <section className="about-section">
          <div className="section-header">
            <span className="section-eyebrow">Career Development</span>
            <h2 className="section-heading">Training & Placement</h2>
          </div>

          <Card variant="default" className="about-card placement-card">
            <div className="card__body">
              <div className="placement-header">
                <span className="placement-icon">💼</span>
                <div>
                  <h3 className="card__title">T&P Office</h3>
                  <p className="placement-subtitle">Building careers, shaping futures</p>
                </div>
              </div>

              <p className="about-text">
                The Training and Placement Office at GEC Munger actively encourages students to complete semester-long placements, summer internships, and gain relevant job experience. The office provides comprehensive training to help students excel in demanding hiring and selection processes.
              </p>

              <div className="placement-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">🏢</span>
                  <span className="highlight-text">Industry Partnerships & MoUs</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">🚀</span>
                  <span className="highlight-text">Incubation & Startup Support</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">🏆</span>
                  <span className="highlight-text">National Competition Participation</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">🌟</span>
                  <span className="highlight-text">Entrepreneurship Development</span>
                </div>
              </div>

              <p className="about-text">
                Students participate in national-level engineering competitions including <strong>Baja SAEINDIA, Supra SAEINDIA, Go-kart, and ADC championships</strong>, winning prizes and ranks. They also present research findings at national and state-level conferences.
              </p>
            </div>
          </Card>
        </section>

        {/* ---- ADMINISTRATION ---- */}
        <section className="about-section">
          <div className="section-header">
            <span className="section-eyebrow">Leadership</span>
            <h2 className="section-heading">Administration</h2>
          </div>

          <div className="admin-grid">
            {ADMINISTRATIVE_SECTIONS.map((section, i) => (
              <Card key={section.title} variant="cream" className={`admin-card animate-fade-up-delay-${i % 3 + 1}`}>
                <div className="card__body">
                  <div className="admin-header">
                    <span className="admin-icon">{section.icon}</span>
                    <h3 className="card__title">{section.title}</h3>
                  </div>
                  
                  <div className="admin-members">
                    {section.members.map((member, idx) => (
                      <div key={idx} className="admin-member">
                        <div className="member-name">{member.name}</div>
                        <div className="member-designation">{member.designation}</div>
                        <div className="member-role">{member.role}</div>
                        {member.contact && (
                          <div className="member-contact">📞 {member.contact}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* ---- AFFILIATION ---- */}
        <section className="about-section">
          <div className="section-header">
            <span className="section-eyebrow">Recognition</span>
            <h2 className="section-heading">Affiliation & Accreditation</h2>
          </div>

          <Card variant="outlined" className="about-card affiliation-card">
            <div className="card__body">
              <div className="affiliation-badges">
                <div className="affiliation-badge">
                  <span className="badge-icon">✅</span>
                  <div>
                    <strong>AICTE Approved</strong>
                    <p>All India Council for Technical Education, New Delhi</p>
                  </div>
                </div>
                <div className="affiliation-badge">
                  <span className="badge-icon">🎓</span>
                  <div>
                    <strong>Affiliated to BEU</strong>
                    <p>Bihar Engineering University, Patna (Degree Awarding Authority)</p>
                  </div>
                </div>
                <div className="affiliation-badge">
                  <span className="badge-icon">🏛️</span>
                  <div>
                    <strong>Govt. of Bihar</strong>
                    <p>Recognized by Government of Bihar</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

      </div>
    </main>
  );
}

export default About;
