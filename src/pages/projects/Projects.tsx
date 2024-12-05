import React from "react";
import "./Projects.scss";
import { About } from "../../pages/projects/About";
import img33 from "./work.png";
import img23 from "./image 10.png";
import img24 from "./image 9.png";

export function Projects() {
  const projects = [
    {
      title: "Promotional landing page for our favorite show",
      description:
        "Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.",
      year: "2023",
      role: "Front-end Developer",
      liveDemoLink: "#live-demo",
      githubLink: "#see-github",
      image: img33,
    },
    {
      title: "Blog site for World News",
      description:
        "Mastered CSS Grid complexities in building an innovative news homepage, navigating intricate design decisions for a seamless user experience. Leveraged the challenge to enhance skills in  front-end development.",
      year: "2023",
      role: "Front-end Developer",
      liveDemoLink: "#live-demo",
      image: img23,
    },
    {
      title: "E-commerce product page",
      description:
        "Successfully crafted an engaging product page featuring a dynamic lightbox gallery and seamless cart functionality, showcasing proficiency in JavaScript development.",
      year: "2022",
      role: "Front-end Developer",
      liveDemoLink: "#live-demo",
      githubLink: "#see-github",
      image: img24,
    },
  ];

  return (
    <div className="projects">
      <div className="heading-projects">
        <h1>Featured Projects</h1>
        <p>Here are some of the selected projects that showcase my passion for front-end development.</p>
      </div>
      {projects.map((project, index) => (
        <div className="project-item" key={index}>
          {/* Left: Image Section */}
          <div className="project-image">
            <img src={project.image} alt={`${project.title} Thumbnail`} />
          </div>

          {/* Right: Details Section */}
          <div className="project-details">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-info">
              <h4>Project Info</h4>
              <ul>
                <li>
                  <strong>Year:</strong> {project.year}
                </li>
                <li>
                  <strong>Role:</strong> {project.role}
                </li>
              </ul>
            </div>
            <div className="project-links">
              <a href={project.liveDemoLink} className="live-demo">
                Live Demo
              </a>
              <a href={project.githubLink} className="see-github">
                See GitHub
              </a>
            </div>
          </div>
        </div>
      ))}

        <div className="about-section">
        <About />
        </div>
    </div>
  );
}
