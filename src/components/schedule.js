import React, { useState } from "react";
import './schedule.css'


const speakersData = [
  // 1st Day - Example speakers
  [
    {
      name: "Michel Smith",
      topic: "Creating New Business",
      time: "08:20 Am - 10:30Am",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      img: "https://preview.uideck.com/items/evently/assets/img/schedule/schedule-1.png"
    },
    {
      name: "David Smith",
      topic: "Creating New Business",
      time: "08:20 Am - 10:30Am",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      img: "https://preview.uideck.com/items/evently/assets/img/schedule/schedule-2.png"
    },
    {
      name: "Adam Smith",
      topic: "Creating New Business",
      time: "08:20 Am - 10:30Am",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      img: "https://preview.uideck.com/items/evently/assets/img/schedule/schedule-1.png"
    },
    {
      name: "John Doe",
      topic: "Creating New Business",
      time: "08:20 Am - 10:30Am",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      img: "https://preview.uideck.com/items/evently/assets/img/schedule/schedule-2.png"
    },
    {
      name: "Anne Doe",
      topic: "Creating New Business",
      time: "08:20 Am - 10:30Am",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      img: "https://preview.uideck.com/items/evently/assets/img/schedule/schedule-1.png"
    },
    {
      name: "Donal Smith",
      topic: "Creating New Business",
      time: "08:20 Am - 10:30Am",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      img: "https://preview.uideck.com/items/evently/assets/img/schedule/schedule-2.png"
    },
  ],
  // 2nd Day - Different speakers
  [
    {
      name: "Priya Patel",
      topic: "Scaling Startups",
      time: "10:40 Am - 12:00Pm",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      img: "https://preview.uideck.com/items/evently/assets/img/schedule/schedule-3.png"
    },
    {
      name: "Rahul Verma",
      topic: "Digital Marketing Trends",
      time: "10:40 Am - 12:00Pm",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      img: "https://preview.uideck.com/items/evently/assets/img/schedule/schedule-4.png"
    },
    {
      name: "Nina Shah",
      topic: "The Future of Tech",
      time: "10:40 Am - 12:00Pm",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      img: "https://preview.uideck.com/items/evently/assets/img/schedule/schedule-3.png"
    },
    {
      name: "Alex Kim",
      topic: "Funding Your Idea",
      time: "10:40 Am - 12:00Pm",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      img: "https://preview.uideck.com/items/evently/assets/img/schedule/schedule-4.png"
    },
    {
      name: "Sara Lee",
      topic: "Building Teams",
      time: "10:40 Am - 12:00Pm",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      img: "https://preview.uideck.com/items/evently/assets/img/schedule/schedule-3.png"
    },
    {
      name: "Vikram Singh",
      topic: "Product Launch Success",
      time: "10:40 Am - 12:00Pm",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      img: "https://preview.uideck.com/items/evently/assets/img/schedule/schedule-4.png"
    },
  ],
 
];

function ConferenceSchedule() {
  const [selectedDay, setSelectedDay] = useState(0);

  return (
    <div className="schedule-container" id="Schedule">
      <h1 className="schedule-title">Conference Schedule</h1>
      
      <div className="schedule-tabs">
        {[
          "1st Day 28 March, 2026",
          "2rd Day 29 March, 2026",
        ].map((label, idx) => (
          <button
            key={idx}
            className={`schedule-tab ${selectedDay === idx ? "active" : "inactive"}`}
            onClick={() => setSelectedDay(idx)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="conference-grid">
        {speakersData[selectedDay].map((speaker, idx) => (
          <div key={idx} className="conference-card">
            <img
              src={speaker.img}
              alt={speaker.name}
              className="conference-avatar"
            />
            <div className="conference-info">
              <h2>{speaker.topic}</h2>
              <div className="conference-details">
                <span className="speaker-name">{speaker.name}</span>
                <span className="speaker-time">{speaker.time}</span>
              </div>
              <p className="conference-desc">{speaker.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ConferenceSchedule;
