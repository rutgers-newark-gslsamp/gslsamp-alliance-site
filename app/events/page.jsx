'use client';

// Components
import Image from 'next/image';
import TitleHeader from '../../src/components/TitleHeader';
import Carousel from '../../src/components/Carousel';

// Images
import youtubeIcon from '../../public/youtube_icon.png';

import systemicImage1 from "../../public/event-photos/systemic/sySTEMic 2024 1st place team.png";
import systemicImage2 from "../../public/event-photos/systemic/sySTEMic 2024 2nd place team.png";
import systemicImage3 from "../../public/event-photos/systemic/sySTEMic 2024 3rd place team.png";
import systemicImage4 from "../../public/event-photos/systemic/sySTEMic 2024 topic graphic.png";
import systemicImage5 from "../../public/event-photos/systemic/sySTEMic 2025 topic graphic.png";

export default function Events() {

    // sample carousel images for systemic
    const systemicImages = [systemicImage5, systemicImage4, systemicImage1, systemicImage2, systemicImage3];

    return (    
        <>

            <TitleHeader first="GS-LSAMP" second="Events"/>

            {/* Conference Layer */}
            <div className=" flex justify-center flex-col"> 

                   <div className='eventBg h-[24rem] sm:h-[34rem] flex flex-col items-center justify-center'>

                        {/* Most Recent Conference Section */}
                        <div className='w-full flex justify-center'>
                            <article className="shadow-xl w-[25rem] sm:w-[45rem] bg-gradient-to-t from-rutgers_red to-dark_rutgers_red border-dark_rutgers_red border-2 border-red-800 sm:rounded-xl shadow-md">
                                <h1 className="text-center p-4 bg-gradient-to-t from-rutgers_red to-dark_rutgers_red border-dark_rutgers_red text-white text-xl font-bold drop-shadow-md sm:rounded-t-xl">
                                    Most Recent Conference
                                </h1>

                                {/* YouTube Video */}
                                <iframe
                                    src="https://www.youtube.com/embed/t2HxIdkXPDw?si=-Sc8HLdXgqCbASYO" 
                                    title="YouTube video player" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    referrerPolicy="strict-origin-when-cross-origin" 
                                    allowFullScreen
                                    className='aspect-video w-full sm:rounded-b-xl'
                                />
                            </article>
                        </div>
                   </div>

                    

                    {/* About Conference Section */}
                    <div className="p-6 mx-4 flex flex-col items-center">
                        <h3 className="text-3xl font-bold text-center mb-4 border-b-4 md:w-[50rem] border-b-dark_off_white">
                            About our Annual Conference
                        </h3>
                        <p className="text-center text-gray-700 shadow m-4 p-4 md:w-[50rem] bg-dark_off_white ">
                        Every year, GS-LSAMP provides over 250 research opportunities to its students. The annual conference showcases the work these students accomplish through poster presentations. Students get to relate their research and results to an audience of peers and faculty members, as they would at a professional conference. This experience provides them with greater STEM identity, a larger learning community, networking opportunities and is a real confidence boost for most. Those attending students who are not participating get to catch the research bug, with the presenters becoming role models. The conference is attended by nearly 500 people each year. Watch the video of the most recent conference above or click subscribe to view past conference videos.
                        </p>
                    </div>

                    {/* Subscribe button */}
                    <div className='flex justify-center mb-8'>
                        <button className="shadow bg-gradient-to-t from-rutgers_red to-dark_rutgers_red border-dark_rutgers_red text-white font-bold py-2 px-4 rounded-md shadow-md hover:scale-105 transition">
                            <a href="http://www.youtube.com/@gs-lsampalliance1278" target='_blank' rel='noopener noreferrer' className='flex'>
                                <Image src={youtubeIcon} alt="Youtube Icon" className='w-[1.9rem] pr-2'/>
                                Subscribe 
                            </a>
                        </button>
                    </div>
            </div>

            {/* SySTEMic Layer */}
            <div className="flex justify-center flex-col">
            
                {/* SySTEMic images */}
                <div className='h-[25rem] eventBg flex justify-center items-center'>
                    <Carousel images={systemicImages} />
                </div>
                

                {/* About SySTEMic Section */}
                <div className="p-6 mx-4 flex flex-col items-center">
                    <h3 className="text-3xl font-bold text-center mb-4 md:w-[50rem] border-b-4 border-b-dark_off_white">
                        About sySTEMic
                    </h3>
                    <p className="text-center text-gray-700 shadow m-4 md:w-[50rem] p-4 bg-dark_off_white">
                    sySTEMic (show your STEM innovation challenge) is an annual team competition around a given topic. Teams of 4-7 students from GS-LSAMP and the Northern NJ-B2B spend 2-3 months innovating a solution to a real world problem. Past topics have included food insecurity, refugee camps, rising sea level and plastics in the environment. Teams then present their innovations Shark-Tank style in 5-minute pitches followed by Q&A. Judges select the top three teams, who are awarded prizes.
                    </p>
                </div>
            </div>

        </>
    );
}
