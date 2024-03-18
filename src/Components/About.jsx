import React from "react";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import Liquid from "./Liquid";
export default function About() {
  return (
    <>
      <section className="about-section">
        <div className="about-head">
          <p>About-</p>
          <p>-Education</p>
        </div>
        <div className="about-edu">
          <div className="about">
            <h1>About Me -</h1>
            <p>
              {/* I love bringing ideas to life in the digital realm. Always eager to learn and grow, I'm constantly exploring new technologies to create innovative solutions. Let's work together to make your digital dreams a reality! */}
              As a Full Stack Developer, I'm the architect and artist of the
              digital world, blending creativity with code. From sculpting sleek
              interfaces to engineering robust backend systems, I orchestrate
              the symphony of pixels and data to craft unforgettable digital
              experiences
            </p>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Download CV
              <HiOutlineDocumentArrowDown style={{ fontSize: "x-large" }} />
            </a>
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

        <div className="wrap w1 ">
          <div className="poly"></div>
        <Liquid/>

        </div>
        <div className="wrap w2">
          <div className="poly"></div>
        <Liquid/>

        </div>
        <div className="wrap w3">
          <div className="poly"></div>
        <Liquid/>
        </div>
      </section>
    </>
  );
}
