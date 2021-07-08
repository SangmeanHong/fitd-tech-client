import React from 'react';
import './HeroSection.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

const Parse = (txt) => {
    let parser = new DOMParser();
    let htmlDoc = parser.parseFromString(txt, 'text/html');
    // console.log(`htmlDoc`, htmlDoc.getElementsByTagName('h1')[0]);
    let doc = htmlDoc.getElementsByTagName('h1')[0];
    console.log(`doc.h1`, doc)
    return (
        doc
    );
}

function HeroSection({
    lightBg,
    topLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    imgStart
}) {

    return (
        <>
            <div
                className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
            >
                <div className='container'>
                    <div
                        className='row home__hero-row'
                        style={{
                            display: 'flex',
                            flexDirection: imgStart === 'start' ? 'row-reverse' : 'row',
                            justifyContent: 'space-between'
                        }}>
                        <div className='row'>
                            <div className='home__hero-text-wrapper'>
                                <div className='top-line'>{topLine}</div>
                                <div className={lightText ? 'heading' : 'heading dark'} dangerouslySetInnerHTML={{ __html: headline }} />
                                <p
                                    className={
                                        lightTextDesc
                                            ? 'home__hero-subtitle'
                                            : 'home__hero-subtitle dark'
                                    }
                                >
                                    {description}
                                </p>
                                <Link to='/content'>
                                    <Button buttonSize='btn--wide' buttonColor='blue'>
                                        {buttonLabel}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='home__hero-img-wrapper'>
                                <img src={img} alt={alt} className='home__hero-img' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroSection;