import React from 'react';
import './Skill.css';
import {assets} from '../../assets/assets'

const Skills = () => {
    return (
        <section className="skills" id="skills">
            <h2 className="skillsTitle">Skills</h2>
            <p className="skillsSubtitle">My Technical Skills</p>

            <div className="skillsContainer">
                {/* Languages Section */}
                <div className="skillCategory">
                    <h3>Languages</h3>
                    <p>Languages that I have picked up over the years</p>
                    <div className="skillItems">
                        <div className="skillItem">
                            {/* C Icon */}
                            <img src={assets.c} alt=''></img>
                            <span>C</span>
                        </div>
                        <div className="skillItem">
                            {/* C++ Icon */}
                            <img src={assets.cpp} alt=''></img>
                            <span>C++</span>
                        </div>
                        <div className="skillItem">
                            {/* JavaScript Icon */}
                            <img src={assets.js} alt=''></img>
                            <span>JavaScript</span>
                        </div> 
                    </div>
                </div>

                {/* Libraries & Frameworks Section */}
                <div className="skillCategory">
                    <h3>Libraries & Frameworks</h3>
                    <p>Libraries and frameworks that I prefer to work with</p>
                    <div className="skillItems">
                        <div className="skillItem">
                            {/* React Icon */}
                            <img src={assets.react} alt=''></img>
                            <span>React</span>
                        </div>
                        {/* <div className="skillItem">
                             Next.js Icon 
                            <span>[Next.js Icon]</span>
                            <span>Next.js</span>
                        </div> */}
                        <div className="skillItem">
                            {/* Tailwind CSS Icon */}
                            <img src={assets.tailwind} alt=''></img>
                            <span>Tailwind CSS</span>
                        </div>
                        <div className="skillItem">
                            {/* Node.js Icon */}
                            <img src={assets.nodejs} alt=''></img>
                            <span>Node.js</span>
                        </div>
                        {/* <div className="skillItem">
                             MongoDB Icon 
                            <span>[MongoDB Icon]</span>
                            <span>MongoDB</span>
                        </div> */}
                    </div>
                </div>

                {/* Tools Section */}
                <div className="skillCategory">
                    <h3>Tools</h3>
                    <p>Tools that I know and use on a daily basis</p>
                    <div className="skillItems">
                        <div className="skillItem">
                            {/* Git Icon */}
                            <img src={assets.git} alt=''></img>
                            <span>Git</span>
                        </div>
                        <div className="skillItem">
                            {/* GitHub Icon */}
                            <img src={assets.github} alt=""></img>
                            <span>GitHub</span>
                        </div>
                        {/* <div className="skillItem">
                            Figma Icon
                            <span>[Figma Icon]</span>
                            <span>Figma</span>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;

      