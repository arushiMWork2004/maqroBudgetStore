import React from 'react';

const SponsorsComponent = () => {
  return (
    <div className="max-w-screen-xl p-8 mx-auto mb-24">
      <h1 className="text-4xl font-bold font-mono text-center p-4">Trusted by</h1>
      <div className="flex flex-wrap justify-center sm:justify-start space-x-4 sm:space-x-8">
        <img
          src="/download.png"
          alt="Image 1"
          className="h-24 mb-4 sm:mb-0"
        />

        <img
          src="/download2.png"
          alt="Image 2"
          className="h-24 mb-4 sm:mb-0"
        />

        <img
          src="/download3.png"
          alt="Image 3"
          className="h-24 mb-4 sm:mb-0"
        />
        <img
          src="/download4.png"
          alt="Image 4"
          className="h-24 mb-4 sm:mb-0"
        />
        <img
          src="/download5.png"
          alt="Image 5"
          className="h-24 mb-4 sm:mb-0"
        />
        <img
          src="/download6.png"
          alt="Image 5"
          className="h-24 mb-4 sm:mb-0"
        />
        {/* Add more images */}
      </div>
    </div>
  );
};

export default SponsorsComponent;
