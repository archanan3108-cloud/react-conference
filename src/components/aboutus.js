import React from 'react';
import './aboutus.css'; 

const ConferenceInfo = () => {
  return (
    <div id='ICCET'>
      <div className="conference-container" id='ICCET'>
      <div className="about-section">
        <h1>About the Conference</h1>
        <p>
          International conference on Cognitive Informatics Engineering and Technology (ICCET) will be held on 28th and 29th March 2026
          at Vidyaa Vikas College of Engineering and Technology, Tiruchengode, India. ICCET will bring together innovative academics and industrial experts
          in the field of Science, Engineering, Technology and Management to a common forum. This International conference presents a unique opportunity
          for Research Scholars, Students, Academicians to actively engage with leading technology experts. Attendees can anticipate engaging discussions,
          presentations, and demonstrations of cutting-edge technologies, fostering collaboration and knowledge-sharing. Hosted by VVCET, a renowned Institute
          dedicated to educational research, the conference promises to be a valuable platform for fostering innovation and addressing contemporary challenges
          in Engineering and Technology.
        </p>
        <ul>
          <li>Keynotes by world-class education leaders</li>
          <li>Hands-on workshops and demo booths</li>
          <li>Networking sessions and grants showcase</li>
        </ul>
        <button className='schd_btn' onClick={() => window.location.hash = 'Schedule'}>
          See Schedule
        </button>
      </div>
      <div className="attendees-section">
        <h1>Who should attend?</h1>
        <ul>
          <li>University leaders & deans</li>
          <li>K–12 policymakers</li>
          <li>EdTech startups & investors</li>
          <li>Researchers & graduate students</li>
        </ul>
      </div>
      
      
    </div>


    <div className='aboutsection' id='vidya'>
        <h1>About VVCET</h1>
        <p><span >VIDYAA VIKAS COLLEGE OF ENGINEERING AND TECHNOLOGY(VVCET) </span> were established in the year 2007 by Vidyaa Vikas Educational and Charitable Trust. The management comprises of Mrs.S.Tamilarasi Correspondent, Mrs.G.Malliga Secretary, Mr.M.Moorthy, President, the following managing trustees Mrs.Girja Devi, Mrs.Vasuki And the following Founders Dr.S.Gunasekaran, Dr. T. O. Singaravel, Dr. S. Ramalingam and Dr. M.Muthusamy is a unit of Vidyaa Vikas Educational Institutions, a premier education provider in Tiruchengode, having 11 Institutions, 17,000students, offering various academic programmes. The College of Engineering and Technology has entered into 17th year of its glorious service to the student community. The college imparts quality education and continuous efforts were made in upholding quality practices. At present the college offers 6 undergraduate programs and 4 postgraduate programs. The under graduate programs are B.E (CSE, ECE, EEE, MECH, CSE(SC)) and B.Tech (AIDS) and post graduates programs are M.E.(CSE, ED), MBA and MCA. All thecourses are approved by AICTE, Delhi and affiliated by Anna University, Chennai. The following UG coursesB.E.(CSE, EEE, ECE) are permanently affiliated by Anna University, Chennai. Our college obtains a status of 2 (f) and 12(B) from UGC. Our college is focusing on overall development on the students through participationin co-curricular and extracurricular activities. The college is known for its state of- the-art infrastructureconsisting of advanced laboratories, well stacked library and ICT facilities.

The research cell cultivates a research-oriented culture among both faculty and students by Organizing diverse workshops, seminars, training programs, and special meetings designed to promote research endeavours. There is a strong emphasis on encouraging faculty and students to actively engage in the preparation and writing of research-oriented papers as part of this research initiative. Through the R&D Cell, 13 Research programs are conducted based on ‘Research paper writing – Methodologies, Tools, and Guidelines’, ‘Critical Thinking and Problem Solving’ & ‘PCB Design Fundamentals Proto typing and the PCB Design Flow’.</p>
<h1>Vision</h1>
      <p>“To be a world class Engineering Institution in leading technological and socioeconomic development of the country by enhancing the global competitiveness of technical manpower and by ensuring high quality technical education through dissemination of knowledge, insights and intellectual contributions”</p>
      <h1>Mission</h1>
      <p>To offer Value based Education to prepare the students to acquire engineering knowledge, to make them fit for jobs, to serve the nation and to mould them as useful citizens with exemplary character.</p>
<a href="https://vvcet.ac.in/">Readmore...</a>      
      </div>
    </div>
    
  );
};

export default ConferenceInfo;
