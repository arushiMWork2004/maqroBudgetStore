import React from 'react';

const GetStarted = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="w-full mx-auto bg-white rounded-lg shadow-md flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-6xl font-bold font-mono mb-4">Get Started!</h2>
          <p className="font-mono text-gray-600 mb-4">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
          </p>
          <button className="bg-red-300 text-white font-mono py-2" style={{ width: '150px' }}>
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
