
import "./TrialOne.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { Power3 } from "gsap/gsap-core";
import saturn from "../images/saturn.png"
import { ScrollTrigger } from "gsap/all";
import { TextPlugin } from "gsap/all";

export default function Trial() {
  const saturnRef = useRef();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: saturnRef.current,
        markers: true,
        start: "top 90%",
        end: "bottom 20%",
        scrub: 2,
      },
      duration: 15,
      ease: Power3.easeInOut,
      pin: ".text",
      
    });

    tl.to(saturnRef.current, { x: 1000, y: 600, duration: 5, rotate: 180 })
      .to(saturnRef.current, { x: 0, y: 200, duration: 5, rotate: 180 })
      .to(saturnRef.current, { x: 0, y: 0, duration: 5, rotate: 180 });
  });
  useGSAP(() => {
    gsap.registerPlugin(TextPlugin);
    gsap.to("#desc", {
      duration: 5,
      text: {
        delay: 0.5,
        value:
          "The second-largest planet in our solar system, <br/>is a stunning gas giant known for its magnificent ring system",
        delimiter: " ",
        oldClass: "start",
        newClass: "end",
        scrub: 2,
      },
      repeat: -1,
    });
  });

  useGSAP(() => {
    gsap.registerPlugin(TextPlugin);
    gsap.fromTo(
      "#title",
      {
        value: "SATURN!",
        color: "rgb(216, 227, 148)",
      },
      {
        duration: 3,
        text: {
          value: "SATURN!",
        },
        repeat: -1,
      }
    );
  });
  return (
    <div className="bg">
      <div className="saturn-container">
        <img
          ref={saturnRef}
          src={saturn}
          alt="saturn planet"
          width={300}
          height={300}
    
        />
        <div className="text-container">
          <h3
            id="title"
          ></h3>
          <p id="desc">
            The second-largest planet in our solar system, <br />
            is a stunning gas giant known for its magnificent ring system
          </p>
        </div>
      </div>
    </div>
  );
}