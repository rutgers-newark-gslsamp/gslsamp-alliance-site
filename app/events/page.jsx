'use client';

import { useState } from 'react';

// Components
import Image from 'next/image';
import Title from '../../src/components/Title';

// Images
import backdrop from '../../public/nj_background.png';

export default function Events() {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <>

            <Title name="GS-LSAMP Events"></Title>
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
                    <div className="bg-gray-100 p-6 rounded-lg shadow-inner mx-4">
                        <h3 className="text-xl font-bold text-center mb-4 border-b-2 ">
                            About our Annual Conference
                        </h3>
                        <p className="text-center text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porttitor felis. Ut placerat risus ultrices ipsum tempor consectetur in sed nisi. Vestibulum aliquam, mauris non ornare pretium, purus velit malesuada est, eu commodo dui enim luctus tellus. Nulla eu eleifend enim. In hac habitasse platea dictumst. Donec pellentesque aliquet sollicitudin. Nam diam lectus, lacinia sed tincidunt eget, porttitor ac ante. Mauris semper vehicula ligula.
                        </p>
                    </div>

                    {/* Subscribe button */}
                    <div className='flex justify-center my-4'>
                        <button className="bg-gradient-to-t from-rutgers_red to-dark_rutgers_red border-dark_rutgers_red text-white font-bold py-2 px-4 rounded-md shadow-md hover:scale-105 transition">
                            <a href="http://www.youtube.com/@gs-lsampalliance1278" target='_blank' rel='noopener noreferrer'>
                                Subscribe to our YouTube Channel to see more events!
                            </a>
                        </button>
                    </div>
            </div>
        </>
    );
}
