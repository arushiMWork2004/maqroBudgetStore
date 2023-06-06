import React from 'react';

const SponsorsComponent = () => {
  return (
    <div>
      <h1 className="text-6xl font-bold font-mono text-center p-4 sm:mb-24 ">Trusted by</h1>
      <div className="flex justify-center mx-auto mb-24">
      <div className="flex flex-wrap justify-center space-x-28 sm:justify-start space-x-4">
        <img
          src="/download.png"
          alt="Image 1"
          className="h-32 mb-4 sm:mb-0"
        />

        <img
          src="/download2.png"
          alt="Image 2"
          className="h-32 mb-4 sm:mb-0"
        />

        <img
          src="/download3.png"
          alt="Image 3"
          className="h-32 mb-4 sm:mb-0"
        />
        <img
          src="/download4.png"
          alt="Image 4"
          className="h-32 mb-4 sm:mb-0"
        />
        <img
          src="/download5.png"
          alt="Image 5"
          className="h-32 mb-4 sm:mb-0"
        />
        <img
          src="/download6.png"
          alt="Image 5"
          className="h-32 mb-4 sm:mb-0"
        />
        {/* Add more images */}
      </div>
      </div>
    </div>
  );
};

export default SponsorsComponent;
