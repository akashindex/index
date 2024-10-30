import React from "react";
import "./Home.scss";
import img1 from "./photo-1601049676869-702ea24cfd58.avif";
import img2 from "./photo-1613235788366-270e7ac489f3.avif";
import img3 from "./photo-1673847401561-fcd75a7888c5.avif";


const cardsData = [
  {
    title: "Website Design",
    img: img1,
    text: "Our approach to website design is to create a website that strengthens your company’s brand while ensuring ease of use and simplicity for your audience.",
    tags: ["Branding", "Packaging"],
  },
  {
    title: "Front-End Development",
    img: img2,
    text: "We build dynamic, interactive front-end applications that enhance user experience and accessibility.",
    tags: ["Development", "UI/UX"],
  },
  {
    title: "Performance Optimization",
    img: img3,
    text: "Our performance optimization techniques ensure fast load times and smooth user experience.",
    tags: ["SEO", "Analytics"],
  },
];

export function Home() {
  return (
    <div className="home">
      <div className="home-about">
        <h1 className="colgroup-Heading">Hi, I am Akash Ali</h1>
        <p className="colgroup-text">A Software Engineer Enthusiastic on 3D development</p>
        <button className="btnn-slash">Let’s connect</button>
      </div>
      <div className="home-main">
        {cardsData.map((card, index) => (
          <div key={index} className="card">
            <span className="image">
              <img src={card.img} alt={card.title} />
            </span>
            <span className="text">
              <h2 className="cardHeading">{card.title}</h2>
              <p className="colgroupText">{card.text}</p>
            </span>
            <ul className="tags">
              {card.tags.map((tag, i) => (
                <li key={i} className="tag">{tag}</li>
              ))}
            </ul>
            <button className="btnn-slash">Learn more</button>
          </div>
        ))}
      </div>
    </div>
  );
}

