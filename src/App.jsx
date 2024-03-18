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

function App() {
  

  const [hideHomePage, setHideHomePage] = useState(false);

  // useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight) {
        setHideHomePage(true);
        // console.log("chaitanya")
        // const home=document.getElementById("sectionHome")
        // home.style.display="hidden"
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


  return (
    <>
      <Preloader />
      <Navbar />
        <Animation />
      <div id="sectionHome" >
        {setHideHomePage?<Home />:""}
        
      </div>
      <div className="Allsection">
        {/* <Partiles/> */}
        <About/>
        <Skills />
        <Project />
        {/* <Partiles/> */}
      </div>
    </>
  );
}

export default App;
