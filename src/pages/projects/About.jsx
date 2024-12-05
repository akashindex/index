import React from "react";
import "./Projects.scss";
export function About() {
  return (
    <div className="about-section">

      <section className="about-me">
        <div className="aboutme-left">
          <h2>ABOUT ME</h2>
        </div>
        <div className="aboutme-right">
          <h3>
            I am a front-end developer based in Sydney. Has Mechanical Engineering background.
          </h3>
          <p>
            I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring React.js, Webflow, and a bit of Designing. While I am not programming, I enjoy playing football, photography, and playing Valorant. Learning more to improve skill.
          </p>
          <a href="#more-about-me" className="more-about-me">MORE ABOUT ME</a>
        </div>
      </section>

    </div>
  );
}