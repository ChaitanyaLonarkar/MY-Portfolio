import React from "react";

export default function Navbar() {
  return <>
  <div className="nav">

    <div className="outer">
        <div className="logo">
            Chaitanya Lonarkar
        </div>
        <div className="links">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Projects</li>
            </ul>
        </div>
        <div className="git">
            <a href="http://" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
    </div>
  </div>
  </>;
}
