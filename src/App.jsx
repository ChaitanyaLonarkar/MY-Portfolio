import { useState, useEffect } from "react";

import "./App.css";
import Navbar from "../src/Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";

import Animation from "./Components/Animation";
import Project from "./Components/Project";
import Skills from "./Components/Skills";
import Preloader from "./Components/Preloader";
import Partiles from "./Components/Partiles";
import { useParallax } from "react-scroll-parallax";


function App() {
  

  const [hideHomePage, setHideHomePage] = useState(false);

  // useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight) {
        setHideHomePage(true);
        // console.log("chaitanya")
        // const home=document.getElementById("Allsection")
        // home.style.scale="1"
      } else {
        setHideHomePage(false);
        // console.log("no")

      }
    };

    window.addEventListener('scroll', handleScroll);

    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
  // }, []);

  // // const [count, setCount] = useState(0);
  // const parallax = useParallax({
  //   // rotate: [0, 360],
  //   scale: [0.95,1.1, "easeOutBack"],
    
  //   // translateY: [ 0,20 ],
  //   // display: ["flex","none","easeInQuad"]
  // });



  return (
    <>
      <Preloader />
      <Navbar />
        <Animation />
      
        {hideHomePage?"":<div id="sectionHome" ><Home /></div>}
        
      
      {/* <div className="Allsection" ref={parallax.ref}> */}
      <div  id="Allsection"className="Allsection" >/

        {/* <Partiles/> */}
        <About/>
        <Project />
        <Skills />
        {/* <Partiles/> */}
      </div>
    </>
  );
}

export default App;
