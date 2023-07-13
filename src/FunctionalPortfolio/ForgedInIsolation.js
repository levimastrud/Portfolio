import './ForgedInIsolation.scss';
import { useEffect, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import lp1 from '../assets/ForgedInIsolation/lp-1-01.svg'
import lp2 from '../assets/ForgedInIsolation/lp-2-01.svg'
import lp3 from '../assets/ForgedInIsolation/lp-3-01.svg'
import lp4 from '../assets/ForgedInIsolation/lp-4-01.svg'
import lp5 from '../assets/ForgedInIsolation/lp-5-01.svg'
import lp6 from '../assets/ForgedInIsolation/lp-6-01.svg'
import lp7 from '../assets/ForgedInIsolation/lp-7-01.svg'
import lp8 from '../assets/ForgedInIsolation/lp-8-01.svg'
import lp9 from '../assets/ForgedInIsolation/lp-9-01.svg'
import lp10 from '../assets/ForgedInIsolation/lp-10-01.svg'
import lp11 from '../assets/ForgedInIsolation/lp-11-01.svg'

function ForgedInIsolation() {

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);

    const parallaxRef = useRef();

    const parallaxProps = useSpring({
        to: { transform: `translateY(${parallaxRef.current ? parallaxRef.current.getBoundingClientRect().top / 3 : 0}px)` },
        from: { transform: 'translateY(0px)' },
        reset: true,
    });

    const ref = useRef()

    return (
        <div className='fi-wrapper'>
            <div className='ceiling'></div>

            <Parallax pages={15} ref={ref}>
                <ParallaxLayer offset={0} speed={1}>
                    <h1 className='para-img-title'>ForgedInIsolation</h1>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={-0.2}>
                    <img className='para-img' src={lp1} />
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={-.1}>
                    <img className='para-img' src={lp2} />
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0}>
                    <img className='para-img' src={lp3} />
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.3}>
                    <img className='para-img' src={lp4} />
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.4}>
                    <img className='para-img' src={lp5} />
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.8}>
                    <img className='para-img' src={lp6} />
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={1}>
                    <img className='para-img' src={lp7} />
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={1.3}>
                    <img className='para-img' src={lp8} />
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={1.6}>
                    <img className='para-img' src={lp9} />
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={1.8}>
                    <img className='para-img' src={lp10} />
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={2}>
                    <img className='para-img' src={lp11} />
                    <div className='fk-content-wrapper'>

                    </div>
                </ParallaxLayer>
            </Parallax>
        </div>
    );
}

export default ForgedInIsolation;