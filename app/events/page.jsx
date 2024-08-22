'use client';

import { useState } from 'react';

export default function Events() {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <>
            <div className="flex justify-center bg-gray-200"> 
                <section className="relative w-[90vw] lg:w-[75vw] bg-white shadow-lg rounded-lg overflow-hidden">  

                    {/* Header Section */}
                    <div className="relative bg-red-800">
                        <h2 className="text-center text-white md:text-[1.5rem] lg:text-[1.8rem] drop-shadow-lg font-regular py-4">
                            GS-LSAMP Events
                        </h2>
                    </div>

                    {/* Most Recent Conference Section */}
                    <div className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/events.png')` }}>
                        <div className="flex justify-center py-6">
                            <article className="w-[90%] lg:w-[80%] bg-white border-2 border-red-800 rounded-lg shadow-md">
                                <h1 className="text-center p-4 bg-red-800 text-white text-sm md:text-xl font-regular drop-shadow-md rounded-t-lg border-b-2 border-gray-400">
                                    Most Recent Conference
                                </h1>

                                {/* Placeholder and YouTube Video */}
                                <div className='relative flex justify-center p-4'>
                                    { !showVideo && (
                                        <div 
                                            className="absolute inset-0 flex items-center justify-center bg-white cursor-pointer" 
                                            onClick={() => setShowVideo(true)}
                                        >
                                            <img 
                                                src="/youtube-play-button.png" 
                                                alt="YouTube Play Button" 
                                                className="h-[80px] w-[80px] hover:scale-110 transition-transform duration-300"
                                            />
                                        </div>
                                    )}
                                    
                                    {showVideo && (
                                        <iframe
                                            width="100%" 
                                            height="300px"  
                                            src="https://www.youtube.com/embed/t2HxIdkXPDw?si=-Sc8HLdXgqCbASYO" 
                                            title="YouTube video player" 
                                            frameBorder="0" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                            referrerPolicy="strict-origin-when-cross-origin" 
                                            allowFullScreen
                                        />
                                    )}
                                </div>
                            </article>
                        </div>
                    </div>

                    {/* About Conference Section */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow-inner mx-4">
                        <h3 className="text-xl font-bold text-center mb-4 border-b-2 border-gray-400">
                            About our Annual Conference
                        </h3>
                        <p className="text-center text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a porttitor felis. Ut placerat risus ultrices ipsum tempor consectetur in sed nisi. Vestibulum aliquam, mauris non ornare pretium, purus velit malesuada est, eu commodo dui enim luctus tellus. Nulla eu eleifend enim. In hac habitasse platea dictumst. Donec pellentesque aliquet sollicitudin. Nam diam lectus, lacinia sed tincidunt eget, porttitor ac ante. Mauris semper vehicula ligula.
                        </p>
                    </div>

                    {/* Subscribe button */}
                    <div className='flex justify-center my-4'>
                        <button className="bg-red-800 text-white font-bold py-2 px-4 rounded-md shadow-md hover:scale-105 transition">
                            <a href="http://www.youtube.com/@gs-lsampalliance1278" target='_blank' rel='noopener noreferrer'>
                                Subscribe to our YouTube Channel to see more events!
                            </a>
                        </button>
                    </div>

                </section>
            </div>
        </>
    );
}
