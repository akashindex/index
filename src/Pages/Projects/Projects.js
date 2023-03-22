import { Carousel, Col, Image, Row } from 'antd';
import React from 'react';
import CarouselComponent from '../../components/Carousel/Carousel';
import GridView from '../../components/GridView/GridView';
import './Projects.scss';

const Projects = () => {

  const onChange = () => {
    
  }
  return (
    <div className="projects">
      <h1>Projects</h1>
      <CarouselComponent />
      <GridView />
    </div>
  );
};

export default Projects;