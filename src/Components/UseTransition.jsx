import React from 'react';
import { useTransition, animated } from '@react-spring/web';
import { useState } from 'react';

const PLANETS2 = ['Mars', 'Neptune', 'Mercury']
const PLANETS = ['Jupiter', 'Venus', 'Earth']

const UseTransition = () => {

    const [colours, setColours] = useState(PLANETS)

    const transitions2 = useTransition(colours, {
        from: {opacity: 0, transform: 'perspective(600px) rotateX(180deg)'},
        enter: {opacity: 1, transform: 'perspective(600px) rotateX(0deg)'},
        leave: {opacity: 0, transform: 'perspective(600px) rotateX(180deg)'},
        config: {duration: 1500, repeat: Infinity}
    })

    function handleMouseLeave() {
        setColours(PLANETS);
    }

    function handleMouseEnter() {
        setColours(PLANETS2)
    }

    return (
        <section className='transitionSection'>
            <h2>UseTransition</h2>
            <br/>
            <div className='coloursContainer' onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
                {transitions2((styles, item) => (
                    <animated.div 
                        className={`colour ${item}`}
                        style={{
                            ...styles,
                            fontSize: '50px',
                            width: '400px',
                        }}>{item}
                    </animated.div>
                ))}
            </div>            
        </section>
    )
}

export default UseTransition;