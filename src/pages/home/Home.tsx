import React, { useState } from "react";
import "./Home.scss";
import img from "./galway-website-design.png"

export function Home() {
  return (
    <div className="home">
      <div className="home-about">
        <h1 className="colgroup-Heading">Hi, I am Akash Ali</h1>
        <p className="colgroup-text">A Software Engineer Enthusiastic on 3D development</p>
        <button className="btnn">Lets connect</button>
      </div>
      <div className="home-main">
        <div className="cards-about">
          <div className="card-1">
            <span className="image">
              <img src={img} alt="" />
            </span>
            <span className="text">
              <h2 className="card-heading">Website Design</h2>
              <p className="colgroup-text">Our approach to website design is to create a website that strengthens your company’s brand while ensuring ease of use and simplicity for your audience.</p>
            </span>
            <button className="btnn-slash">learn more</button>
          </div>
          <div className="card-1">
            <span className="image">
              <img src={img} alt="" />
            </span>
            <span className="text">
              <h2 className="card-heading">Website Design</h2>
              <p className="colgroup-text">Our approach to website design is to create a website that strengthens your company’s brand while ensuring ease of use and simplicity for your audience.</p>
            </span>
            <button className="btnn-slash">learn more</button>
          </div>
          <div className="card-1">
            <span className="image">
              <img src={img} alt="" />
            </span>
            <span className="text">
              <h2 className="card-heading">Website Design</h2>
              <p  className="colgroup-text">Our approach to website design is to create a website that strengthens your company’s brand while ensuring ease of use and simplicity for your audience.</p>
            </span>
            <button className="btnn-slash">learn more</button>
          </div>
        </div>
      </div>
    </div>

  );
}
