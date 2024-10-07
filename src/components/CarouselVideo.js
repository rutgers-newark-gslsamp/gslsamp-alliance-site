// CarouselVideo.js
'use client'
import React, { useState } from 'react';
import VideoWithLoadingState from './VideoWithLoadingState';

const CarouselVideo = ({ videos }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  const goToVideo = (index) => {
    setCurrentVideoIndex(index);
  };


  {/* Red Padding BOX */}
  return ( 
    <div className="flex flex-col items-center bg-gradient-to-t from-rutgers_red to-dark_rutgers_red rounded-3xl p-6 relative pb-2 md:pb-0 lg:w-[24rem] drop-shadow">
      
      {/* Indicator dots */}
      <div className="flex space-x-2 absolute top-5 left-1/2 transform -translate-x-1/2 drop-shadow">
        {videos.map((_, index) => (
          <span
            key={index}
            className={`cursor-pointer ${
              index === currentVideoIndex ? 'bg-white' : 'bg-gray-400'
            } w-2 h-2 rounded-full`}
            onClick={() => goToVideo(index)}
          ></span>
        ))}
      </div>

      <div className="z-20 flex flex-col items-center mt-6 mb-4 drop-shadow-lg border"> {/* Increased top margin */}
        <VideoWithLoadingState url={videos[currentVideoIndex]} />
      </div>


      {/* Previous and next buttons */}
      <div className="absolute top-2 left-0 right-0 flex justify-between items-center px-4 drop-shadow">
        <button
          onClick={previousVideo}
          className="text-white hover:text-red-200 font-bold text-xl"
        >
          &#9664; {/* LEFT Arrow HTML Symbol */}
        </button>

        <button
          onClick={nextVideo}
          className="text-white hover:text-red-200 font-bold text-xl"
        >
          &#9654; {/* RIGHT Arrow HTML Symbol */}
        </button>
      </div>

    </div>
  );
};

export default CarouselVideo;