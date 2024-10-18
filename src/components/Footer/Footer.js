import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

function Footer() {
    return (
        <div class="footer_bg">
            <div class="footer_container container grid">
                <div className='detail'>
                    <h1 class="footer_title">Shital Modhavadiya</h1>
                    <span class="footer_subtitle">Full Stack Developer</span>
                </div>

                <ul class="footer_links">
                    <li className='list'>
                        <a href="#about" class="footer_link">About</a>
                    </li>
                    <li className='list'>
                        <a href="#projects-container" class="footer_link">Projects</a>
                    </li>
                    <li className='list'>
                        <a href="#contact" class="footer_link">Contact Me</a>
                    </li>
                </ul>

                <div class="footer_socials">
                    <a href='https://www.linkedin.com/in/shital-modhavadiya-563623272' target="_blank" rel="noopener noreferrer" class="footer_social">
                        <img src={assets.linkedin} alt="LinkedIn" />
                    </a>
                    <a href='https://github.com/Shital193' target="_blank" rel="noopener noreferrer" class="footer_social">
                        <img src={assets.github} alt="Github" />
                    </a>
                    <a href='https://leetcode.com/u/shitalmodhavadiya193/' target="_blank" rel="noopener noreferrer" class="footer_social">
                        <img src={assets.leetcode} alt="Leetcode" />
                    </a>
                </div>

                <a href='#' className='uparrow'>
                    <img src={assets.uparrow} alt=''></img>
                </a>
            </div>

            <p class="footer_copy">© Shital Modhavadiya. All rights reserved</p>
        </div>
    );
}

export default Footer;
