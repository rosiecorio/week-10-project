import "./Trial2.css"
import React, { useRef } from "react";
import { Power3 } from "gsap/gsap-core";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import blueplanet from "../images/earth.png";

gsap.registerPlugin(useGSAP);

export default function TrailT() {
  const container = useRef();
  const planetImg = useRef();
  const text = useRef();

  const handleMouse = () => {
    gsap.to(planetImg.current, {
      duration: 1,
      opacity: 1,
      rotation: 100,
      ease: Power3.easeInOut,
      onComplete: () => {
        gsap.to(planetImg.current, {
          y:-50,
          duration: 0.6,
          ease: Power3.easeInOut,
          repeat: -1,
          yoyo: true,
        })
      },
    });
  };

  useGSAP(
    () => {
      gsap.to(text.current, {
        duration: 2,
        opacity: 1,
        y: -40,
        ease: Power3.easeInOut,
        delay: 0.2,
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} className="container">
      <img
        ref={planetImg}
        onClick={handleMouse}
        src={blueplanet}
        alt="Planet"
        className="blue-planet"
      />
      <h1
        ref={text}
        className="title"
      >
       ^ <br /> Click For Earth
      </h1>
    </div>
  );
}