import React,{useRef} from "react";
import logo from "../assets/img/logo.png";
import { FaGithub } from "react-icons/fa6";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function Navbar() {

  const nav = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(()=>{
    // reveal(kbtn)
    gsap.from(nav.current, {
      // yPercent: -100,
      scale:0.5,
      // scrollTrigger: {
      //   trigger: merimg.current,
      //   toggleActions: "restart pause resume reverse",
      //   start: "top 95%",
      // },
      delay:0.6,
      duration: 1,
      autoAlpha: 0,
      ease: "power1.out",
      stagger: 0.05,
    });
    
  })
  return (
    <>
      <div className="nav">
        <div className="outer" ref={nav}>
          <div className="logo">
            {/* <img src={logo} alt="" /> */}
            Chaitanya Lonarkar
          </div>
          <div className="links">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#Projects">Projects</a></li>
              <li><a href="#Contact">Contact</a></li>
            </ul>
          </div>
          <div className="git">
            <a href="https://github.com/ChaitanyaLonarkar" target="_blank" >
              <FaGithub />
              Github
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
