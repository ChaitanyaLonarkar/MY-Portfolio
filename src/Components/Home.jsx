import React from "react";
import myimg from "../assets/img/imgCcc.jpg";
import myimg2 from "../assets/img/bimg.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useParallax } from "react-scroll-parallax";
import { useState, useEffect } from "react";


export default function Home() {
  const [count, setCount] = useState(0);
  // const parallax = useParallax({
  //   // rotate: [0, 360],
  //   scale: [1.1, 0.7, "easeInQuad"],
    
  //   // translateY: [ 0,20 ],
  //   // display: ["flex","none","easeInQuad"]
  // });

  

  return (
    <>
      <section className="home"  >
         <div className="left-img">
          <img src={myimg} alt="Chaitanya" />
        </div>
        <div className="left">
          <h3>CHAITANYA LONARKAR</h3>
          <h1>Frontend Devloper</h1>
          <div className="f">
            <h1 className="ff">-FullStack Devloper</h1>
            <div className="fff"></div>
          </div>
          <div className="kbtn">
            {/* <button>Know Me</button> */}
            <button><a href="#Allsection">Get to Know Me</a></button>
            <div className="slinks">
              <a href="http://" target="_blank">
                <FaLinkedin />
              </a>
              <a href="http://" target="_blank">
                <FaSquareGithub />
              </a>
              <a href="http://" target="_blank">
                <FaSquareXTwitter />
              </a>
              {/* <a href="http://" target="_blank"></a> */}
            </div>
          </div>

          {/* <h1 className="b">-Backend Devloper</h1>
          <h1 className="a">-Android Devloper</h1> */}
        </div>
       
      </section>
    </>
  );
}
