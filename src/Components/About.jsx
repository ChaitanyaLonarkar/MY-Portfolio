import React from "react";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import Liquid from "./Liquid";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SplitText } from "gsap/SplitText";
import { SplitText } from "gsap-trial/SplitText";

export default function About() {
  // const h3 = useRef();
  const textRef = useRef();
  const h1 = useRef();
  const aboutmepara = useRef();
  const btn = useRef();
  const scale = useRef();
  const scale2 = useRef();

  gsap.registerPlugin(ScrollTrigger, SplitText);

  useGSAP(() => {

    const reveal2 = (e) => {
      if (e.current) {
        const splitText = new SplitText(e.current, {
          type: "chars, lines",
          // linesClass: `${styles.splitLine}`,
          // lineThreshold: 5,
        });

        const elements = splitText.chars;
        gsap.from(elements, {
          // yPercent: 10,
          scale: 1,
          scrollTrigger: {
            trigger: elements,
            toggleActions: "restart play play reverse",
            start: "top 95%",
          },
          duration: 0.5,
          autoAlpha: 0,
          ease: "power1.out",
          // ease:"",
          stagger: 0.01,
        });
      }
    };
    // reveal2(aboutmepara)
    reveal2(scale2);
    reveal2(scale);
    // const reveal = (e) => {
    //   if (e.current) {
    //     const splitText = new SplitText(e.current, {
    //       type: "chars, lines",
    //       // linesClass: `${styles.splitLine}`,
    //       lineThreshold: 5,
    //     });

    //     const elements = splitText.chars;
    //     gsap.from(elements, {
    //       // yPercent: 100,
    //       scale: 0.2,
    //       scrollTrigger: {
    //         trigger: elements,
    //         // toggleActions: "restart pause resume reverse",
    //         start: "top 95%",
    //       },
    //       duration: 0.5,
    //       // autoAlpha: 0,
    //       // ease: "power1.out",
    //       // // ease:"",
    //       // stagger: 0.01,
    //     });
    //   }

    // };
    // reveal(blueHeading);

    // reveal(aboutmepara);
    
  });

 
  const reveal = (e) => {
    useGSAP(
      () => {
        if (e.current) {
          const splitText = new SplitText(e.current, {
            type: "chars, lines",
            // linesClass: `${styles.splitLine}`,
            // lineThreshold: 5,
          });

          const elements = splitText.chars;

          gsap.from(elements, {
            yPercent: 100,
            scrollTrigger: {
              trigger: e.current,
              toggleActions: "restart pause resume reverse",
              start: "top 85%",
            },
            duration: 0.5,
            autoAlpha: 0,
            ease: "power1.out",
            stagger: 0.009,
          });
        }
      },
      { scope: e }
    );
  };
  reveal(textRef);
  // reveal(h3);
  // reveal(h1);

  return (
    <>
      <section className="about-section" id="about">
        <div className="about-head" ref={textRef}>
          <p>About</p>
          <p>Education</p>
        </div>
        <div className="about-edu">
          <div className="about" ref={scale}>
            <h1 ref={h1}>About Me -</h1>
            <p ref={aboutmepara}>
              {/* I love bringing ideas to life in the digital realm. Always eager to learn and grow, I'm constantly exploring new technologies to create innovative solutions. Let's work together to make your digital dreams a reality! */}
              As a Full Stack Developer, I'm the architect and artist of the
              digital world, blending creativity with code. From sculpting sleek
              interfaces to engineering robust backend systems, I orchestrate
              the symphony of pixels and data to craft unforgettable digital
              experiences
            </p>
            <a
              ref={btn}
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
              <HiOutlineDocumentArrowDown style={{ fontSize: "x-large" }} />
            </a>
          </div>
          <div className="education" ref={scale2}>
            <h1>Educations -</h1>
            <div className="edu">
              <div className="edu-year">
                <h2>Computer science engineering</h2>
                <p>2022-2025</p>
              </div>
              <p>I'm 3rd year Btech Student from SB Jain COE Nagpur</p>
            </div>
            <div className="edu">
              <div className="edu-year">
                <h2>Computer engineering</h2>
                <p>2020-2022</p>
              </div>
              <p>Completed Diploma in Computer Engineering from GP Gondia</p>
            </div>
            <div className="edu">
              <div className="edu-year">
                <h2>HSC</h2>
                <p>2018-2020</p>
              </div>
              <p>Completed HSC in Science from DB Science Gondia</p>
            </div>
          </div>
        </div>
        {/* 
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
        </div> */}
      </section>
    </>
  );
}
