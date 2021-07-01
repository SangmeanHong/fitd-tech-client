import React, { useState, useEffect } from 'react';
import { Button } from '../../pages/Home/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { RiDoorOpenFill } from 'react-icons/ri';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { useSelector } from 'react-redux';
import AvatarIcon from '../AvatarIcon';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const { authData, loading } = useSelector((state) => state.authReducer);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
        window.addEventListener('resize', showButton);
        return {
            // window.removeEventListener('resize', showButton)
        };
    }, []);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <nav className='navbar'>
                    <div className='navbar-container container'>
                        <Link
                            to='/'
                            style={{ color: 'black', fontWeight: 'bolder' }}
                            className='navbar-logo'
                            onClick={closeMobileMenu}
                        >
                            <RiDoorOpenFill className='navbar-icon' />
                            FITD
                        </Link>
                        <div className='menu-icon' onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars style={{ color: 'black' }} />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link
                                    to='/category'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    Category
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    to='/content'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    Content
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    to='/coaching'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    Coaching
                                </Link>
                            </li>
                            <li className='nav-btn'>
                                <AvatarIcon />
                            </li>
                        </ul>
                    </div>
                </nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
