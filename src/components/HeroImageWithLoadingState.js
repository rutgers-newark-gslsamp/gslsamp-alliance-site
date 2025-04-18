import React, { useState } from 'react';
import Image from 'next/image';

export default function HeroImageWithLoadingState({ src, alt, width = 1500, height = 710 }) {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoaded = () => {
        setIsLoading(false);
    };

    const handleError = () => {
        setIsLoading(false);
        console.error('Failed to load image');
    };

    return (
        <div className='flex justify-center'>
            {/* Use the Next.js Image component alias */}
            <div className='justify-center relative overflow-hidden'>
                <Image 
                    src={src} 
                    alt={alt}
                    width={width}
                    height={height}
                    onLoad={handleImageLoaded}
                    onError={handleError}
                    placeholder='blur'
                    className='w-full object-cover'
                />
                <div className='absolute inset-0 xl:bg-gradient-to-r bg-gradient-to-b from-white'/>
            </div>
        </div>
    );
}
