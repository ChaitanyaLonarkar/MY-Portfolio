import { useState,useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "../src/Components/Navbar";
import Home from "./Components/Home";
import Animation from "./Components/Animation";
import Project from "./Components/Project";

function App() {
  // const [count, setCount] = useState(0)
 
  
  return (
    <>
      <div className="sectionHome">
      <Animation />
        <Navbar />
        <Home />
      </div>
      {/* <marquee onmouseover="this.stop();" onmouseout="this.start();">jhdhfjasdfhasdjkfhjkashdjfhjashdjfhjsahdhfjkshdjkfhjsahdjfhjasdf</marquee> */}
      <Project />
    </>
  );
}

export default App;
