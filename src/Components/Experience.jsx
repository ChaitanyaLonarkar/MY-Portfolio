import React from "react";

export default function Experience() {
  return (
    <>
      <div className="experience">
        <div className="e-head">
          Experience <br />
          History
        </div>
        <div className="allExp">
          <div className="experience-detail">
            <div className="el">
              <div className="h2">
                <h2>Web Developer Co-oridinator</h2>
                <h2>Web Dev</h2>
              </div>

              <div className="des">
                Web Developer Co-oridinator in <b>Google Developer Student Club in
                SBJIT Nagpur </b>
              </div>
            </div>
            <div className="er duration">
              <p>September 2023 - Present</p>
            </div>
          </div>
          <div
            style={{
                borderBottom: "1px solid #8080804f",
              width: "80vw",
              position: "relative",
              left: "4vw",
            }}
          />
          <div className="experience-detail">
            <div className="el">
              <div className="h2">
                <h2>Web Designer Intern</h2>
                <h2>Web Developer Co-oridinator</h2>
              </div>

              <div className="des">Work as a Web Designer in <b>Codemate It Services Nagpur</b></div>
            </div>
            <div className="er duration">
              <p>July 2023 - Augest 2024</p>
              <p>Remote</p>
            </div>
          </div>
          <div
            style={{
              width: "80vw",
              borderBottom: "1px solid #8080804f",
              position: "relative",
              left: "4vw",
            }}
          />
          <div className="experience-detail">
            <div className="el">
              <div className="h2">
                <h2>Web Developer Intern</h2>
                {/* <h2>Web Developer Co-oridinator</h2> */}
              </div>

              <div className="des">One month Web developer Virtual Internship in <b>Bharat Intern</b></div>
            </div>
            <div className="er duration">
              <p>September 2023 - September 2024</p>
              <p>Virtual</p>
            </div>
          </div>
          <div style={{ width: "80vw",borderBottom: "1px solid #8080804f", position: "relative", left: "4vw" }} />
        </div>
      </div>
    </>
  );
}
