import React from "react";
import { useEffect } from "react";
export default function Project() {
//   const element = document.getElementById("projects");
//   console.log("ndfjnsjdnfjsnd",element)
//   // console.log(scrollContainer)
//   const wheel =( (event) => {
//     event.preventDefault();
  
//     element.scrollBy({
//       left: event.deltaY < 0 ? -30 : 30,
      
//     });
//   useEffect(() => {
//     wheel();
//   }, [])
// });

  return (
    <>
    <section>
      <div id="projects" className="projects">
        {/* <div className="pleft">
            <h2>Selected Works</h2>
            <p>
                I have a play a key role in developing impactful projects. Here are curated selection showcasing my expertise and achieved results.
            </p>
        </div> */}
        <div className="prights" >
             <div className="project">netflix clone</div>  
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
