import React, { useState } from 'react';

import ConferenceRegistrationModal from './register';
import './publications.css';



const JournalPublication = () => {

  const [showModal, setShowModal] = useState(false);
  return (
    <div >
          <div className="journal-publication-container" id='Publication'>
      <h2 className="journal-title">Journal Publication</h2>
      <p className="journal-desc">
        Publication Opportunity: All registered papers will be published in an international conference proceeding (Having ISBN Number) Journal Publication Opportunity: All registered and extended versions of the papers will be published in related reputed International Journals. Get your paper published in Scopus, Web of Science, SCI, and Annexure 1 & 2 Indexed Journals and Book Chapters with nominal extra charges. This conference is Scopus Indexed Journals Associated Conference.
      </p>
      <div className="journal-links">
        <a  className="journal-link" href="/journal_list_2026.htm" download>Click here (PDF format)</a> to view the list of journals.<br />
        <a href="/journal_list_2026.docx" className="journal-link" download>Click here (DOC format)</a> to view the list of journals.
      </div>
      <hr />
      <h3 className="journal-subtitle">Previous Year Journal Publication List</h3>
      <div className="journal-links">
        <a href="/journal_2025.htm" download className="journal-link">
          Click here (PDF format)
        </a>
        to view list of <span className="highlight-box">Papers published in ICRETm 2025</span><br />
        <a href="/journal_2025.docx" className="journal-link" download>
          Click here (DOC format)
        </a>
        to view list of <span className="highlight-box">Papers published in ICRETm 2025</span>
      </div>

       <div className="ready-banner">
    <span className="ready-text">
      Ready to join delegates from 50+ countries?<br />
      Reserve your seat
    </span>
    <button className="register-btn" onClick={() => setShowModal(true)}>
            Register
          </button>
  </div>
    </div>
    <ConferenceRegistrationModal open={showModal} onClose={() => setShowModal(false)} />
    </div>
    
  );
};

export default JournalPublication;
