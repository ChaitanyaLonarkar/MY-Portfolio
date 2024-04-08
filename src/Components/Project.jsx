import { useEffect } from "react";
import { FaGithub } from "react-icons/fa6";
import React, { useRef } from "react";

import { SiQuicklook } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { AllProjects } from "../Json/projects";

import Marquee from "react-fast-marquee";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SplitText } from "gsap/SplitText";
// import { SplitText } from "gsap-trial/SplitText";
// import { Timeline } from "gsap/gsap-core";

export default function Project() {
  const galleryContainer = useRef();
  const blueHeading = useRef();
  const bg = useRef();
  // const textRef = useRef();

  // const container = useRef();
  // const { contextSafe } = useGSAP({scope: container});

  // useGSAP(() => {
  //     gsap.registerPlugin(ScrollTrigger);
  //     const gallery = galleryContainer.current;
  //     const bgg = bg.current;

  // let gallerywidth=gallery.offsetWidth;
  // console.log(gallerywidth,"kjkj")
  // let amountToScroll=galleryContainer-window.innerWidth;
  // console.log(amountToScroll,"khjkhjh")

  // const tween=gsap.to(gallery,{
  //   x:-amountToScroll,
  //   duration:3,
  //   ease:"none"
  // })
  // ScrollTrigger.create( {
  //   trigger:bgg,
  //   start:"top 5%",
  //   end:"+="
  //   +amountToScroll,
  //   pin:true,
  //   animation:true,
  //   scrub:1,
  //   markers:true
  // })

  // Horizontal Scroll
  // let tl = gsap.timeline({
  //     scrollTrigger: {
  //         trigger: gallery,
  //         x:5,
  //         start: 'top',
  //         end: () => {
  //             return `+=${(gallery?.clientWidth) - window.innerWidth}`;
  //         },
  //         pin: true,
  //         scrub: true,
  //         invalidateOnRefresh: true,
  //         markers:true,
  //     }
  // });
  // let mm = gsap.matchMedia();
  // mm.add("(max-width: 991px)", () => {
  //     tl.to(gallery, {
  //         ease: 'none',
  //     });
  // });
  // mm.add("(min-width: 992px)", () => {
  // tl.to(gallery, {
  //     x: () => {
  //         return `-${(gallery?.clientWidth) - window.innerWidth}`;
  //     },
  //     ease: 'none',
  // });
  // });

  // console.log(`${(gallery?.clientWidth) - window.innerWidth} hjghghgh`) 2487px

  // }, { scope: galleryContainer });

  // const scrollToSection = contextSafe((e) => {
  //     gsap.to(window, {
  //         duration: 1,
  //         scrollTo: e
  //     });
  // });

  //   const element = document.getElementById("projects");
  //   useEffect(() => {
  // console.log(element)
  //     }, [])
  //   console.log("ndfjnsjdnfjsnd", element);
  //   // console.log(scrollContainer)
  //   const wheel = (event) => {
  //     event.preventDefault(df);

  //     // element.scrollBy({
  //     //   left: event.deltaY < 0 ? -30 : 30,
  //     // });
  //     element.scrollLeft +=event.deltaY

  //   };
  const scale = useRef();
  // const pref = useRef();


  gsap.registerPlugin(ScrollTrigger);

 


  const reveal = (e) => {
    useGSAP(
      () => {
        if (e.current) {
          // const splitText = new SplitText(e.current, {
          //   type: "chars, lines",
          //   // linesClass: `${styles.splitLine}`,
          //   // lineThreshold: 5,
          // });

          // const elements = splitText.chars;

          gsap.from(e.current, {
            yPercent: 100,
            scrollTrigger: {
              trigger: e.current,
              toggleActions: "restart pause resume reverse",
              start: "top 85%",
            },
            duration: 0.5,
            autoAlpha: 0,
            ease: "power1.out",
            stagger: 1,
          });
        }
      },
      { scope: e }
    );
  };
    reveal(scale);
    // const reveal2 = (e) => {
    //   useGSAP(
    //     () => {
    //       if (e.current) {
    //         // const splitText = new SplitText(e.current, {
    //         //   type: "chars, lines",
    //         //   // linesClass: `${styles.splitLine}`,
    //         //   // lineThreshold: 5,
    //         // });
  
    //         // const elements = splitText.chars;
  
    //         gsap.from(e.current, {
    //           // yPercent: 100,
    //           scale:0,
    //           scrollTrigger: {
    //             trigger: e.current,
    //             toggleActions: "restart pause resume reverse",
    //             start: "top 5%",
    //           },
    //           duration: 0.5,
    //           // autoAlpha: 0,
    //           ease: "power1.out",
    //           stagger: 1,
    //         });
    //       }
    //     },
    //     { scope: e }
    //   );
    // };
    // reveal2(pref);


  return (
    <>
      {/* <section className="sectionProjects" style={{ backgroundImage: `url(${background})` }}> */}

      <section className="sectionProjects" id="Projects">
        <div className="marq">
          <Marquee pauseOnHover="true" className="marquee" speed={100}>
            Showcasing Showcasing Showcasing Showcasing Showcasing Showcasing
            Showcasing Showcasing Showcasing Showcasing
          </Marquee>
        </div>
        <div className="p" ref={bg}>
          <div id="projects" className="projects" ref={galleryContainer}>
            {/* <div className="prights" onWheel={wheel}> */}

            <div className="pleft" ref={blueHeading} style={{overflow:"hidden"}}>
              <h2 ref={scale}>
                Selected <br />
                Works
              </h2>
            </div>
            <div className="prights">
              {AllProjects.map((project, index) => (
                <div id="project" className="project" key={index} >
                  <div className="pimg">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="desc" >
                    <h3 className="p-name">{project.title}</h3>
                    <div className="p-description">{project.description}</div>
                    <div className="techstack">
                      <div className="thead">
                        <b>Tech Stack :</b>
                      </div>
                      <div className="stack">{project.tech}</div>
                    </div>
                    <div className="live">
                      <a href={project.live}>
                        <SiQuicklook className="live-icon" />
                        Preview
                      </a>
                      <a href={project.code}>
                        <FaCode className="live-icon" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
