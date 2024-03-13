import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "../src/Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";

import Animation from "./Components/Animation";
import Project from "./Components/Project";
import { useParallax } from "react-scroll-parallax";
import Skills from "./Components/Skills";
import Preloader from "./Components/Preloader";
import Partiles from "./Components/Partiles";

function App() {
  const [count, setCount] = useState(0);
  const parallax = useParallax({
    // rotate: [0, 360],
    scale: [1.1, 0.7, "easeInQuad"],
    display: ["flex", "none"],
    // translateY: [ 0,20 ],
    // display: "none"
  });

  return (
    <>
      <Preloader />
      <Navbar />
      <div className="sectionHome" ref={parallax.ref}>
        {/* <div className="sectionHome" > */}
        <Animation />
        <Home />
      </div>
      <div className="Allsection">
        {/* <Partiles/> */}
        <About/>

        <Project />
        <Skills />
      </div>
    </>
  );
}

export default App;
