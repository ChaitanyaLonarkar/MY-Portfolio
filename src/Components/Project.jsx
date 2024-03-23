import { useEffect } from "react";
import background from "../assets/img/background.jpg";
import { FaGithub } from "react-icons/fa6";
import React, { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import p1 from "../assets/img/p1.png"

export default function Project() {

  const galleryContainer = useRef();
  const bg = useRef();
  // const container = useRef();
  // const { contextSafe } = useGSAP({scope: container});

  useGSAP(() => {
      gsap.registerPlugin(ScrollTrigger);
      const gallery = galleryContainer.current;
      const bgg = bg.current;

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
      let tl = gsap.timeline({
          scrollTrigger: {
              trigger: gallery,
              x:5,
              start: 'top',
              end: () => {
                  return `+=${(gallery?.clientWidth) - window.innerWidth}`;
              },
              pin: true,
              scrub: true,
              invalidateOnRefresh: true,
              markers:true,
          }
      });
      let mm = gsap.matchMedia();
      // mm.add("(max-width: 991px)", () => {
      //     tl.to(gallery, {
      //         ease: 'none',
      //     });
      // });
      // mm.add("(min-width: 992px)", () => {
          tl.to(gallery, {
              x: () => {
                  return `-${(gallery?.clientWidth) - window.innerWidth}`;
              },
              ease: 'none',
          });
      // });

// console.log(`${(gallery?.clientWidth) - window.innerWidth} hjghghgh`) 2487px

  }, { scope: galleryContainer });

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

  return (
    <>
      {/* <section className="sectionProjects" style={{ backgroundImage: `url(${background})` }}> */}

      <section className="sectionProjects">
        <div className="marq">
          <marquee
            onMouseOver={(e) => {
              e.target.stop();
            }}
            onMouseOut={(e) => {
              e.target.start();
            }}
          >
            Showcasing Showcasing Showcasing Showcasing Showcasing Showcasing
            Showcasing Showcasing Showcasing Showcasing
          </marquee>
        </div>
        <div className="p" ref={bg}>
          <div id="projects" className="projects" ref={galleryContainer}>
            <div className="pleft">
              <h2>Selected <br />Works</h2>
              <p>
                I have a play a key role in developing impactful projects. Here
                are curated selection showcasing my expertise and achieved
                results.
              </p>
              <div className="git">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                  Github
                </a>
              </div>
            </div>
            {/* <div className="prights" onWheel={wheel}> */}

            <div className="prights">
              <div id="project" className="project">
                <div className="pimg">
                  <img src={p1} alt="" />
                </div>
                <div className="desc">
                  <h3 className="title">
                    NEtflix clone
                  </h3>
                  <div className="description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem corporis sed dolore voluptatibus, expedita sequi nostrum facilis illo necessitatibus voluptatum inventore soluta in aperiam. In sit unde maiores! Debitis, quae.
                  </div>
                  <div className="techstack">
                    <div className="thead">
                      <b>Technical Stack :</b>
                    </div>
                    <div className="stack">

                    html css js 
                    </div>
                  </div>
                  <div className="live">
                    <a href="//">Preview</a>
                    <a href="//">Code</a>

                  </div>
                </div>
               
              </div>
            
              <div id="project" className="project">
                <div className="pimg">
                  <img src={p1} alt="" />
                </div>
                <div className="desc">
                  <h3 className="title">
                    NEtflix clone
                  </h3>
                  <div className="description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem corporis sed dolore voluptatibus, expedita sequi nostrum facilis illo necessitatibus voluptatum inventore soluta in aperiam. In sit unde maiores! Debitis, quae.
                  </div>
                  <div className="techstack">
                    <div className="thead">
                      <b>Technical Stack :</b>
                    </div>
                    <div className="stack">

                    html css js 
                    </div>
                  </div>
                  <div className="live">
                    <a href="//">Preview</a>
                    <a href="//">Code</a>

                  </div>
                </div>
               
              </div><div id="project" className="project">
                <div className="pimg">
                  <img src={p1} alt="" />
                </div>
                <div className="desc">
                  <h3 className="title">
                    NEtflix clone
                  </h3>
                  <div className="description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem corporis sed dolore voluptatibus, expedita sequi nostrum facilis illo necessitatibus voluptatum inventore soluta in aperiam. In sit unde maiores! Debitis, quae.
                  </div>
                  <div className="techstack">
                    <div className="thead">
                      <b>Technical Stack :</b>
                    </div>
                    <div className="stack">

                    html css js 
                    </div>
                  </div>
                  <div className="live">
                    <a href="//">Preview</a>
                    <a href="//">Code</a>

                  </div>
                </div>
               
              </div><div id="project" className="project">
                <div className="pimg">
                  <img src={p1} alt="" />
                </div>
                <div className="desc">
                  <h3 className="title">
                    NEtflix clone
                  </h3>
                  <div className="description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem corporis sed dolore voluptatibus, expedita sequi nostrum facilis illo necessitatibus voluptatum inventore soluta in aperiam. In sit unde maiores! Debitis, quae.
                  </div>
                  <div className="techstack">
                    <div className="thead">
                      <b>Technical Stack :</b>
                    </div>
                    <div className="stack">

                    html css js 
                    </div>
                  </div>
                  <div className="live">
                    <a href="//">Preview</a>
                    <a href="//">Code</a>

                  </div>
                </div>
               <div id="project" className="project">
                <div className="pimg">
                  <img src={p1} alt="" />
                </div>
                <div className="desc">
                  <h3 className="title">
                    NEtflix clone
                  </h3>
                  <div className="description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem corporis sed dolore voluptatibus, expedita sequi nostrum facilis illo necessitatibus voluptatum inventore soluta in aperiam. In sit unde maiores! Debitis, quae.
                  </div>
                  <div className="techstack">
                    <div className="thead">
                      <b>Technical Stack :</b>
                    </div>
                    <div className="stack">

                    html css js 
                    </div>
                  </div>
                  <div className="live">
                    <a href="//">Preview</a>
                    <a href="//">Code</a>

                  </div>
                </div>
               
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
