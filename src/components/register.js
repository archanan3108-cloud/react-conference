import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./register.css";

function ConferenceRegistrationModal({ open, onClose }) {
  const form = useRef();
  //const fileInputRef = useRef(); 
  const [filename, setFilename] = useState("");
  //const [selectedFile, setSelectedFile] = useState("");


  if (!open) return null;

  // Handle file selection
 {/* const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 50000) {
        alert('File size must be less than 50KB');
        setFilename(file.name); // Set filename
        fileInputRef.current.value = null; // Clear file input
      } else {
        setFilename(file.name);
      }
    }
  }; */}
   // Handle file selection
  {/*const handleFileChange = (e) => {
  if (e.target.files.length > 0) {
    const file = e.target.files[0];
    if (file.size > 50000) { // 50KB limit
      alert('File size must be less than 50KB');
      setSelectedFile(file.name); // Still store the filename
      // Optionally clear the input if you don't want to allow re-upload
      e.target.value = null;
    } else {
      setSelectedFile(file.name); // Acceptable file, display filename
    }
  }
}; */}
 {/*
 const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,    // Access variable without quotes
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,   // Access variable without quotes
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID        // Access variable without quotes
      )
      .then(
        (result) => {
          console.log('Email sent!', result.text);
          alert('Email sent successfully!');
        },
        (error) => {
          console.log('Error:', error.text);
          alert('Email not sent successfully!');
        }
      );
}; */}



  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_g0ernk2",    // replace with your EmailJS Service ID
        "template_zivdji8",   // replace with your EmailJS Template ID
        form.current,
        "R6A9vtFoEU7YZRRLo"   // replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          // Success - show a message or clear form
          console.log('Email sent!', result.text);
          alert('Email sent successfully!');
        },
        (error) => {
          // Failure - show error message
          console.log('Error:', error.text);
          alert('Email not sent successfully!');
        }
      );
  }; 

  return (
    <div className="modal-overlay">
      <div className="modal-card small">
        <button className="modal-close" onClick={onClose}>×</button>
        <h2 className="modal-title">Conference Registration</h2>
        <p className="modal-desc">
          Fill in your details to register for the conference.
        </p>
        <form className="modal-form" ref={form} onSubmit={sendEmail}>
          <input className="modal-input" type="text" name="user_name" placeholder="Full Name" required />
          <input className="modal-input" type="email" name="user_email" placeholder="Email" required />
          <input className="modal-input" type="email" name="user_altemail" placeholder="Alternative Email" required />
          <input className="modal-input" type="number" name="user_number" placeholder="Mobile Number" required />
          <input className="modal-input" type="text" name="user_institute" placeholder="Institution / Organization"  required />
          <input className="modal-input" type="text" name="user_country" placeholder="Country" required />

          <select className="modal-select" name="user_category" required>
            <option value="">-- Select Category --</option>
            <option>UG/PG Student</option>
            <option>Research Scholar</option>
            <option>Faculty/Professor</option>
            <option>Industry Participant</option>
            <option>Visitor</option>
          </select>
          <div className="modal-file">
            Upload File&nbsp;
             <input type="file"  accept=".pdf"/>  
            {/*<input type="file" name="user_file" accept=".pdf" ref={fileInputRef} 
            onChange={handleFileChange}/>  */}
           
          </div>
          {/*<input type="hidden" name="uploaded_filename" value={filename} readOnly /> */}
          <button className="modal-submit">Submit Registration</button>
        </form>
      </div>
    </div>
  );
}

export default ConferenceRegistrationModal;
