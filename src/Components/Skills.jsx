import React from "react";
import { useParallax } from "react-scroll-parallax";

export default function Skills() {
  const parallax =
    useParallax <
    HTMLDivElement >
    {
      rotate: [0, 360],
    };
  return (
    <>
      <section>
        <div className="skill">Java</div>
        <div ref={parallax.ref} className="spinner">
          😵‍💫
          <div className="diamond">💎</div>
          <div className="clown">🤡</div>
          <div className="money">💰</div>
          <div className="hand">👌🏻</div>
        </div>
      </section>
    </>
  );
}
