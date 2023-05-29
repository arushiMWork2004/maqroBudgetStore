import React from 'react';

const Features = () => {
  return (
    <div className="max-w-screen-xl p-8 mx-auto bg-color-white">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 lg:w-5/12">
          <h2 className="mb-12 text-3xl font-extrabold leading-9 text-gray-900 font-mono">
            Budget Tracker
          </h2>
          <p className="mt-2 text-base leading-6 text-gray-500">
            Learn more about the different ways that our product can help put more money in your pocket. With our product, we will help you uncover all the different ways you can save.
          </p>
          <div className="mt-4">
            <div className="mb-4 inline-flex rounded-md shadow">
              <button type="button" className="py-4 px-6 bg-red-400 text-white w-full text-center text-base">
                Try now
              </button>
            </div>
            <div className="inline-flex rounded-md shadow">
              <button type="button" className="py-4 px-6 bg-red-200 text-white w-full text-center text-base">
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-5/12">
          <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
          <lottie-player
            src="https://assets4.lottiefiles.com/packages/lf20_0qaHLD5frO.json"
            background="transparent"
            speed="2"
            style={{ width: '300px', height: '300px' }}
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-4">
        <div className="w-full md:w-1/2">
          <img src="https://images.unsplash.com/photo-1580508174046-170816f65662?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpbmFuY2UlMjBwaW5rfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
        <div className="w-full md:w-1/2 lg:w-5/12">
          <h2 className="font-mono mb-12 text-3xl font-extrabold leading-9 text-gray-900">
            Store
          </h2>
          <p className="mt-2 text-base leading-6 text-gray-500">
            Learn more about the different ways you can save with our various products and the various ways we can help you save money.
          </p>
          <div className="mt-4">
            <div className="mb-4 inline-flex rounded-md shadow">
              <button type="button" className="py-4 px-6 bg-red-400 text-white w-full text-center text-base">
                Try now
              </button>
            </div>
            <div className="inline-flex rounded-md shadow">
              <button type="button" className="py-4 px-6 bg-red-200 text-white w-full text-center text-base">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
