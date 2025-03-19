
import neptune from "../images/neptune.png";
import earth from "../images/earth.png";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { Power3 } from "gsap/gsap-core";

export default function TrialThr() {
  const neptunePlanet = useRef();
  const earthPlanet = useRef();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(neptunePlanet.current, {
      scrollTrigger: {
        trigger: neptunePlanet.current,
        start: "top 80%",
        end: "top 30%",
        toggleActions: "restart none none none",
        scrub: 4,
      },
      x: 500,
      y: -90,
      rotate: 360,
      duration: 9,
      ease: Power3.easeInOut,
    });
  });

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(earthPlanet.current, {
      scrollTrigger: {
        trigger: earthPlanet.current,
        start: "top 40%",
        end: "top 90%",
        scrub: 8,
      },
      x: -200,
      y: 300,
      rotate: -200,
      duration: 9,
      delay: 0.1,
      ease: Power3.easeInOut,
    });
  });

  return (
    <div>
      <img
        ref={neptunePlanet}
        src={neptune}
        alt="neptune"
        width={200}
        height={200}
        className="planet"
      />
      <img
        ref={earthPlanet}
        src={earth}
        alt="earth planet"
        width={200}
        height={200}
        className="planet"
      />
    </div>
  );
}