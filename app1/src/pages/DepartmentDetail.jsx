import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import './DepartmentDetail.css';

// Department data structure
const DEPT_DATA = {
  'civil': {
    name: 'Civil Engineering',
    code: 'CE',
    icon: '🏗️',
    color: 'blue',
    overview: 'Civil Engineering is a diverse branch encompassing Surveying, Geotechnology, Structural Engineering, Environmental Sciences, Hydraulics, Transportation, and Hydrology. Civil Engineers provide essential facilities and infrastructure to meet societal needs — from shelter and drinking water to waste management and transportation systems including roads, railways, airways, and urban transit.',
    vision: 'To produce eminent, competitive and dedicated civil engineers by imparting latest technical skills and ethical values to empower students to play a key role in the planning and execution of infrastructural & developmental activities of the nation.',
    mission: 'To provide exceptional education in civil engineering through quality teaching, state-of-the-art facilities and dynamic guidance to produce civil engineering graduates who are professionally excellent to face complex technical challenges with creativity, leadership, ethics and social consciousness.',
    objectives: [
      'Industry Standard Facilities',
      'Field Visits & Practical Exposure',
      'Employability & Skill Development',
      'Research & Innovation',
    ],
    faculty: [
      { name: 'Amit Kumar Sinha', designation: 'Asst. Professor', email: 'amitiitb94@gmail.com' },
      { name: 'Aradhana Kumari', designation: 'Asst. Professor', email: 'aradhana.singh905@gmail.com' },
      { name: 'Raj Kumar Hemant', designation: 'Asst. Professor', email: 'rajhemant48@gmail.com' },
      { name: 'Aditya Kumar', designation: 'Asst. Professor', email: 'profadityagecmunger@gmail.com' },
      { name: 'Abhishek Anand', designation: 'Asst. Professor', email: 'abhishekanand2703@gmail.com' },
      { name: 'Akash Deep', designation: 'Asst. Professor', email: 'akash.deep.amu@gmail.com' },
      { name: 'Prince Raj', designation: 'Asst. Professor', email: 'princer.pg18.ce@nitp.ac.in' },
      { name: 'Jitendra Kumar', designation: 'Asst. Professor', email: 'jituiith13@gmail.com' },
      { name: 'Abhash Ranjan', designation: 'Asst. Professor', email: 'aranjan15213@gmail.com' },
      { name: 'Rajnish Kumar', designation: 'Asst. Professor', email: 'kumarrajnish127@gmail.com' },
      { name: 'Gaurav Kumar Singh', designation: 'Asst. Professor', email: 'gauravkumarsingh062@gmail.com' },
      { name: 'Md. Nishat Afsar', designation: 'Asst. Professor', email: 'nishatafsar22@gmail.com' },
    ],
    labs: [
      { name: 'Surveying Laboratory', desc: 'Familiarize students with surveying equipment and measurement techniques including levelling, traversing using chain, tape, levelling instruments and compass survey.' },
      { name: 'Geotechnical Engineering Lab', desc: 'Obtain basic knowledge about soil under loading and unloading conditions. Understand properties like specific gravity, Atterberg limits, compaction, consolidation, permeability and shear strength.' },
      { name: 'Engineering Geology Lab', desc: 'Understanding natural crystalline structure of rocks and minerals, studying faults and folds with microscopic analysis.' },
      { name: 'Concrete Technology Lab', desc: 'Study cement, coarse and fine aggregates performance during construction. Test specific gravity, soundness, compressive strength, water absorption, slump and compaction factor.' },
      { name: 'Transportation Engineering Lab', desc: 'Study bitumen, aggregates and their performance. Test penetration value, softening, ductility, flash and fire point of bituminous samples.' },
      { name: 'Environmental Engineering Lab', desc: 'Test water and wastewater characteristics: pH, turbidity, conductivity, DO, TDS, alkalinity, chloride, BOD, COD, and coliform tests.' },
      { name: 'Fluid Mechanics & Hydraulic Machinery Lab', desc: 'Study fluid behavior, viscous flows, pipe flow, dimensional analysis, boundary layers, head loss and hydraulic machines.' },
    ],
    curriculum: [
      { semester: '1st Semester', file: '1st_Sem_Civil_syllabus.pdf' },
      { semester: '2nd Semester', file: '2nd_Sem_Civil_Syllabus.pdf' },
      { semester: '3rd Semester', file: '3rd_sem_Civil_Syllabus.pdf' },
      { semester: '4th Semester', file: '4th_Sem_Civil_Syllabus.pdf' },
      { semester: '5th Semester', file: '5th_sem_Civil_syllabus.pdf' },
      { semester: '6th Semester', file: '6th_sem_Civil_syllabus.pdf' },
      { semester: '7th Semester', file: '7th_Sem_Civil_syllabus.pdf' },
      { semester: '8th Semester', file: '8th_Sem_Civil_Syllabus.pdf' },
    ],
  },
  'mechanical': {
    name: 'Mechanical Engineering',
    code: 'ME',
    icon: '⚙️',
    color: 'orange',
    overview: 'Mechanical Engineering is one of the oldest and broadest engineering disciplines. It involves the design, analysis, manufacturing, and maintenance of mechanical systems. The department focuses on thermodynamics, fluid mechanics, materials science, robotics, CAD/CAM, CNC machining, and manufacturing automation.',
    vision: 'To emerge as a center of excellence in mechanical engineering education, research and innovation to produce globally competent engineers.',
    mission: 'To impart quality education with state-of-the-art facilities, promote research and innovation, and develop industry-ready mechanical engineers with strong ethical values.',
    objectives: [
      'Advanced Manufacturing & Automation',
      'CAD/CAM and CNC Training',
      'Robotics & Mechatronics',
      'Industry Collaboration',
    ],
    faculty: [
      { name: 'Rahul Kumar', designation: 'Asst. Professor', email: 'rk80457@gmail.com' },
      { name: 'Sonu Anand', designation: 'Asst. Professor', email: 'anandatiitk@gmail.com' },
      { name: 'Dr. Manish Kumar', designation: 'Asst. Professor', email: 'manish.gecmunger@gmail.com' },
      { name: 'Rashmi Rani', designation: 'Asst. Professor', email: 'rashmiranirns@gmail.com' },
      { name: 'Ujjwal Kumar Kashyap', designation: 'Asst. Professor', email: 'ProfUkKashyapME@gmail.com' },
      { name: 'Anant Kumar', designation: 'Asst. Professor', email: 'anantkumar488@gmail.com' },
      { name: 'Chanchal Kumar', designation: 'Asst. Professor', email: 'sharma.chanchal00@gmail.com' },
    ],
    labs: [
      { name: 'Thermodynamics Lab', desc: 'Study heat engines, refrigeration cycles, and thermal systems.' },
      { name: 'Manufacturing Lab', desc: 'Hands-on experience with machining, welding, and metal forming processes.' },
      { name: 'CAD/CAM Lab', desc: 'Computer-aided design and manufacturing using industry-standard software.' },
    ],
    curriculum: [],
  },
  'electrical': {
    name: 'Electrical Engineering',
    code: 'EE',
    icon: '⚡',
    color: 'yellow',
    overview: 'Electrical Engineering deals with the study and application of electricity, electronics, and electromagnetism. The department covers power systems, control systems, electronics, embedded systems, and renewable energy technologies.',
    vision: 'To be a leading department in electrical engineering education and research, producing engineers who contribute to sustainable energy solutions.',
    mission: 'To provide comprehensive education in electrical engineering with focus on power systems, electronics, and emerging technologies while fostering innovation and entrepreneurship.',
    objectives: [
      'Power Systems & Distribution',
      'Control & Automation',
      'Embedded Systems Development',
      'Renewable Energy Technologies',
    ],
    faculty: [
      { name: 'Pushpant Kumar', designation: 'Asst. Professor', email: 'pushpant980@gmail.com' },
      { name: 'Mahesh Kumar Choudhary', designation: 'Asst. Professor', email: 'mahesheee282@gmail.com' },
      { name: 'Rupesh Kumar', designation: 'Asst. Professor', email: '2k17.nitt@gmail.com' },
      { name: 'Dilkhush Rajak', designation: 'Asst. Professor', email: 'dilkhush09eee@gmail.com' },
      { name: 'Balmukund Kumar', designation: 'Asst. Professor', email: 'bmkumar1150@gmail.com' },
      { name: 'Anand Raj', designation: 'Asst. Professor', email: 'anandrajraju32@gmail.com' },
      { name: 'Gunjan Bharti', designation: 'Asst. Professor', email: 'bhartigunjan262@gmail.com' },
    ],
    labs: [
      { name: 'Power Systems Lab', desc: 'Study generation, transmission and distribution of electrical power.' },
      { name: 'Control Systems Lab', desc: 'Analyze and design control systems for various applications.' },
      { name: 'Electronics Lab', desc: 'Hands-on with analog and digital electronics circuits.' },
    ],
    curriculum: [],
  },
  'cse-ai': {
    name: 'Computer Science (AI)',
    code: 'CSE-AI',
    icon: '🤖',
    color: 'purple',
    overview: 'Computer Science with specialization in Artificial Intelligence focuses on developing intelligent systems that can learn, reason, and solve complex problems. The program covers machine learning, deep learning, neural networks, natural language processing, and computer vision.',
    vision: 'To be a premier department for AI education and research, producing engineers who pioneer the next generation of intelligent systems.',
    mission: 'To provide cutting-edge education in AI and machine learning, foster research and innovation, and develop skilled professionals ready for the AI revolution.',
    objectives: [
      'Machine Learning & Deep Learning',
      'Neural Networks & AI Applications',
      'Natural Language Processing',
      'Computer Vision & Image Processing',
    ],
    faculty: [
      { name: 'Dr. Govind Kumar Jha', designation: 'Asst. Professor', email: 'gvnd.jha@gmail.com' },
      { name: 'Dr. Abhaya', designation: 'Asst. Professor', email: 'abhayasharma77@gmail.com' },
      { name: 'Disuja Kumari', designation: 'Asst. Professor', email: 'sharmadisuja5@gmail.com' },
      { name: 'Dr. Saurabh Suman', designation: 'Asst. Professor', email: 'saurabhsuman2406@gmail.com' },
      { name: 'Gopal Krishna', designation: 'Asst. Professor', email: 'gopalkrishna91@gmail.com' },
      { name: 'Deepak Kumar', designation: 'Asst. Professor', email: 'deepakkumar.nith@gmail.com' },
      { name: 'Md. Ziaul Haque', designation: 'Asst. Professor', email: 'ziaulhaquecsegec24@gmail.com' },
    ],
    labs: [
      { name: 'AI & ML Lab', desc: 'Hands-on training with machine learning frameworks and tools.' },
      { name: 'Deep Learning Lab', desc: 'Work with neural networks and deep learning architectures.' },
    ],
    curriculum: [],
  },
  'cse-ds': {
    name: 'Computer Science (Data Science)',
    code: 'CSE-DS',
    icon: '📊',
    color: 'cyan',
    overview: 'Computer Science with specialization in Data Science prepares students to extract insights from large datasets using statistical analysis, machine learning, and visualization techniques. The program covers big data, analytics, cloud computing, data mining, and business intelligence.',
    vision: 'To establish excellence in data science education and create professionals who can harness the power of data for decision making.',
    mission: 'To provide comprehensive education in data science, analytics and big data technologies while promoting research and industry collaboration.',
    objectives: [
      'Big Data Technologies',
      'Data Analytics & Visualization',
      'Cloud Computing & Distributed Systems',
      'Business Intelligence',
    ],
    faculty: [
      { name: 'Dr. Govind Kumar Jha', designation: 'Asst. Professor', email: 'gvnd.jha@gmail.com' },
      { name: 'Dr. Abhaya', designation: 'Asst. Professor', email: 'abhayasharma77@gmail.com' },
      { name: 'Disuja Kumari', designation: 'Asst. Professor', email: 'sharmadisuja5@gmail.com' },
      { name: 'Dr. Saurabh Suman', designation: 'Asst. Professor', email: 'saurabhsuman2406@gmail.com' },
      { name: 'Gopal Krishna', designation: 'Asst. Professor', email: 'gopalkrishna91@gmail.com' },
      { name: 'Deepak Kumar', designation: 'Asst. Professor', email: 'deepakkumar.nith@gmail.com' },
      { name: 'Md. Ziaul Haque', designation: 'Asst. Professor', email: 'ziaulhaquecsegec24@gmail.com' },
    ],
    labs: [
      { name: 'Data Analytics Lab', desc: 'Hands-on with data analysis tools and statistical software.' },
      { name: 'Big Data Lab', desc: 'Work with Hadoop, Spark and distributed computing frameworks.' },
    ],
    curriculum: [],
  },
  'mc': {
    name: 'Mathematics and Computation',
    code: 'MC',
    icon: '📐',
    color: 'green',
    overview: 'Mathematics and Computation department provides foundational education in mathematics and computer programming. It supports all engineering programs with core mathematics subjects and develops essential computational skills.',
    vision: 'To provide strong foundation in mathematics and computer programming that empowers engineering students to excel in their technical disciplines.',
    mission: 'To deliver quality education in mathematics while fostering critical thinking and problem-solving abilities.',
    objectives: [
      'Strong Foundation in Mathematics',
      'Computer Programming Skills',
      'Communication & Soft Skills',
      'Research & Innovation',
    ],
    faculty: [
      { name: 'Dr. Rajendra Pandit', designation: 'Asst. Professor', email: 'rajendra@gecmunger.org' },
      { name: 'Dr. Govind Kumar Jha', designation: 'Asst. Professor', email: 'gvnd.jha@gmail.com' },
    ],
    labs: [
      { name: 'Mathematics Lab', desc: 'Hands-on with mathematical modeling and computational tools.' },
      { name: 'Programming Lab', desc: 'Learn programming fundamentals and problem-solving techniques.' },
      { name: 'Language Lab', desc: 'Improve communication and computation skills.' },
    ],
    curriculum: [],
  },
};

function DepartmentDetail() {
  const { deptId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const dept = DEPT_DATA[deptId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [deptId]);

  if (!dept) {
    return (
      <main className="page-wrapper">
        <div style={{ textAlign: 'center', padding: '80px 24px' }}>
          <h1>Department Not Found</h1>
          <Button
            onClick={() => navigate('/departments')}
            variant="primary"
            style={{ marginTop: '20px' }}
          >
            ← Back to Departments
          </Button>
        </div>
      </main>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📖' },
    { id: 'vision', label: 'Vision & Mission', icon: '🎯' },
    { id: 'faculty', label: 'Faculty', icon: '👨‍🏫' },
    { id: 'labs', label: 'Laboratories', icon: '🔬' },
    { id: 'curriculum', label: 'Curriculum', icon: '📚' },
  ];

  return (
    <main className="page-wrapper dept-detail-page">

      {/* Hero */}
      <section className={`dept-detail-hero dept-detail-hero--${dept.color}`}>
        <div className="dept-detail-hero__bg" aria-hidden="true" />
        <div className="dept-detail-hero__inner">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/departments')}
            className="dept-detail-hero__back"
          >
            ← Back to Departments
          </Button>

          <div className="dept-detail-hero__content animate-fade-up">
            <span className="dept-detail-hero__icon">{dept.icon}</span>
            <span className="dept-detail-hero__badge">{dept.code}</span>
            <h1 className="dept-detail-hero__title">{dept.name}</h1>
            <p className="dept-detail-hero__subtitle">
              Government Engineering College, Munger
            </p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="dept-detail-tabs">
        <div className="dept-detail-tabs__inner">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`dept-tab ${activeTab === tab.id ? 'dept-tab--active' : ''}`}
            >
              <span className="dept-tab__icon">{tab.icon}</span>
              <span className="dept-tab__label">{tab.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Content */}
      <section className="dept-detail-content">

        {/* OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="tab-panel animate-fade-up">
            <Card variant="default">
              <div className="card__body">
                <h2 className="tab-panel__heading">About the Department</h2>
                <p className="tab-panel__text">{dept.overview}</p>

                {dept.objectives.length > 0 && (
                  <>
                    <h3 className="tab-panel__subheading">Key Objectives</h3>
                    <ul className="objectives-list">
                      {dept.objectives.map((obj, i) => (
                        <li key={i} className="objectives-list__item">
                          <span className="objectives-list__icon">✓</span>
                          {obj}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </Card>
          </div>
        )}

        {/* VISION & MISSION */}
        {activeTab === 'vision' && (
          <div className="tab-panel animate-fade-up">
            <div className="vision-mission-grid">
              <Card variant="navy">
                <div className="card__body">
                  <div className="vm-icon">🎯</div>
                  <h3 className="card__title">Vision</h3>
                  <p className="card__description">{dept.vision}</p>
                </div>
              </Card>

              <Card variant="outlined">
                <div className="card__body">
                  <div className="vm-icon">🚀</div>
                  <h3 className="card__title">Mission</h3>
                  <p className="card__description">{dept.mission}</p>
                </div>
              </Card>
            </div>
          </div>
        )}

        {/* FACULTY */}
        {activeTab === 'faculty' && (
          <div className="tab-panel animate-fade-up">
            {dept.faculty.length > 0 ? (
              <div className="faculty-grid">
                {dept.faculty.map((f, i) => (
                  <Card key={i} variant="cream" hoverable>
                    <div className="card__body faculty-card">
                      <div className="faculty-avatar">👤</div>
                      <h4 className="faculty-name">{f.name}</h4>
                      <p className="faculty-designation">{f.designation}</p>
                      <a href={`mailto:${f.email}`} className="faculty-email">
                        ✉️ {f.email}
                      </a>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <Card variant="default">
                <div className="card__body">
                  <p className="tab-panel__text">Faculty information will be updated soon.</p>
                </div>
              </Card>
            )}
          </div>
        )}

        {/* LABS */}
        {activeTab === 'labs' && (
          <div className="tab-panel animate-fade-up">
            {dept.labs.length > 0 ? (
              <div className="labs-list">
                {dept.labs.map((lab, i) => (
                  <Card key={i} variant="default" className="lab-card">
                    <div className="card__body">
                      <div className="lab-card__header">
                        <span className="lab-card__icon">🔬</span>
                        <h4 className="lab-card__name">{lab.name}</h4>
                      </div>
                      <p className="lab-card__desc">{lab.desc}</p>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <Card variant="default">
                <div className="card__body">
                  <p className="tab-panel__text">Laboratory information will be updated soon.</p>
                </div>
              </Card>
            )}
          </div>
        )}

        {/* CURRICULUM */}
        {activeTab === 'curriculum' && (
          <div className="tab-panel animate-fade-up">
            {dept.curriculum.length > 0 ? (
              <div className="curriculum-grid">
                {dept.curriculum.map((c, i) => (
                  <Card key={i} variant="cream" hoverable>
                    <div className="card__body curriculum-card">
                      <span className="curriculum-icon">📄</span>
                      <h4 className="curriculum-title">{c.semester}</h4>
                      <div className="curriculum-actions">
                        <a
                          href={`http://gecmunger.org/wp-content/uploads/2023/04/${c.file}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="curriculum-link"
                        >
                          View Syllabus →
                        </a>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <Card variant="default">
                <div className="card__body">
                  <p className="tab-panel__text">Curriculum information will be updated soon.</p>
                </div>
              </Card>
            )}
          </div>
        )}

      </section>

    </main>
  );
}

export default DepartmentDetail;
