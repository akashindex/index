import React from 'react';
import './MainPage.scss'
import Bio from '../Bio/Bio';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';


const MainPage = () => {
  return (
    <div className="main-page">
      <div className="main-content">
        <Home id="home" />
        <Projects id="projects" />
        <Bio id="bio" />
      </div>
    </div>
  );
};

export default MainPage;