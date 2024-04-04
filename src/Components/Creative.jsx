// import React from 'react'
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SplitText } from "gsap/SplitText";

export default function Creative() {
  const boldTitle = useRef();
  const boldTitleLeft = useRef();
  const boldTitleRight = useRef();

  useGSAP(() => {
    // gsap.registerPlugin(ScrollTrigger, SplitText);
    gsap.registerPlugin(ScrollTrigger);


    // const splitTextLeft = new SplitText(boldTitleLeft.current, {
    //   type: "chars",
    // });
    // const splitTextRight = new SplitText(boldTitleRight.current, {
    //   type: "chars",
    // });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: boldTitle.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        toggleActions: "play none none reverse",
      },
    });

    // BoldText
    tl.fromTo(
      boldTitleLeft.current,
      {
        xPercent: -50,
      },
      {
        xPercent: -10,
      },
      0
    );
    tl.fromTo(
      boldTitleRight.current,
      {
        xPercent: 50,
      },
      {
        xPercent: 10,
      },
      0
    );
  });
  return (
    <>
      <section className={ "sectionn"}>
        <div className={ "grid"}>
          <div className={ "paragraph"}>
            I&apos;ve worked in web designs and front-end development, so I can
            understand designs well and builds effective communication between
            team members.
          </div>
          <h2 className={ "boldTitle"} ref={boldTitle}>
            <span className={ "boldTitleLeft"} ref={boldTitleLeft}>
              Creative
            </span>
            <span><i>Frontend</i></span>
            <span className={" boldTitleRight"} ref={boldTitleRight}>
              Developer
            </span>
          </h2>
          <div className="paragraph paragraphAlt" >
            Currently, I live in Gondia(MH). In my personal life, I love to code
            , exploring different technologies 
          </div>

          {/* <Blobs type={"v3"} /> */}
        </div>
      </section>
    </>
  );
}
