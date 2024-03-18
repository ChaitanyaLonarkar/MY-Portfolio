import React from "react";
import { useParallax } from "react-scroll-parallax";
import { useState, useEffect } from "react";

export default function Skills() {
  // const parallax =
  //   useParallax <
  //   HTMLDivElement >
  //   {
  //     rotate: [0, 360],
  //   };
  // return (
  //   <>
  //     <section>
  //       <div className="skill">Java</div>
  //       <div ref={parallax.ref} className="spinner">
  //         😵‍💫
  //         <div className="diamond">💎</div>
  //         <div className="clown">🤡</div>
  //         <div className="money">💰</div>
  //         <div className="hand">👌🏻</div>
  //       </div>
  //     </section>
  //   </>
  // );
  // const [angle, setAngle] = useState(0);

  // const handleMouseDown = (event) => {
  //   const container = document.getElementById("dragger-container");
  //   const containerWidth = container.offsetWidth;
  //   const containerHeight = container.offsetHeight;
  //   const centerX = containerWidth / 2;
  //   const centerY = containerHeight / 2;
  //   const radius = Math.min(centerX, centerY);
  //   const dx = event.clientX - centerX;
  //   const dy = event.clientY - centerY;
  //   const initialAngle = Math.atan2(dy, dx) * (180 / Math.PI);

  //   const handleMouseMove = (event) => {
  //     const dx = event.clientX - centerX;
  //     const dy = event.clientY - centerY;
  //     const newAngle = Math.atan2(dy, dx) * (180 / Math.PI);
  //     setAngle(initialAngle - newAngle);
  //   };

  //   const handleMouseUp = () => {
  //     document.removeEventListener("mousemove", handleMouseMove);
  //     document.removeEventListener("mouseup", handleMouseUp);
  //   };

  //   document.addEventListener("mousemove", handleMouseMove);
  //   document.addEventListener("mouseup", handleMouseUp);
  // };

  return (
    // <div id="dragger-container" onMouseDown={handleMouseDown}>
    //   <div id="dragger" style={{ transform: `rotate(${angle}deg)` }}>
    //     <div className="skills-container">
    //       <div className="dragger">
    //         <div className="dragger-inner">
    //           <div className="dragger-item">
    //             <img src="html.png" alt="HTML" />
    //             express
    //           </div>
    //           <div className="dragger-item">
    //             <img src="css.png" alt="CSS" />
    //             express
    //           </div>
    //           <div className="dragger-item">
    //             <img src="js.png" alt="JavaScript" />
    //             express
    //           </div>
    //           <div className="dragger-item">
    //             <img src="react.png" alt="React" />
    //             express
    //           </div>
    //           <div className="dragger-item">
    //             <img src="tailwind.png" alt="Tailwind CSS" />
    //             express
    //           </div>
    //           <div className="dragger-item">
    //             <img src="node.png" alt="Node" />
    //             express
    //           </div>
    //           <div className="dragger-item">
    //             <img src="express.png" alt="Express" />
    //             express
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>
    <div className="wrap">

    <div className="poly">
      .
    </div>
    </div>
    </>
  );
}
