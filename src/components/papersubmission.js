import React, { useState } from 'react';
import ConferenceRegistrationModal from './register';
import './papersubmission.css';

const registrationData = [
  {
    category: "UG, PG Student / Research scholar / Faculty / Industry Participant (VIRTUAL PRESENTATION - 1 member)",
    national: "Rs. 1800",
    international: "USD 60"
  },
  {
    category: "UG, PG Student / Research scholar / Faculty / Industry Participant (VIRTUAL PRESENTATION - Batch can be 5 to 7 members)",
    national: "Rs. 2200",
    international: "USD 65"
  },
  {
    category: "UG, PG Students / Research scholars / Faculties / Industry Participants (VIRTUAL PRESENTATION, Batch can be 5 to 7 members)",
    national: "Rs. 2500",
    international: "USD 70"
  },
  {
    category: "UG, PG Students / Research scholars / Faculties / Industry Participants (Participants willing to attend the Conference at College)",
    national: "Rs. 2200",
    international: "USD 70"
  },
  {
    category: "UG, PG Students / Research scholars / Faculties / Industry Participants (Participants willing to attend the Conference at College. Batch can be 2 to 5 members)",
    national: "Rs. 2950",
    international: "USD 75"
  },
  {
    category: "Visitors",
    national: "Rs. 1000",
    international: "USD 50"
  },
];
 



function PaperSubmission(){
  const [showModal, setShowModal] = useState(false);
  return(
    <div className="paper-submission-container" id='Paper_Submission'>
    <h2 className="submission-title">Paper Submission & Registration</h2>
    <div className="submission-methods section-box">
      <h3 className="section-header">Submission Methods</h3>
      <ol>
        <li>
          <a href="#" className="submit-link" onClick={(e) => { e.preventDefault(); setShowModal(true); }}>
  Click here to submit the papers</a>
  <ConferenceRegistrationModal open={showModal} onClose={() => setShowModal(false)} />
               or
          <span className="mail-box"> iccetconf@gmail.com</span>
        </li>
        <li>
          Proceedings of <strong>ICCET 2026</strong> will be published with ISBN number. All selected papers will be published in Google Scholar, SCIE, Scopus, Web of Science, Anna University Annexure 1 with additional fee.<br />
          <span className="note-text">
            *Note: The conference secretary will contact you within 3 working days of submission with your paper ID and feedback. If you don’t receive feedback, please follow up after 3 days.
          </span>
        </li>
      </ol>
    </div>

    <div className="template-section section-box">
      <h3 className="section-header">Template</h3>
      <span className="template-desc">Please follow the template to format your paper.</span>
      <a href="/Call-for-Papers.htm" download className="download-btn"> Download</a>
      
    </div>

    <div className="registration-section section-box">
      <h3 className="section-header">Registration</h3>
      <table className="reg-table">
        <thead>
          <tr>
            <th className="border-left">Category</th>
            <th>National Participants</th>
            <th>International Participants</th>
          </tr>
        </thead>
        <tbody>
          {registrationData.map((row, idx) => (
            <tr key={idx}>
              <td className="border-left">{row.category}</td>
              <td>{row.national}</td>
              <td>{row.international}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="policy-section section-box">
      <h4 className="policy-header">Policy on Dual Submission</h4>
      <span className="policy-text">
        Submissions that are identical (or substantially similar) to versions previously published or under review elsewhere are not accepted for ICCETM 2026 and violate our dual submission policy.
      </span>
      <h4 className="policy-header">Registration Instructions</h4>
      <span className="policy-text">
        For Authors: The registration procedure details will be included in your acceptance letter.
      </span>
    </div>
  </div>
  );
}


export default PaperSubmission;
