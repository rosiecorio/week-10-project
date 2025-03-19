import React, { useRef } from "react";
import { Power3 } from "gsap/gsap-core";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import blueplanet from "../images/blueplanet.png";

gsap.registerPlugin(useGSAP);

export default function TrailT() {
  const container = useRef();
  const planetImg = useRef();
  const text = useRef();

  const handleMouse = () => {
    gsap.to(planetImg.current, {
      duration: 2,
      opacity: 1,
      y: -40,
      rotation: -90,
      ease: Power3.easeInOut,
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
    <div ref={container} className="twoContainer">
      <img
        ref={planetImg}
        onClick={handleMouse}
        src={blueplanet}
        alt="Planet"
        width={400}
        height={400}
        className="opacity-0"
      />
      <h1
        ref={text}
        className="twoTitle"
      >
        Earth
      </h1>
    </div>
  );
}