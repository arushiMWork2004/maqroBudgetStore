import React from 'react';

const Features = () => {
  return (
    <div className="max-w-screen-xl p-8 mx-auto">
      <ul className="flex flex-wrap items-start gap-8">
        <li className="w-2/5">
          <h2 className="mb-12 text-3xl font-extrabold leading-9 text-gray-900 font-mono">
            Budget Tracker
          </h2>
          <p className="mt-2 text-base leading-6 text-gray-500">
            Learn more about the different ways that our product can help put more money in your pocket. With our product, we will help you uncover all the different ways you can save.
          </p>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <button type="button" className="py-4 px-6 bg-gray-200 text-white w-full text-center text-base">
                Try now
              </button>
            </div>
            <div className="inline-flex ml-3 rounded-md shadow">
              <button type="button" className="py-4 px-6 bg-gray-600 text-white w-full text-center text-base">
                Learn more
              </button>
            </div>
          </div>
        </li>
        <li className="w-2/5">
          <img src="https://images.unsplash.com/photo-1663124178667-28b3776d7c15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNwb25zb3IlMjBsb2dvc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        </li>
        <li className="w-2/5">
          <img src="https://images.unsplash.com/photo-1663124178667-28b3776d7c15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNwb25zb3IlMjBsb2dvc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        </li>
        <li className="w-2/5">
          <h2 className="font-mono mb-12 text-3xl font-extrabold leading-9 text-gray-900">
            Store
          </h2>
          <p className="mt-2 text-base leading-6 text-gray-500">
            Learn more about the different ways you can save with our various products and the various ways we can help you save money.
          </p>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <button type="button" className="py-4 px-6 bg-gray-200 text-white w-full text-center text-base">
                Try now
              </button>
            </div>
            <div className="inline-flex ml-3 rounded-md shadow">
              <button type="button" className="py-4 px-6 bg-gray-600 text-white w-full text-center text-base">
                Learn more
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Features;
