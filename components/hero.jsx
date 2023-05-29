import React from 'react';

const Hero = ({ heading, message }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-red-100">
      {/* Text */}
      <div className="text-white text-center">
        <h2 className="text-8xl font-bold font-mono sm:text-6xl md:text-7xl lg:text-8xl">{heading}</h2>
        <p className="py-5 font-bold font-mono text-4xl sm:text-3xl md:text-4xl lg:text-5xl">{message}</p>
        <div className="mb-4 inline-flex rounded-md shadow">
          <button className='py-6 px-8 bg-red-200 text-white text-center mr-4 sm:py-4 sm:px-6 sm:text-lg md:py-5 md:px-7 md:text-xl lg:py-6 lg:px-8 lg:text-2xl'>Join Us Now</button>
          <button className='py-6 px-8 bg-red-400 text-white text-center sm:py-4 sm:px-6 sm:text-lg md:py-5 md:px-7 md:text-xl lg:py-6 lg:px-8 lg:text-2xl'>Request Demo</button>
        </div>
      </div>
      {/* Lottie Animation */}
      <div className="p-5">
        <div>
          <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
          <lottie-player
            src="https://lottie.host/0c471144-7cb9-4dcf-8b95-f9218bb1e53f/s1Zn31veC6.json"
            background="transparent"
            speed="1"
            style={{ width: '100%', maxWidth: '800px', height: 'auto' }}
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </div>
  );
};

export default Hero;
