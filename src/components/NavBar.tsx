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
            <nav className='flex flex-col w-full bg-gradient-to-t from-rutgers_red to-dark_rutgers_red sticky z-30 top-0 h-[5rem] drop-shadow-lg'>
                <div className='flex flex-wrap items-center justify-between sm:h-auto w-full h-full' id='top-nav-container'>
                    <header id="nav_header" className='flex w-full items-center justify-between'>
                        <div className='flex my-1 p-2 gap-2' id='nav-logo-wrapper'>
                            <Image
                                className='flex h-auto py-3 px-2 shadow-lg'
                                src={nsfLogo}
                                alt="NSF Logo"
                                width={55}
                                height={55}
                            />
                            <Image
                                className='flex h-auto py-3 px-2 shadow-xl'
                                src={gslsampLogo}
                                alt="GSLSAMP Logo"
                                width={55}
                                height={55}
                            />
                            <h1 className='flex py-3 ml-4 text-xs text-white sm:text-base md:text-xl font-semibold sm:font-medium'>
                                Garden State-Louis Stokes Alliance <br className='sm:hidden'/> for Minority Participation
                            </h1>
                        </div>

                        <a onClick={hideDiv} id="hamburger" className='flex mx-2 w-10 hover:cursor-pointer'>
                            <Image
                                className='w-auto px-2 drop-shadow grayscale'
                                src={menuIcon}
                                alt="Hamburger Menu Icon"
                                width={50}
                                height={50}
                            />
                        </a>                    
                    </header>

                    {/* PAGES - should disappear on small screens */}
                    <div id="navigation-pc" className='h-full w-[40rem]'>
                        <div className='z-30 h-full flex w-full justify-between px-2 items-center'>
                            <Link className='nav_link text-white flex items-center' href="/"> Home </Link>
                            <Link className='nav_link text-white' href="/eligibility"> Eligibility & Benefits </Link>
                            <Link className='nav_link text-white' href="/events"> Events </Link>
                            <Link className='nav_link text-white' href="/faq"> FAQ & Resources </Link>
                        </div>  
                    </div>

                </div>             
            </nav>
            
            {/* mobile nav bar*/}
            {isVisible && (
                <div id='mobile-nav' className='fixed left-0 top-4 w-full bg-gray-100 z-50 mt-16 h-[92vh]'>
                    <ul className='grid grid-col-6 h-full text-base justify-center place-items-center flex-wrap text-white font-bold my-1 mx-5 list-none no-underline nav-page-list' id="bottom-nav-page-list">
                        {/* FIXME: GLOBAL CSS FOR HOVER EFFECT IS NOT WORKING */}
                        <li className='w-screen h-full flex justify-center items-center border-b border-[#D4D4D4]'>
                            <Link onClick={hideDiv} className='flex items-center justify-center hover:bg-gray-200 w-screen h-full text-center text-black font-bold uppercase ' href="/">Home</Link>
                        </li>
                        <li className='w-full h-full flex justify-center items-center border-b border-[#D4D4D4]'>
                            <Link onClick={hideDiv} className='flex items-center justify-center hover:bg-gray-200 w-screen h-full text-center text-black font-bold uppercase' href="/eligibility">Eligibility & Benefits</Link>
                        </li>
                        <li className='w-full h-full flex justify-center items-center border-b border-[#D4D4D4]'>
                            <Link onClick={hideDiv} className='flex items-center justify-center hover:bg-gray-200 w-screen h-full text-center text-black font-bold uppercase' href="/events">Events</Link>
                        </li>
                        <li className='w-full h-full flex justify-center items-center border-b border-[#D4D4D4] '>
                            <Link onClick={hideDiv} className='flex items-center justify-center hover:bg-gray-200 w-screen h-full text-center text-black font-bold uppercase' href="/faq">FAQs & Resources</Link>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default NavBar;