import React, { useEffect } from 'react';
// import '../../App.css';
import Cards from '../../components/FaqPage/Cards.faq';
//import HeroSection from './HeroSection';
// import Footer from '../components/Footer';

function Faq() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            {/* <HeroSection /> */}
            <Cards />
            {/* <Footer /> */}
        </>
    );
}

export default Faq;