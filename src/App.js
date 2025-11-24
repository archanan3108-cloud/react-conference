import React, { useState } from "react";

import './App.css';
import HeroSection from './components/homepage';
import SchedulePage from './components/schedule';
import AskQuestionSection from './components/questionsanswer';
import SpeakersSection from './components/speakers';
import ConferenceInfo from './components/aboutus';
import ProgramCommittee from './components/programcommittee';
import CallForPapers from './components/papercall';
import JournalPublication from "./components/publications";
import PaperSubmission from "./components/papersubmission";
import ScrollToTopButton from "./components/scroll";


function App() {

  return (
    <div className='home'>
      <HeroSection />
      < ConferenceInfo />
      <SpeakersSection />
      <SchedulePage />
      <ProgramCommittee/>
      <CallForPapers/>
      <PaperSubmission/>
      <JournalPublication/>
      <AskQuestionSection/>
      <ScrollToTopButton/>
    </div>    
  );
}

export default App;





