import React from 'react';
import './programcommittee.css';

const ProgramCommittee = () => {
  return (
    <div className="program-committee-container" id='Pgm_cmtt'>
      <h1 className="committee-title">Program Committee</h1>
      <div className="committee-content">
        <div className="committee-left">
          <div>
            <h4 className="committee-heading">CHIEF PATRON</h4>
            <p>Mrs. S. TAMILARASI, Correspondent, VVEI</p>
          </div>
          <div>
            <h4 className="committee-heading">PATRONS</h4>
            <ul>
              <li>Mrs. G. MALLIGA, Secretary, VVEI</li>
              <li>Mr. M. MOORTHY, President, VVEI</li>
              <li>Mrs. GIRJA DEVI, Managing Trustee, VVEI</li>
              <li>Mrs. VASUKI, Managing Trustee, VVEI</li>
            </ul>
          </div>
          <div>
            <h4 className="committee-heading">CONFERENCE CHAIR</h4>
            <p>Dr. K. POORANAPRIYA, Principal, VVCET</p>
          </div>
          <div>
            <h4 className="committee-heading">CONVENER</h4>
            <p>Dr. K. POORANAPRIYA, Principal, VVCET</p>
          </div>
          <div>
            <h4 className="committee-heading">ADVISORY COMMITTEE</h4>
            <p>[Add members here]</p>
          </div>
        </div>
        <div className="committee-right">
          <div>
            <h4 className="committee-heading">COORDINATORS</h4>
            <ul>
              <li>Mr. T. KARTHIKEYAN, IQAC CO-ORDINATOR, VVCET</li>
              <li>Dr. S. ROSHNI, HOD/CSE, VVCET</li>
              <li>Dr. G. AARTHI, HOD/MCA, VVCET</li>
              <li>Dr. G. SOMATHI, Professor/MCA, VVCET</li>
              <li>Mr. S. SIVASAMY, HOD/AIDS, VVCET</li>
              <li>Mr. G. RAVISHANKAR, HOD/MBA, VVCET</li>
              <li>Mrs. M. REVATHI, HOD/ECE, VVCET</li>
              <li>Mr. P. HEMANTH, AP/ECE, VVCET</li>
              <li>Mr. K. P. ARAVINDAN, Professor/MECH, VVCET</li>
              <li>Mr. B. RAVI, HOD/PHYSICS, VVCET</li>
              <li>Mr. R. KARPAGARAJAN, HOD/CHEMISTRY, VVCET</li>
            </ul>
          </div>
          <div>
            <h4 className="committee-heading">CO-CONVENER</h4>
            <ul>
              <li>Dr. G. VETRICHELVAN, HOD/MECH, VVCET</li>
              <li>Dr. KUMAR, HOD/EEE, VVCET</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCommittee;
