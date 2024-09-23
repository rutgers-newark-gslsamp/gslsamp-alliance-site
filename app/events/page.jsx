'use client';

// Components
import Image from 'next/image';
import Title from '../../src/components/Title';
import Carousel from '../../src/components/Carousel';

// Images
import backdrop from '../../public/nj_background.png';
import youtubeIcon from '../../public/youtube_icon.png';


// placeholder images
import systemicImage1 from "../../public/event-photos/sample_event_1.png";
import systemicImage2 from "../../public/event-photos/sample_event_2.png";
import systemicImage3 from "../../public/event-photos/sample_event_3.png";

export default function Events() {

    // sample carousel images for systemic
    const systemicImages = [systemicImage1, systemicImage2, systemicImage3];

    return (    
        <>

            <Title name="GS-LSAMP Events"></Title>

            {/* Conference Layer */}
            <div className="flex justify-center flex-col"> 

                   <Image src={backdrop} alt="background" className='relative w-full object-cover h-[25rem] sm:h-[36rem]'></Image>

                    {/* Most Recent Conference Section */}
                    <div className='w-full absolute top-[14rem] flex justify-center'>
                        <article className="shadow-xl w-[25rem] sm:w-[45rem] bg-gradient-to-t from-rutgers_red to-dark_rutgers_red border-dark_rutgers_red border-2 border-red-800 rounded-xl shadow-md">
                            <h1 className="text-center p-4 bg-gradient-to-t from-rutgers_red to-dark_rutgers_red border-dark_rutgers_red text-white text-xl font-bold drop-shadow-md rounded-t-xl">
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
                                className='aspect-video w-full rounded-b-xl'
                            />
                        </article>
                    </div>

                    {/* About Conference Section */}
                    <div className="p-6 mx-4 flex flex-col items-center">
                        <h3 className="text-3xl font-bold text-center mb-4 border-b-4 md:w-[50rem] border-b-dark_off_white">
                            About our Annual Conference
                        </h3>
                        <p className="text-center text-gray-700 shadow m-4 p-4 md:w-[50rem] bg-dark_off_white ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porttitor felis. Ut placerat risus ultrices ipsum tempor consectetur in sed nisi. Vestibulum aliquam, mauris non ornare pretium, purus velit malesuada est, eu commodo dui enim luctus tellus. Nulla eu eleifend enim. In hac habitasse platea dictumst. Donec pellentesque aliquet sollicitudin. Nam diam lectus, lacinia sed tincidunt eget, porttitor ac ante. Mauris semper vehicula ligula.
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
                <div className='h-[25rem] systemicBg flex justify-center items-center'>
                    <Carousel images={systemicImages} />
                </div>
                

                {/* About SySTEMic Section */}
                <div className="p-6 mx-4 flex flex-col items-center">
                    <h3 className="text-3xl font-bold text-center mb-4 md:w-[50rem] border-b-4 border-b-dark_off_white">
                        About SySTEMic
                    </h3>
                    <p className="text-center text-gray-700 shadow m-4 md:w-[50rem] p-4 bg-dark_off_white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porttitor felis. Ut placerat risus ultrices ipsum tempor consectetur in sed nisi. Vestibulum aliquam, mauris non ornare pretium, purus velit malesuada est, eu commodo dui enim luctus tellus. Nulla eu eleifend enim. In hac habitasse platea dictumst. Donec pellentesque aliquet sollicitudin. Nam diam lectus, lacinia sed tincidunt eget, porttitor ac ante. Mauris semper vehicula ligula.
                    </p>
                </div>
            </div>

        </>
    );
}
