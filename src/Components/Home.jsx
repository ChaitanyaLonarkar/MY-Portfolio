import React from "react";
import myimg from "../assets/img/meriIMG.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useParallax } from "react-scroll-parallax";
import { useState, useEffect } from "react";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap-trial/SplitText";

export default function Home() {
  const [count, setCount] = useState(0);

  const h3 = useRef();
  const textRef = useRef();
  const h1 = useRef();
  const kbtn = useRef();
  const merimg = useRef();

  gsap.registerPlugin(ScrollTrigger, SplitText);

  const reveal = (e) => {
    useGSAP(
      () => {
        if (e.current) {
          const splitText = new SplitText(e.current, {
            type: "chars, lines",
            // linesClass: `${styles.splitLine}`,
            // lineThreshold: 5,
          });

          const elements = splitText.chars;

          gsap.from(elements, {
            yPercent: 100,
            scrollTrigger: {
              trigger: e.current,
              toggleActions: "restart pause resume reverse",
              start: "top 85%",
            },
            duration: 0.5,
            autoAlpha: 0,
            ease: "power1.out",
            stagger: 0.05,
          });
        }
      },
      { scope: e }
    );
  };
  reveal(textRef);
  reveal(h3);
  reveal(h1);

  useGSAP(()=>{
  // reveal(kbtn)
  gsap.from(merimg.current, {
    scale:0.5,
    duration: 1,
    autoAlpha: 0,
    ease: "power1.out",
    stagger: 0.05,
  });

  gsap.from(kbtn.current , {
    yPercent: 100,
    duration: 0.5,
    autoAlpha: 0,
    ease: "power1.out",
    stagger: 0.05,
  });
  
})
  //   useGSAP(() => {
  //     if(textRef.current){
  //         gsap.registerPlugin(ScrollTrigger, SplitText);

  //         const splitText = new SplitText(textRef.current, {
  //             type: 'chars, lines',
  //             // linesClass: `${styles.splitLine}`,
  //             lineThreshold: 5,
  //         });

  //         const elements = splitText.chars;

  //         gsap.from(elements, {
  //           yPercent:100,
  //             scrollTrigger: {
  //                 trigger: textRef.current,
  //                 toggleActions: "restart pause resume reverse",
  //                 start: "top 85%",
  //             },
  //             duration: 0.5,
  //             autoAlpha: 0,
  //             ease: "power1.out",
  //             stagger: 0.05,
  //         });
  //     }

  // }, { scope: textRef });

  // gsap.to( h3, { rotate: 360 })

  // gsap.registerPlugin(ScrollTrigger,SplitText)
  // useGSAP(()=>{
  //   gsap.from(h3, { // <- selector text, scoped to this component!
  //     opacity: 0,
  //     yPercent: "+=30",
  //     ease: "back",
  //     duration: 1,
  //     // rotation: 360,
  //     // stagger: 0.1
  //   });
  // })
  // gsap.registerPlugin(ScrollTrigger, SplitText);
  // gsap.registerPlugin(ScrollTrigger,SplitText)
  // const parallax = useParallax({
  //   // rotate: [0, 360],
  //   scale: [1.1, 0.7, "easeInQuad"],

  //   // translateY: [ 0,20 ],
  //   // display: ["flex","none","easeInQuad"]
  // });

  // gsap.to(".left-img", {rotation: 360, x: 100, duration: 1});
  // gsap.from(".left-img", { y: -100, duration: 1});

  // let tween = gsap.from(".left-img", { y: 100 });
  // ScrollTrigger.create({
  //   trigger: ".left-img",
  //   start: "top center",
  //   end: "+=500",
  //   animation: tween,

  // });

  // let split = SplitText.create("h1", {type:"chars"});

  //     gsap.from(split.chars, { // <- selector text, scoped to this component!
  //       opacity: 0,
  //       y: 100,
  //       ease: "back",
  //       duration: 1,
  //       stagger: 0.1
  //     });
  // let split = SplitText.create(h3, {type:"chars"});
  //   gsap.from(split.chars, { // <- selector text, scoped to this component!
  //       // opacity: 0,
  //       // y: 100,
  //       // ease: "back",
  //       // duration: 1,
  //       // stagger: 0.1
  //       yPercent:120,
  //       stagger:0.05,
  //       ease:"back.out",duration:1
  //     });
  // gsap.from(h3.current, {y:100 ,opacity:0,stagger:0.1, duration: 1});
  //                 toggleActions: "restart pause resume reverse",
  // gsap.to(h3.current, {y:0,opacity:1, duration: 1,

  //   toggleActions: "restart pause resume reverse",
  // });

  // gsap.from(h3.current, {y:100 ,opacity:0, duration: 1});
  // gsap.to(h3.current, {y:0,opacity:1, duration: 1});

  return (
    <>
      <section className="home">
        <div className="left-img" ref={merimg}>
          <img src={myimg} alt="Chaitanya" />
        </div>
        <div className="left">
          <div className="div" style={{ overflow: "hidden" }}>
            <h3 className="h3" ref={textRef}>
              CHAITANYA LONARKAR
            </h3>
          </div>
          <div className="div" style={{ overflow: "hidden" }}>
            <h1 ref={h3}>Frontend Devloper</h1>
          </div>
          <div className="f">
            <div className="div" style={{ overflow: "hidden" }}>
              <h1 className="ff" ref={h1}>
                -FullStack Devloper
              </h1>
            </div>
            <div className="fff"></div>
          </div>
          <div className="kbtn" ref={kbtn} style={{overflow:"hidden"}}>
            {/* <button>Know Me</button> */}
            
            <button>
              <a href="#Allsection">Get to Know Me</a>
            </button>
            <div className="slinks">
              <a
                href="https://www.linkedin.com/in/chaitanya-lonarkar-581960244/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a href="https://github.com/ChaitanyaLonarkar" target="_blank">
                <FaSquareGithub />
              </a>
              <a href="https://twitter.com/CLonarkar24" target="_blank">
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
