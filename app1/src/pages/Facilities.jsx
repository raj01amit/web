import React from 'react';
import Card from '../components/Card';
import './Facilities.css';

const FACILITIES_DATA = [
  {
    id: 'computer-center',
    icon: '💻',
    title: 'Computer Center',
    color: 'blue',
    description: 'A well-equipped central computer center with 60 networked computers spread across specialized laboratories, providing internet access and programming resources for all departments.',
    features: ['160+ Networked Computers', 'High-Speed Internet', 'Specialized Labs', 'Multi-Platform Support'],
  },
  {
    id: 'library',
    icon: '📚',
    title: 'Library',
    color: 'purple',
    description: 'Comprehensive library with hundreds of volumes on technical fields, periodicals, newspapers, and curriculum books. Digital resources available through NPTEL, SWAYAM, and National Digital Library.',
    features: ['Extensive Book Collection', 'Digital Resources', 'Reading Room', 'Periodicals & Journals'],
    links: [
      { name: 'National Digital Library', url: 'https://ndl.iitkgp.ac.in/' },
      { name: 'NPTEL', url: 'https://nptel.ac.in/' },
      { name: 'SWAYAM', url: 'https://swayam.gov.in/' },
    ],
  },
  {
    id: 'hostels',
    icon: '🏠',
    title: 'Hostel Facilities',
    color: 'green',
    description: 'State-of-the-art hostel facilities with separate accommodations for boys (300 capacity) and girls (200 capacity). Well-maintained with modern amenities and 24/7 supervision.',
    features: ['Boys Hostel: 300 Capacity', 'Girls Hostel: 200 Capacity', 'Single & Multi-Seated Rooms', 'Common Rooms & Recreation'],
    wardens: [
      { role: 'Chief Warden', name: 'Dr. Rajendra Pandit' },
      { role: 'Boys Hostel', names: ['Dr. Govind Jha (P/I)', 'Prince Raj (P/I)', 'Rajnish Kumar (P/I)'] },
      { role: 'Girls Hostel', names: ['Abhya (P/I)', 'Aradhana Kumari (P/I)'] },
    ],
  },
  {
    id: 'sports',
    icon: '⚽',
    title: 'Sports Complex',
    color: 'orange',
    description: 'State-level sports facilities with 6 badminton courts and 2 volleyball courts. Ample space for outdoor and indoor games to develop students\' full potential.',
    features: ['6 Badminton Courts', '2 Volleyball Courts', 'Indoor Games Room', 'State-Level Facilities'],
  },
  {
    id: 'medical',
    icon: '🏥',
    title: 'Medical Facilities',
    color: 'rose',
    description: 'State-of-the-art medical OPD service with specialized sick room facilities. Regular visits by government doctors providing free checkups and medicines. Emergency ambulance service available.',
    features: ['Regular Medical Checkups', 'Free Medicines', 'Emergency Ambulance', 'Male & Female Doctors'],
  },
  {
    id: 'wifi',
    icon: '📡',
    title: 'Wi-Fi Campus',
    color: 'cyan',
    description: '100 Mbps optical fiber connection from BSNL providing seamless internet connectivity across campus, labs, and hostels. 24/7 broadband access for uninterrupted learning.',
    features: ['100 Mbps Speed', 'Campus-Wide Coverage', '24/7 Connectivity', 'Wired & Wireless'],
  },
  {
    id: 'canteen',
    icon: '🍽️',
    title: 'Canteen',
    color: 'yellow',
    description: 'Well-maintained and hygienic canteen providing wholesome, quality food at reasonable prices. Diverse menu catering to nutritional needs with good ambience.',
    features: ['Hygienic Food', 'Reasonable Prices', 'Varied Menu', 'Open 9 AM - 7:30 PM'],
  },
  {
    id: 'guest-house',
    icon: '🏨',
    title: 'Guest House',
    color: 'indigo',
    description: 'Well-furnished guest house within campus for guests and students\' parents at reasonable cost. Peaceful atmosphere surrounded by orchards and scenic hills.',
    features: ['Furnished Rooms', 'Reasonable Rates', 'Peaceful Location', 'On-Campus'],
  },
  {
    id: 'language-lab',
    icon: '🗣️',
    title: 'Language Lab',
    color: 'pink',
    description: 'Cutting-edge, air-conditioned language lab with 60 systems for developing English language skills. Licensed "Study Language Lab" software for personalized learning.',
    features: ['60 Student Consoles', 'Air-Conditioned', 'Licensed Software', 'Individual Attention'],
  },
  {
    id: 'innovation-cell',
    icon: '💡',
    title: 'Innovation & Consultancy',
    color: 'teal',
    description: 'Dedicated cell for research, consultancy, and training. Promotes collaborations with international universities and provides technical strategies for businesses.',
    features: ['Research Support', 'Industry Consultancy', 'International Collaborations', 'Training Programs'],
  },
  {
    id: 'counselling',
    icon: '🧠',
    title: 'Counselling Centre',
    color: 'violet',
    description: 'Personal and vocational guidance for students. Career counseling, personality analysis, and support for personal issues with strict confidentiality.',
    features: ['Career Guidance', 'Personal Counseling', 'Vocational Analysis', 'Confidential Support'],
  },
  {
    id: 'entrepreneurship',
    icon: '🚀',
    title: 'Startup & Entrepreneurship Cell',
    color: 'amber',
    description: 'Fosters entrepreneurial spirit through networking, competitions, and speaker sessions. Bridges the gap between students, entrepreneurs, investors, and mentors.',
    features: ['Startup Support', 'Networking Events', 'Investor Connect', 'Business Competitions'],
  },
];

const ADDITIONAL_SERVICES = [
  {
    title: 'Student Grievance Cell',
    icon: '📋',
    desc: 'Promotes fair and unprejudiced educational environment. Ensures effective solutions to student grievances with impartial approach.',
  },
  {
    title: 'Clubs & Events',
    icon: '🎭',
    desc: 'Various clubs, fests, cultural events, and festivals promoting diversity, creativity, and innovation throughout the year.',
  },
  {
    title: 'Campus Life',
    icon: '🌳',
    desc: 'Spread over 5.5 acres in eastern Munger, surrounded by orchards, gardens, scenic hills, and lush green cover.',
  },
];

function Facilities() {
  return (
    <main className="page-wrapper facilities-page">

      {/* Hero */}
      <section className="facilities-hero">
        <div className="facilities-hero__bg" aria-hidden="true" />
        <div className="facilities-hero__inner">
          <span className="section-eyebrow animate-fade-up">World-Class Infrastructure</span>
          <h1 className="section-heading animate-fade-up-delay-1" style={{ color: 'var(--cream)' }}>
            Campus Facilities
          </h1>
          <p className="facilities-hero__subtitle animate-fade-up-delay-2">
            Supporting holistic development through state-of-the-art infrastructure, 
            modern amenities, and comprehensive student support services.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="facilities-content">

        {/* Facilities Grid */}
        <div className="facilities-grid">
          {FACILITIES_DATA.map((facility, i) => (
            <Card
              key={facility.id}
              variant="default"
              hoverable
              className={`facility-card facility-card--${facility.color} animate-fade-up-delay-${(i % 4) + 1}`}
            >
              <div className="card__body facility-card__body">
                <div className="facility-card__header">
                  <span className="facility-card__icon">{facility.icon}</span>
                  <h3 className="card__title">{facility.title}</h3>
                </div>

                <p className="card__description">{facility.description}</p>

                {/* Features */}
                <div className="facility-features">
                  {facility.features.map((feature, idx) => (
                    <div key={idx} className="feature-item">
                      <span className="feature-item__icon">✓</span>
                      <span className="feature-item__text">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Wardens (for hostel) */}
                {facility.wardens && (
                  <div className="facility-wardens">
                    <h4 className="wardens-title">Administration:</h4>
                    {facility.wardens.map((w, idx) => (
                      <div key={idx} className="warden-item">
                        <strong>{w.role}:</strong>{' '}
                        {w.name || w.names.join(', ')}
                      </div>
                    ))}
                  </div>
                )}

                {/* Links (for library) */}
                {facility.links && (
                  <div className="facility-links">
                    <h4 className="links-title">Digital Resources:</h4>
                    {facility.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="facility-link"
                      >
                        {link.name} →
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="additional-services">
          <h2 className="section-heading" style={{ textAlign: 'center', marginBottom: '40px' }}>
            Additional Support Services
          </h2>
          <div className="services-grid">
            {ADDITIONAL_SERVICES.map((service, i) => (
              <Card key={i} variant="cream" hoverable className="service-card">
                <div className="card__body service-card__body">
                  <span className="service-icon">{service.icon}</span>
                  <h4 className="service-title">{service.title}</h4>
                  <p className="service-desc">{service.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Campus Overview */}
        <Card variant="navy" className="campus-overview-card">
          <div className="card__body campus-overview">
            <div className="campus-overview__content">
              <h2 className="card__title">Campus Life at GEC Munger</h2>
              <p className="card__description">
                The Government Engineering College, Munger campus has been developed to support students' 
                holistic development. We believe students' full potential cannot be reached through academics alone. 
                Our academic programs are supported by co-curricular and extracurricular activities that nurture 
                culture, sports, self-governance, ethics, and values.
              </p>
              <p className="card__description">
                Students participate in brain-strengthening activities, talent shows, debates, volunteer work, 
                community services, women empowerment seminars, fitness sessions, and much more. The blending 
                of academic and extracurricular activities makes the campus lively and exciting, allowing students 
                to create priceless experiences.
              </p>
            </div>
            <div className="campus-stats">
              <div className="campus-stat">
                <span className="campus-stat__value">5.5</span>
                <span className="campus-stat__label">Acres Campus</span>
              </div>
              <div className="campus-stat">
                <span className="campus-stat__value">500+</span>
                <span className="campus-stat__label">Hostel Capacity</span>
              </div>
              <div className="campus-stat">
                <span className="campus-stat__value">100</span>
                <span className="campus-stat__label">Mbps Internet</span>
              </div>
            </div>
          </div>
        </Card>

      </section>

    </main>
  );
}

export default Facilities;
