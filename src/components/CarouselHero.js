'use client'

import React, { useState, useEffect } from 'react';
import HeroImageWithLoadingState from './HeroImageWithLoadingState';

const CarouselHero = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 5000); // Change image every 5 seconds

    return () => {
      clearInterval(intervalId); // Cleanup the interval on unmount
    };
  }, [currentImageIndex]);

  return (
    <div className="relative flex flex-col xl:flex-row justify-center border-gray-300 drop-shadow-xl bg-white"> 
      
      <div className='bg-white w-full xl:w-[50%] mx-auto pt-[2rem] xl:pl-[10rem] my-auto flex flex-col'>
        <h1 className='italic text-gray-500 text-4xl text-center'>The Garden State</h1>
        <h1 className='italic text-dark_rutgers_red text-8xl text-center'>LSAMP</h1>
        <h1 className='text-gray-400 text-lg text-center'>Louis Stokes Alliance for Minority Participation</h1>
      </div>

      {/* Images fade on right */}
      <div> 
        <HeroImageWithLoadingState src={images[currentImageIndex]} alt={"Carousel Hero Item"} />
        
        {/* Clickable Indicator Dots at top*/}
        <div className="absolute bottom-4 xl:top-7 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-gray-400'}`}
              style={{ cursor: 'pointer' }}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default CarouselHero;

