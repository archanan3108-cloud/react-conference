import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaEdit } from "react-icons/fa";
import './questionsanswer.css';

const faqs = [
  {
    q: "Will all papers be published in International Journal?",
    a: "Yes, all registered papers will be published in international journals like Scopus indexed, ANNA University Annexure 1, SCIE Journal, Web of Science. Authors can choose the journal of their wish, with an additional fee charged."
  },
  {
    q: "In case we cannot make our presence(absent) in the conference?",
    a: "Yes, absence is acceptable. Participants can mention the same in the registration form. In such cases, the conference certificate and proceedings will be sent to the respective participants by post."
  },
  {
    q: "Who are eligible for Video Presentation?",
    a: "Authors abroad are eligible, and authors in India having special permission (refer registration form sent during paper acceptance) from the ICCET 2026 team."
  },
   {
    q: "Who is a Registered Author?",
    a: "The author who submits the registration form and pays the registration fee."
  },
  {
    q: "What will be the presentation timing?",
    a: "Each presentation will have a total of 12 minutes for the presentation and 3 minutes for the question-and-answer session."
  },
  {
    q: "What should the participants bring?",
    a: "Participants should bring a copy of their college ID card and presentation in a pen drive (preferably) or CD."
  }
 
];

function Accordion({faqs}) {
  const [openIndex, setOpenIndex] = useState(null);
  function handleClick(idx) {
    if (openIndex === idx) {
      setOpenIndex(null); // close if currently open
    } else {
      setOpenIndex(idx);  // open it if not already
    }
  }

  return (
    <div className="qa-column" id="FAQ">
      {faqs.map((faq, idx) => (
        <div className={`qa-card ${openIndex === idx ? 'open' : ''}`} key={idx}>
          <div className="qa-question" onClick={() => handleClick(idx)}>
            <span className="qa-icon">
              <FaEdit />
            </span>
            <span>{faq.q}</span>
            <span className="qa-arrow">{openIndex === idx ? "▾" : "▸"}</span>
          </div>
          {faq.a && openIndex === idx && (
            <div className="qa-answer">{faq.a}</div>
          )}
        </div>
      ))}
    </div>
  );
}

function AskQuestionSection() {
  return (
    <div className="faqcontact-card">
      <div className="faq-side">
         <div className="faq-section">
      <h1 className="faq-title">FAQ</h1>
      <div className="contacts-divider" />
     {/*<div className="faq-desc"></div>
      <div className="faq-underbar"></div> */}
      <div className="qa-row">
        <Accordion faqs={faqs} />
      </div>
      
    </div>
  </div>
        <div className="divider" />

  <div className="contact-side" id="Contacts">
    <div className="contacts">
        <h2 className="contacts-title" >Contacts</h2>
        <div className="contacts-divider" />
        <div className="contacts-ctext">
          Here's where you can reach us:
          <div className="contacts-item">
            <FaPhoneAlt className="contacts-icon" />
            <span className="label">Mobile No:</span>
            <a href="tel:09344037078" className="contacts-link">09344037078</a>
          </div>
          <div className="contacts-item">
            <FaEnvelope className="contacts-icon" />
            <span className="label">Email:</span>
            <a href="mailto:iccetconf@gmail.com" className="contacts-link">iccetconf@gmail.com</a>
          </div>
        </div>
      </div>
  </div>
     
      
    </div>
    
  );
}

export default AskQuestionSection;







