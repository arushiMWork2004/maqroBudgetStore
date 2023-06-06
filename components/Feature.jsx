import React from 'react';

const Features = () => {
  return (
    <div className="mx-48 my-32">
      <div className="grid grid-cols-1 gap-15  md:grid-cols-2 gap-4 lg:grid-cols-2 gap-14">
      <div className="p-15 mr-32">
        <h1 className="text-8xl font-mono font-bold mb-24">Feature</h1>
        <p className="mb-24 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="mt-18">
            <div className="mb-4 inline-flex rounded-md">
              <button type="button" className="py-4 px-6 bg-red-400 text-white">
                Try now
              </button>
            </div>
            <div className="inline-flex rounded-md font-bold">
              <button type="button" className="py-4 px-6 text-white w-full text-center text-base">
                Learn more
              </button>
            </div>
          </div>
      </div>
      <div className="p-4 mr-32">
        <img
          alt="img1"
          src="https://images.unsplash.com/photo-1580508174046-170816f65662?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpbmFuY2UlMjBwaW5rfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          className='w-full'
        />
      </div>
      <div className="p-4 mr-32">
        <img
          alt="img1"
          src="https://images.unsplash.com/photo-1580508174046-170816f65662?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpbmFuY2UlMjBwaW5rfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          className='w-full'
        />
      </div>
      <div className="p-4 mr-32">
        <h1 className="text-8xl font-mono font-bold mb-24">Feature</h1>
        <p className="mb-24 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="mt-18">
            <div className="mb-4 inline-flex rounded-md">
              <button type="button" className="py-4 px-6 bg-red-400 text-white">
                Try now
              </button>
            </div>
            <div className="inline-flex rounded-md font-bold">
              <button type="button" className="py-4 px-6 text-white w-full text-center text-base">
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
