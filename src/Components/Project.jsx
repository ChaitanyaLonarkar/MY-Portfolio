import React from "react";
import { useEffect } from "react";
import background from "../assets/img/background.jpg"
export default function Project() {
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
      <section className="sectionProjects" style={{ backgroundImage: `url(${background})` }}>
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
        <div id="projects" className="projects">
          {/* <div className="pleft">
            <h2>Selected Works</h2>
            <p>
              I have a play a key role in developing impactful projects. Here
              are curated selection showcasing my expertise and achieved
              results.
            </p>
          </div> */}
          {/* <div className="prights" onWheel={wheel}> */}

          <div className="prights">
            <div id="project" className="project">
              netflix clone
            </div>
            <div className="project">Animated wesites</div>
            <div className="project">Animated wesites</div>
            <div className="project">Animated wesites</div>
            <div className="project">Animated wesites</div>
            <div className="project">Animated wesites</div>
            <div className="project">Animated wesites</div>
            <div className="project">Animated wesites</div>
          </div>
        </div>
      </section>
    </>
  );
}
