
import "./TrialOne.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { Power3 } from "gsap/gsap-core";
import saturn from "../images/saturn.png"
import { MotionPathPlugin, ScrollTrigger, TextPlugin } from "gsap/all";


export default function Trial() {
  const saturnRef = useRef();
  const containerRef = useRef()
useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

        gsap.to(saturnRef.current, {
                scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top center",
                        end: "bottom center",
                        scrub: 2,
                },
                motionPath: {
                        path: "M 0 -600 C 600 -600 600 600 0 600 C -600 600 -600 -600 0 -600",
                
                        autoRotate: true,
                        alignOrigin: [0.5, 0.5],
                },
                duration: 10,
                ease: "power3.inOut",
                rotate: 180,
                repeat: 3,
        })
})
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
      <div className="saturn-container" ref={containerRef}>
        <img
          ref={saturnRef}
          src={saturn}
          alt="saturn planet"         
          id="saturn"
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