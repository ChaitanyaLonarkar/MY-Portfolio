import React from "react";
import { FaHeart } from "react-icons/fa";
import { ImHappy } from "react-icons/im";
import { RiCopyrightLine } from "react-icons/ri";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap-trial/SplitText";


export default function Footer() {

  const first = useRef();


  gsap.registerPlugin(ScrollTrigger, SplitText);

  useGSAP(() => {
    const reveal = (e) => {
      if (e.current) {
        const splitText = new SplitText(e.current, {
          type: "chars, lines",
          // linesClass: `${styles.splitLine}`,
          // lineThreshold: 5,
        });

        const elements = splitText.chars;

        gsap.from(elements, {
          yPercent: 10,
          scrollTrigger: {
            trigger: e.current,
            toggleActions: "restart pause resume reverse",
            start: "top 85%",
          },
          duration: 0.2,
          autoAlpha: 0,
          ease: "power1.out",
          stagger: 0.009,
        });
      }
    };
    reveal(first)

    
});
  return (
    <>
      <section className="footer">
        <div className="info" ref={first}>



            <p><RiCopyrightLine /> 2024 Chaitanya Lonarkar</p>
            <p>Made by Chaitanya with  💗 and 😍 </p>
            <p>Powered by React.js, GitHub and Netlify.</p>
            <p>Gondia(MH), India</p>
          
          
        </div>
      </section>
    </>
  );
}
