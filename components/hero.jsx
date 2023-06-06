import React from 'react';

const Hero = ({ heading, message }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-red-100 mb-20">
      {/* Text */}
      <div className="mt-40 mb-20">
        <div className="text-white text-center">
          <h2 className="text-4xl mb-2 sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-mono">{heading}</h2>
          <p className="py-4 text-2xl mb-4 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-mono">{message}</p>
          <div className="mb-4 inline-flex rounded-md">
            <button className='py-4 px-6 sm:py-4 sm:px-6 md:py-5 md:px-7 lg:py-6 lg:px-8 xl:py-6 xl:px-8 2xl:py-6 2xl:px-8 text-lg sm:text-xl md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl bg-red-400 text-white text-center mr-4'>Join Us Now</button>
            <button className='py-4 px-6 sm:py-4 sm:px-6 md:py-5 md:px-7 lg:py-6 lg:px-8 xl:py-6 xl:px-8 2xl:py-6 2xl:px-8 sm:text-xl md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl bg-white text-red-400 border border-red-400  text-center'>Request Demo</button>
          </div>
        </div>
      </div>
      {/* Lottie Animation */}
      <div className="p-5">
        <div>
          <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
          <lottie-player className="w-7/5 sm:w-2/5 md:w-3/5 lg:w-2/5 xl:w-1/3 2xl:w-1/4"
            src="https://lottie.host/0c471144-7cb9-4dcf-8b95-f9218bb1e53f/s1Zn31veC6.json"
            background="transparent"
            speed="1"
            style={{ minWidth: '100%', height: 'auto' }}
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </div>
  );
};

export default Hero;
