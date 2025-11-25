import React, { useEffect, useState } from "react";

import img1 from './conference_image.jpg';
//import img2 from './conference_image1.jpg';
//import img3 from './conference_image2.jpg';
import img2 from './col7.jpg';
import img3 from './col8.jpg';
import myImage from './globe.jpg';
import './homepage.css'; 

function CalendarIcon({ size = 38, color = "#4666FF" }) {
  return (
    <svg
      height={size}
      width={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: 'block' }}
    >
      <rect x="3" y="4" width="18" height="16" rx="3" fill="none" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}


function CountdownTimer() {
  const targetDate = new Date("2026-03-28T11:00:00");
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00"
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const totalSeconds = Math.max(0, Math.floor((targetDate - now) / 1000));
      const days = Math.floor(totalSeconds / (3600 * 24));
      const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
      
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0")
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown-section">
      <h2 className="countdown-title">EVENT WILL START IN</h2>
      <div className="countdown-timer">
        <div className="countdown-unit">
          <div className="countdown-number">{timeLeft.days}</div>
          <div className="countdown-label">DAYS</div>
        </div>
        <div className="countdown-unit">
          <div className="countdown-number">{timeLeft.hours}</div>
          <div className="countdown-label">HOURS</div>
        </div>
        <div className="countdown-unit">
          <div className="countdown-number">{timeLeft.minutes}</div>
          <div className="countdown-label">MINUTES</div>
        </div>
        <div className="countdown-unit">
          <div className="countdown-number">{timeLeft.seconds}</div>
          <div className="countdown-label">SECONDS</div>
        </div>
      </div>
      {/*<button className="countdown-btn">ADD TO MY CALENDER</button> */}
    </div>
  );
}
const images = [img1, img2, img3];

function HeroImageSlider() {
  const [current, setCurrent] = useState(0);
  
  const nextImage = () => {
    setCurrent((current + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  return (
    <div className="evently-hero-right">
      <button className="hero-arrow left" onClick={prevImage}>&lt;</button>
      <img src={images[current]} className="hero-img" alt="Event" />
      <button className="hero-arrow right" onClick={nextImage}>&gt;</button>
    </div>
  );
}


const HeroSection = () => {
  {/*
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = (e) => {
    e.preventDefault(); // Prevent anchor navigation
    setShowDropdown((prev) => !prev); // Toggle dropdown
  };
  function handleDropdown() {
    setShowDropdown((prev) => !prev);
  }  */}
   
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdown = dropdownName => {
    setOpenDropdown(prev =>
      prev === dropdownName ? null : dropdownName
    );
  };
const [menuOpen, setMenuOpen] = useState(false);
  return(
     <div className="evently-hero-wrapper">
      <nav className="evently-navbar">
        <div className="logo">
          <img src={myImage} alt="Globe" className="globe_image" />
          {/*<CalendarIcon /> */}
          {/*<span role="img" aria-label="calendar">📅</span> */}
          <span className="brand">ICCET 2026</span>
        </div>
         <button
        className="navbar-toggle"
        onClick={() => setMenuOpen((open) => !open)}
      >
        &#9776; {/* Unicode hamburger icon */}
      </button>
        <ul className={menuOpen ? "active" : ""}>
          <li style={{ position: "relative" }}>
          <a href="#" onClick={e => {
                e.preventDefault();
                handleDropdown("about");
              }}
              style={{ cursor: "pointer" }}>About
              <span style={{fontSize: "20px"}}>&#9662;</span></a>
            {openDropdown === "about" && (
              <ul className="dropdown-menu">
                <li>
                  <a href="#ICCET" onClick={() => setOpenDropdown(null)}>
                    ICCET 2026
                  </a>
                </li>
                <li>
                  <a href="#vidya" onClick={() => setOpenDropdown(null)}>
                    Vidya vikas
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li><a href="#Speakers">Speakers</a></li>
          <li><a href="#Pgm_cmtt">Program committee</a></li>
          <li><a href="#call_paper">Call for papers</a></li>
          <li style={{ position: "relative" }}>
            <a
              href="#"
              onClick={e => {
                e.preventDefault();
                handleDropdown("papersubmission");
              }}
              style={{ cursor: "pointer" }}
            >
              Paper Submission <span style={{fontSize: "20px"}}>&#9662;</span>
            </a>
            {openDropdown === "papersubmission" && (
              <ul className="dropdown">
                <li>
                  <a href="#Paper_Submission" onClick={() => setOpenDropdown(null)}>
                    Registration
                  </a>
                </li>
              </ul>
            )}
          </li>

          {/*<li style={{ position: "relative" }}><a href="#"
            onClick={e => {
              e.preventDefault();
              handleDropdown();
            }}
            style={{ cursor: 'pointer' }} > Paper Submission</a>
          {showDropdown && (
            <ul className="dropdown-menu">
              <li><a href="#Paper_Submission">Registration</a></li>
            </ul>
          )}
        </li> */}
          
          <li><a href="#">Accepted paper List</a></li>
          <li><a href="#Publication">Journal Publication</a></li>
          <li><a href="#FAQ">FAQ</a></li>
          <li><a href="#Contacts">Contact Us</a></li>
        </ul>
      </nav>
      
      <div className="evently-hero-content" >
        <div className="evently-hero-left">
          <div className="evently-hero-left-inner">
            <h1>International Conference on Cognitive Informatics Engineering & Technology  2026</h1>
            {/*<button>Buy Ticket</button> <span></span> <span></span> 
             <button>Register</button> */}
             <p className="para"><span>Date:</span> March 28th & 29th, 2026 (Saturday & Sunday)</p>
             <p className="para"><span>Location: </span> Vidya Vikas College of Engineering and Technology,Tiruchengode</p>
          </div>
        </div>
       <HeroImageSlider />
        {/*<div className="evently-hero-right">
  {images.map((src, i) => (
    <img key={i} src={src} className="hero-img" />
  ))}
</div> */}
     </div>

    {/*  static countdown with the function */}
    <CountdownTimer />


    </div>
  );
 
};

export default HeroSection;
