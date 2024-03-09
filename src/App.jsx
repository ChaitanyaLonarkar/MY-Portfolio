import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "../src/Components/Navbar";
import Home from "./Components/Home";
import Animation from "./Components/Animation";
import Project from "./Components/Project";
import { useParallax } from "react-scroll-parallax";

function App() {
  const [count, setCount] = useState(0)
  const parallax = useParallax({
    // rotate: [0, 360],
    scale: [ 1.1,0.7, "easeInQuad"],
    display: ["flex","none"]
    // translateY: [ 0,20 ],
    // display: "none"

  });
  
  return (
    <>
          <Navbar />
        <div className="sectionHome" ref={parallax.ref}>

        {/* <div className="sectionHome" > */}
          <Animation />
          <Home />
        </div>
      {/* <marquee onmouseover="this.stop();" onmouseout="this.start();">jhdhfjasdfhasdjkfhjkashdjfhjashdjfhjsahdhfjkshdjkfhjsahdjfhjasdf</marquee> */}
      <Project />
    </>
  );
}

export default App;
