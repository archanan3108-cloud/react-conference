import React from 'react';
import './papercall.css';

const engineeringTopics = [
  "Computer Engineering",
  "Electrical & Electronics Engineering",
  "Electronics & Communication Engineering",
  "Architectural Engineering",
  "Agricultural Engineering",
  "Acoustic Engineering",
  "Automotive Engineering",
  "Biomechanics",
  "Biomedical Engineering",
  "Biotechnology",
  "Chemical Engineering",
  "Civil Engineering",
  "Control Engineering",
  "Environmental Engineering",
  "Industrial Engineering",
  "Instrumentation",
  "Mechanical Engineering",
  "Materials Engineering",
  "Nuclear Engineering",
  "Nano Engineering",
  "Petroleum Engineering",
  "Space Engineering",
  "Sports Engineering",
  "Wind Engineering"
];

const managementTopics = [
  "Business Risk",
  "Marketing",
  "Human Resource",
  "International Operational Research",
  "International Business",
  "Trends in Medicine & Radiology"
];

const medicalTopics = [
  "Oral Medicine and Radiology",
  "Oral Pathology",
  "Oral and Maxillofacial Surgery",
  "Prosthodontics",
  "Endodontics",
  "Pedodontics",
  "Periodontics",
  "Community Dentistry",
  "Biochemistry",
  "Biochemical Science",
  "Biochemical Engineering",
  "Environmental Science",
  "Measurement Science",
  "Nutrition",
  "Soil Science",
  "Horticulture"
];

const CallForPapers = () => {
  return (
    <div className="call-for-papers-container" id='call_paper'>
      <h1 className="call-title">Call for Papers</h1>
      <p className="call-desc">
        Topics of interest for submission include, but are not limited to:
      </p>
      <div className="call-topic-columns">
        <div className="call-column">
          <h4>Engineering & Technology</h4>
          <ul>
            {engineeringTopics.map((topic, idx) => (
              <li key={idx}>{topic}</li>
            ))}
          </ul>
        </div>
        <div className="call-column">
          <h4>Management</h4>
          <ul>
            {managementTopics.map((topic, idx) => (
              <li key={idx}>{topic}</li>
            ))}
          </ul>
        </div>
        <div className="call-column">
          <h4>Medical and Science</h4>
          <ul>
            {medicalTopics.map((topic, idx) => (
              <li key={idx}>{topic}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="call-contact">
        <span>📧 Submit your papers to </span>
          <a href="mailto:iccetconf@gmail.com" className="contacts-link">iccetconf@gmail.com</a>
      </div>
    </div>
  );
};

export default CallForPapers;
