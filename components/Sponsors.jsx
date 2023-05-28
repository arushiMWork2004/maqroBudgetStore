import React from 'react';

const SponsorsComponent = () => {
  return (
    <div className="max-w-screen-xl p-8 mx-auto">
      <h1 className="text-4xl font-bold font-mono text-center p-4">Trusted by</h1>
      <div className="flex flex-wrap justify-center sm:justify-start space-x-4 sm:space-x-8">
        <img
          src="https://images.unsplash.com/photo-1663124178667-28b3776d7c15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNwb25zb3IlMjBsb2dvc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Image 1"
          className="h-64 mb-4 sm:mb-0"
        />

        <img
          src="https://images.unsplash.com/photo-1522780550166-284a0288c8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1hem9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"
          alt="Image 2"
          className="h-64 mb-4 sm:mb-0"
        />

        <img
          src="https://images.unsplash.com/photo-1612994370726-5d4d609fca1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwcGxlJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Image 3"
          className="h-64 mb-4 sm:mb-0"
        />
        <img
          src="https://images.unsplash.com/photo-1612994370726-5d4d609fca1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwcGxlJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Image 3"
          className="h-64 mb-4 sm:mb-0"
        />

  

        {/* Add more images */}
      </div>
    </div>
  );
};

export default SponsorsComponent;
