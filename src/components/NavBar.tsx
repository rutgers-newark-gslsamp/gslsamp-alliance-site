'use client'

import React from 'react';
import Link from "next/link";
import Image from "next/legacy/image";
import { useState } from 'react';

// IMAGES
import nsfLogo from '../../public/lsamp-nsf-logos/NSF-clear.png';
import menuIcon from "../../public/icons/hamburger-menu-icon.svg";
import gslsampLogo from '../../public/lsamp-nsf-logos/GSLSAMP-logo-fixed.png';

const NavBar: React.FC<{}> = () => {
    
    const [isVisible, setIsVisible] = useState(false);
    
    const hideDiv = () => {
        setIsVisible(!isVisible);
    };

    return (
        <>
            {/* desktop nav bar*/}
            <nav className='flex flex-col w-full bg-gradient-to-t from-rutgers_red to-dark_rutgers_red sticky z-30 top-0 drop-shadow-lg'>
                <div className='flex flex-wrap items-center justify-between sm:h-auto w-full h-full' id='top-nav-container'>
                    <header id="nav_header" className='flex w-full items-center justify-between'>
                        <div className='flex my-2 gap-2 pl-2 ' id='nav-logo-wrapper'>
                            <Image
                                className='flex h-auto w-auto object-cover'
                                src={nsfLogo}
                                alt="NSF Logo"
                                width={60}
                                height={60}
                            />
                            <Image
                                className='flex h-auto w-auto object-cover rounded-sm'
                                src={gslsampLogo}
                                alt="GSLSAMP Logo"
                                width={60}
                                height={60}
                            />
                            <h1 className='flex items-center text-white text-base md:text-xl sm:font-medium w-[60%] sm:w-full pl-2'>
                                Garden State-Louis Stokes Alliance for Minority Participation
                            </h1>
                        </div>

                        <div className='w-[20%] md:w-auto flex justify-end'>
                            <a onClick={hideDiv} id="hamburger" className='mx-2 hover:cursor-pointer'>
                                <Image
                                    className='w-auto px-2 py-3 drop-shadow grayscale'
                                    src={menuIcon}
                                    alt="Hamburger Menu Icon"
                                    width={50}
                                    height={50}
                                />
                            </a>  
                        </div>
                                          
                    </header>

                    {/* PAGES - should disappear on small screens */}
                    <div id="navigation-pc" className='h-full w-[40%]'>
                        <div className='z-30 h-full flex w-full justify-between px-2 items-center'>
                            <Link className='nav_link text-white flex items-center' href="/"> Home </Link>
                            <Link className='nav_link text-white' href="/eligibility"> Eligibility & Benefits </Link>
                            <Link className='nav_link text-white' href="/events"> Events </Link>
                            <Link className='nav_link text-white' href="/faq"> FAQ & Resources </Link>
                            <Link className='nav_link text-white' href="/contact"> Contact Us </Link>
                        </div>  
                    </div>

                </div>       

                {/* mobile nav bar*/}
                {isVisible && (
                    <div className='w-full bg-white z-50 mobile_nav'>
                        <ul className='grid grid-col-6 h-full text-base justify-center place-items-center flex-wrap my-1 mx-auto list-none no-underline nav-page-list italic' id="bottom-nav-page-list">
                            <li className='w-screen h-full flex justify-center items-center border-b'>
                                <Link onClick={hideDiv} className='mobile_nav_item flex items-center justify-center' href="/">Home</Link>
                            </li>
                            <li className='w-full h-full flex justify-center items-center border-b'>
                                <Link onClick={hideDiv} className='flex items-center justify-center mobile_nav_item' href="/eligibility">Eligibility & Benefits</Link>
                            </li>
                            <li className='w-full h-full flex justify-center items-center border-b'>
                                <Link onClick={hideDiv} className='flex items-center justify-center mobile_nav_item' href="/events">Events</Link>
                            </li>
                            <li className='w-full h-full flex justify-center items-center border-b'>
                                <Link onClick={hideDiv} className='flex items-center justify-center mobile_nav_item' href="/faq">FAQs & Resources</Link>
                            </li>
                            <li className='w-full h-full flex justify-center items-center border-b'>
                                <Link onClick={hideDiv} className='flex items-center justify-center mobile_nav_item' href="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                )}      
            </nav>
            
            
        </>
    );
};

export default NavBar;