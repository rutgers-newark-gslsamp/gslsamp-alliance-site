// New VideoWithLoadingState.js
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const VideoWithLoadingState = ({ url }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => { //useEffect prop is for delaying the video carousel. This component will only render when the it is on client side preventing any hydration errors
    setIsClient(true);
  }, []);

  const handleReady = () => {
    setIsLoading(false);
  };

  const handleError = () => {   //Failed to load video MSG
    setIsLoading(false);
    console.error('Failed to load video');
  };
  if (!isClient) {
    return null; }

  return (
    <div className='flex justify-center react-player'>
      {isLoading && <p>Loading...</p>}
      <ReactPlayer
        url={url}
        playing={false} // Set this to false to prevent autoplay
        controls={true} // Add controls to the video
        onReady={handleReady}
        onError={handleError}
        style={{ display: isLoading ? 'none' : 'block' }}
        height={310}
        width={310}
      />
    </div>
  );
};

export default VideoWithLoadingState;
