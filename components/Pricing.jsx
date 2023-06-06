import React, { useState } from 'react';

const PricingPlan = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const togglePlan = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <div className="container mx-auto py-8 mt-6 mb-6">
      <div>
        <h1 className="flex mb-2 justify-center text-center font-bold text-8xl sm:text-2xl md:text-6xl font-mono font-bold mb-4">
          Pricing
        </h1>
        <p className="flex mb-4 justify-center text-center text-xl sm:text-sm font-mono mb-4">
          Lorem ipsum dolor sit amet, in atqui possim eos, nec suas ridens et, mea b
        </p>
      </div>
      <div className="flex justify-center mb-4">
        <button
          className={`px-4 py-2 border-8 border-white ${
            isMonthly ? 'bg-red-300' : 'bg-white'
          }`}
          onClick={togglePlan}
        >
          Monthly
        </button>
        <button
          className={`px-4 py-2 border-8 border-white ${
            isMonthly ? 'bg-white' : 'bg-red-300'
          }`}
          onClick={togglePlan}
        >
          Yearly
        </button>
      </div>
      <div className="flex justify-center">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mx-5">
            <div className="px-10 py-4">
              <h2 className="text-4xl font-bold font-mono mb-4">Personal</h2>
              <p className="font-mono">Basic Features Are:</p>
              <div className = "inline-flex">
            <p className="text-gray-600 text-3xl font-bold mb-4">
              {isMonthly ? '$15  /' : '$150 /'}
            </p>
            <p className="text-gray-600 mb-4">
              {isMonthly ? 'month' : ' year'}
            </p>
            </div>
              <ul className="text-gray-600">
                <li>✓Lorem ipsum dolor sit amet, consectetur adip</li>
                <li>✓Lorem ipsum dolor sit amet, consectetur adip 🛈</li>
                <li>✓Lorem ipsum dolor sit amet, consectetur adip</li>
                <li>✗Lorem ipsum dolor sit amet, consectetur adip</li>
                <li>✗Lorem ipsum dolor sit amet, consectetur adip</li>
              </ul>
              <button className="bg-red-300 text-white py-2 px-28 mt-4 rounded">
                Upgrade
              </button>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mx-3">
            <div className="px-10 py-4">
              <h2 className="text-4xl font-bold font-mono mb-4">Standard</h2>
              <p className="font-mono mb-2">Standard Features Are:</p>
              <div className = "inline-flex">
            <p className="text-gray-600 text-3xl font-bold mb-4">
              {isMonthly ? '$30  /' : '$300 /'}
            </p>
            <p className="text-gray-600 mb-4">
              {isMonthly ? 'month' : ' year'}
            </p>
            </div>
              <ul className="text-gray-600">
                <li>✓Lorem ipsum dolor sit amet, consectetur adip</li>
                <li>✓Lorem ipsum dolor sit amet, consectetur adip 🛈</li>
                <li>✓Lorem ipsum dolor sit amet, consectetur adip</li>
                <li>✗Lorem ipsum dolor sit amet, consectetur adip</li>
                <li>✗Lorem ipsum dolor sit amet, consectetur adip</li>
              </ul>
              <button className="bg-red-300 text-white py-2 px-28 mt-4 rounded">
                Upgrade
              </button>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mx-5">
            <div className="px-10 py-4">
              <h2 className="text-4xl font-bold font-mono mb-2">Premium</h2>
              <p className="font-mono mb-2">Premium Features Are:</p>
              <div className = "inline-flex">
            <p className="text-gray-600 text-3xl font-bold mb-4">
              {isMonthly ? '$60  /' : '$600 /'}
            </p>
            <p className="text-gray-600 mb-4">
              {isMonthly ? 'month' : ' year'}
            </p>
            </div>
              <ul className="text-gray-600">
                <li>✓Lorem ipsum dolor sit amet, consectetur adip</li>
                <li>✓Lorem ipsum dolor sit amet, consectetur adip 🛈</li>
                <li>✓Lorem ipsum dolor sit amet, consectetur adip</li>
                <li>✓Lorem ipsum dolor sit amet, consectetur adip</li>
                <li>✓Lorem ipsum dolor sit amet, consectetur adip</li>
              </ul>
              <button className="bg-red-300 text-white py-2 px-28 text-sm mt-4 rounded">
                Contact Sale
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
