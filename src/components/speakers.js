import React from "react";
import "./speakers.css";

const speakers = [
  {
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
    name: "Dr. Aisha Rahman",
    title: "Keynote — Global Education Futures",
  },
  {
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
    name: "Prof. Miguel Santos",
    title: "Higher Ed Policy",
  },
  {
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
    name: "Ms. Li Wei",
    title: "EdTech Innovation",
  },
   
  {
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
    name: "Ms. Li Wei",
    title: "EdTech Innovation",
  },
  {
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
    name: "Dr. Aisha Rahman",
    title: "Keynote — Global Education Futures",
  },
  {
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
    name: "Prof. Miguel Santos",
    title: "Higher Ed Policy",
  },
  {
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
    name: "Ms. Li Wei",
    title: "EdTech Innovation",
  },
  {
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
    name: "Prof. Miguel Santos",
    title: "Higher Ed Policy",
  }, 
];

function SpeakersSection() {
  return (
    <div id="Speakers">
      <section className="speakers-section">
      
      <h1 className="speakers-title">Our Speakers</h1>
      <div className="speakers-desc">
        
      </div>
      <div className="speakers-grid">
        {speakers.map((sp, idx) => (
          <div className="speaker-card" key={idx}>
            <div className="speaker-img-wrap">
              <img src={sp.img} alt={sp.name} className="speaker-img" />
            </div>
            <div className="speaker-name">{sp.name}</div>
            <div className="speaker-title">{sp.title}</div>
          </div>
        ))}
      </div>
    </section>
    </div>
    
  );
}

export default SpeakersSection;
