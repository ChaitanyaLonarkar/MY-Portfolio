import React from "react";
import { Skill } from "../Json/skills";
import { Language } from "../Json/skills";

import Marquee from "react-fast-marquee";

export default function Skills2() {
  return (
    <>
      <section className="section" id={"skills"}>
        {/* <div className={ "blobs"}>
                    <Blobs type={'v2'} classVariable={`blob  blobV2`}/>
                    <Blobs type={'v1'} classVariable={`blob blobV1`}/>
                </div> */}
        {/* < className={"grid"}> */}
        <div className={"white"}>
          <span>My</span> <br /> Skillset
        </div>
        {/* < className={"circularCarouselWrapper"}> */}
        {/* <div className={"collisionDiv"} ref={collisionDiv}></div> */}
        <div className="mark">
          <div className="scale">
            <div className="overlay">
              <div className="l"></div>
              <div className="r"></div>
            </div>
            <Marquee>
              <div className="skills-icon">
                {Skill.map((skill, index) => (
                  <div key={index} className="each-skill" >
                    <img
                      className={"image"}
                      src={skill.image}
                      alt={skill.title}
                      width={100}
                      height={100}
                      loading={"lazy"}
                    />
                    <p
                      style={{
                        color: "White",
                        fontWeight: "400",
                        textAlign: "center",
                      }}
                    >
                      {skill.title}
                    </p>
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
          <div className="scale">
            <div className="overlay2">
              <div className="l"></div>
              <div className="r"></div>
            </div>
            <Marquee direction="right" pauseOnHover="true">
              <div className="skills-icon">
                {Language.map((skill, index) => (
                  <div key={index} className="each-skill">
                    <img
                      className={"image"}
                      src={skill.image}
                      alt={skill.title}
                      width={100}
                      height={100}
                      loading={"lazy"}
                    />
                    <p
                      style={{
                        color: "White",
                        fontWeight: "400",
                        textAlign: "center",
                      }}
                    >
                      {skill.title}
                    </p>
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </section>
    </>
  );
}
