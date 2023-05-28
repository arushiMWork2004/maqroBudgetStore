import React from 'react';

const Hero = ({ heading, message }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-red-100">
      {/* Text */}
      <div className="text-white text-center">
        <h2 className="text-5xl font-bold">{heading}</h2>
        <p className="py-5 text-xl">{message}</p>
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
