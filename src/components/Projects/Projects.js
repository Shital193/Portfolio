import React, { useState } from 'react';
import './Projects.css'; 
import {assets} from '../../assets/assets'

const projects = [
  {
    title: 'Gemini AI',
    description: 'Gemini is a real-time search engine. I used Vite and React to build the Gemini clone project.',
    image: `${assets.gemini}`, 
    link: 'https://shital193.github.io/Gemini-clone/', 
  },
  {
    title: 'CodePen',
    description: 'CodePen is a web based app which will show code into design.used React as the primary framework and Vite for faster development and build tooling.',
    image: `${assets.codepen}`, 
    link: 'https://shital193.github.io/CodePen-Website/', 
  },
  {
    title: 'Plan With Love',
    description: "Plan With Love is a well organized tour plan with Loved One's. I have made it using React Hooks.",
    image: `${assets.planWithLove}`, 
    link: 'https://shital193.github.io/planWithLove/', 
  },
  {
    title: 'Portfolio',
    description: 'I made my Portfolio website to elaborate about myself. I have made it using React Components & React Hooks.',
    image: `${assets.portfolio}`, 
    link: '#', 
  },
];

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="project-container" id='projects-container'>
      {/* Title Section */}
      <div className="title-section">
        <h2 className="project-title">Projects</h2>
      </div>
      <p className="subtitle">Most recent work</p>

      <div className="carousel-container">
        {/* Left Arrow */}
        <div className="arrow left-arrow" onClick={handlePrev}>
          {/* Add left arrow icon here */}
        <img src={assets.right} alt=''></img>
        </div>

        {/* Project Card */}
        <div className="project-card">
          <div className='image-div'>
            <img
              className="project-image"
              src={projects[currentSlide].image}
              alt={projects[currentSlide].title}
            />
          </div>
         
          <div className="project-content">
            <h3 className="project-heading">{projects[currentSlide].title}</h3>
            <p className="project-description">{projects[currentSlide].description}</p>
            <a href={projects[currentSlide].link} className="project-button">Check out
            <img src={assets.leftArrow} alt=""/></a>
          </div>
        </div>

        {/* Right Arrow */}
        <div className="arrow right-arrow" onClick={handleNext}>
          {/* Add right arrow icon here */}
          <img src={assets.left} alt=''/>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="dots-container">
        {projects.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentSlide === index ? 'active-dot' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;