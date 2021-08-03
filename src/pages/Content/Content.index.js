import React, { useEffect } from 'react';
import HeroSection from '../Home/HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../Home/Pricing';

function Content() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjTwo} />
            {/* <HeroSection {...homeObjFour} /> */}
        </>
    );
}

export default Content;