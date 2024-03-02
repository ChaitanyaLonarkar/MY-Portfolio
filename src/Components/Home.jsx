import React from "react";
import myimg from "../assets/img/imgCcc.jpg";
import myimg2 from "../assets/img/bimg.jpg";

export default function Home() {
  return (
    <>
      <section className="home">
        <div className="left">
          <h3>CHAITANYA LONARKAR</h3>
          <h1>Frontend Devloper</h1>
          <h1 className="f">-FullStack Devloper</h1>
          {/* <h1 className="b">-Backend Devloper</h1>
          <h1 className="a">-Android Devloper</h1> */}
        </div>
        <div className="left-img">
          <img src={myimg} alt="Chaitanya" />
        </div>
        
      </section>
      
    </>
  );
}
