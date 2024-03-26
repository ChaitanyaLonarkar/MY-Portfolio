import React from "react";
import logo from "../assets/img/logo.png";
import { FaGithub } from "react-icons/fa6";

export default function Navbar() {
  return (
    <>
      <div className="nav">
        <div className="outer">
          <div className="logo">
            {/* <img src={logo} alt="" /> */}
            Chaitanya Lonarkar
          </div>
          <div className="links">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#Contact">Contact</a></li>
              <li><a href="#Projects">Projects</a></li>
            </ul>
          </div>
          <div className="git">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaGithub />
              Github
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
