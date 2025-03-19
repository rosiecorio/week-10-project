import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";
import blueplanet from "../images/blueplanet.png";

const UseSpring = () => {

    const [currentPosition, setCurrentPosition] = useState(0)

    const [spring2, api] = useSpring(() => ({
        from: { x: currentPosition },
        onChange: (ev) => {
            setCurrentPosition(ev.value.x);
        },
        config: { duration: 10000 },
    }));

    const handleMouseEnter = () => {
        api.start({
            from: { x : currentPosition },
            to: { x : 500, transform: 'rotate(360deg)'},
            config: { duration: 5000 },
        })
    }

    const handleMouseLeave = () => {
        api.start({
            from: { x : currentPosition},
            to: { x : 0},
            config: { duration: 5000 },
        })
    }
   
    return (
        <div className="play">
            <h2>useSpring</h2>
            <br/>

            <animated.div style={{
                ...spring2,
            }}>
                <img 
                src={blueplanet} 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave} 
                style={{
                    ...spring2,                
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                }}/>
            </animated.div>
        </div>
    )
}

export default UseSpring;