import React, { useState } from 'react';
import './Qualification.css';
import { assets } from '../../assets/assets'; // Assuming you have assets

function Qualification() {
  const [showEducation, setShowEducation] = useState(true); // State to toggle between education and work experience

  const details = {
    education: [
      {
        id: 1,
        course: "B.Tech",
        college: "National Institute of Technology Manipur",
        duration: "2021 - 2025",
      },
      {
        id: 2,
        course: "Senior Secondary School",
        college: "Alpha Vidhya Sankul Junagadh",
        duration: "2018 - 2020",
      },
      {
        id: 3,
        course: "Secondary School",
        college: "Alpha Vidhya Sankul Junagadh",
        duration: "2008 - 2018",
      }
    ],
    workExperience: [
      {
        id: 1,
        title: "Full Stack Web Developer Intern",
        company: "Bharat Interns",
        duration: "June/2024 - July/2024",
      },
    ],
  };

  return (
    <section className='qualification section' id='qualification'>
      <div className='title'>
        <h2 className='heading'>Qualification</h2>
        <p>My Educational Qualification & Work Experience</p>
      </div>

      <div className='title2'>
        <img src={showEducation ? assets.education : assets.work} alt='' />
        <h3>{showEducation ? "Education" : "Work Experience"}</h3>
      </div>

      <div className='switch-container'>
        <button
          className={`switch-button ${showEducation ? 'active' : ''}`}
          onClick={() => setShowEducation(true)}
        >
          Education
        </button>
        <button
          className={`switch-button ${!showEducation ? 'active' : ''}`}
          onClick={() => setShowEducation(false)}
        >
          Work Experience
        </button>
      </div>

      <div className='timeline-items'>
        {(showEducation ? details.education : details.workExperience).map((detail) => (
          <div key={detail.id} className='timeline-item'>
            <div className='timeline-dot'>
              {showEducation ? (
                <>
                  <h4>{detail.course}</h4>
                  <p>{detail.college}</p>
                </>
              ) : (
                <>
                  <h4>{detail.title}</h4>
                  <p>{detail.company}</p>
                </>
              )}
              <div className='timeline-date'>
                <img src={assets.calender} alt='' />
                <p>{detail.duration}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Qualification;
