import React from 'react';

const GetStarted = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 p-8">
          <h2 className="text-2xl font-bold font-mono mb-4">Get Started!</h2>
          <p className="font-mono text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a
            lorem sed est faucibus tristique id quis nibh.
          </p>
          <button className="bg-red-300 text-white font-mono py-2 px-4 rounded">
            Sign up
          </button>
        </div>
        <div className="w-full sm:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1524673450801-b5aa9b621b76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmluYW5jZSUyMHBpbmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt="Unsplash"
            className="object-cover h-full w-full rounded-r-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
