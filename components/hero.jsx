import React from 'react';

const Hero = ({heading, message}) => {
  return (
    
    <div className="flex items-center justify-center h-screen w-full ml-0.5  bg-center bg-cover bg-red-50">
      <div className = " flex items-center justify-center h-screen w-4/6 bg-cover bg-center">
      {/* Overlay */}
      <div className="p-5 text-white mt-[-10rem]">
        <h2 className="text-5xl font-bold">{heading}</h2>
        <p className="py-5 text-xl">{message}</p>
        <button className="px-8 py-2 border">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
