import React from "react";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";

export default function About() {
  return (
    <>
    <div className="about-head">
      <p>About-</p>
      <p>-Education</p>
    </div>
      <div className="about-edu">
        <div className="about">
          <h1>About Me -</h1>
          <p>
            With 10 years experience as a professional Web developer, I have
            acquired the skills and knowledge necessary to make your project a
            success. I enjoy every step of the design process, from discussion
            and collaboration.
          </p>
          <a href="http://" target="_blank" rel="noopener noreferrer">Download CV<HiOutlineDocumentArrowDown /></a>
          
        </div>
        <div className="education">
          <h1>Educations -</h1>
          <div className="edu">
            <div className="edu-year">
              <h2>Computer science engineering</h2>
              <p>2022-2025</p>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="edu">
            <div className="edu-year">
              <h2>Computer engineering</h2>
              <p>2020-2022</p>

            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="edu">
            <div className="edu-year">
              <h2>HSC</h2>
              <p>2018-2020</p>

            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          
        </div>
      </div>
    </>
  );
}
