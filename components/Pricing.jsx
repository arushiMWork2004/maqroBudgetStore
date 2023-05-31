import React, { useState } from 'react';

const PricingPlan = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const togglePlan = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-center mb-4">
        <button
          className={`px-4 py-2 mr-2 ${
            isMonthly ? 'bg-red-300' : 'bg-white'
          }`}
          onClick={togglePlan}
        >
          Monthly
        </button>
        <button
          className={`px-4 py-2 ${
            isMonthly ? 'bg-white' : 'bg-red-300'
          }`}
          onClick={togglePlan}
        >
          Yearly
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <div className="px-6 py-4">
            <h2 className="text-xl font-bold font-mono mb-4">Personal</h2>
            <p className="font-mono">Basic Features Are:</p>
            <div className = "inline-flex">
            <p className="text-gray-600 text-2xl font-bold mb-4">
              {isMonthly ? '$30  /' : '$300 /'}
            </p>
            <p className="text-gray-600 mb-4">
              {isMonthly ? 'month' : ' year'}
            </p>
            </div>
            
            <ul className="text-gray-600">
              <li>✓Feature 1</li>
              <li>✓Feature 2 🛈</li>
              <li>✓Feature 3</li>
              <li>✗Feature 4</li>
              <li>✗Feature 5</li>
            </ul>
            <button className="bg-red-300 text-white py-2 px-4 mt-4 rounded">
              Select Plan
            </button>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <div className="px-6 py-4">
            <h2 className="text-xl font-bold font-mono mb-4">Standard</h2>
            <p className="font-mono mb-2">Standard Features Are:</p>
            <div className = "inline-flex">
            <p className="text-gray-600 text-2xl font-bold mb-4">
              {isMonthly ? '$20  /' : '$150 /'}
            </p>
            <p className="text-gray-600 mb-4">
              {isMonthly ? 'month' : ' year'}
            </p>
            </div>
            <ul className="text-gray-600">
              <li>✓Feature 1</li>
              <li>✓Feature 2 🛈</li>
              <li>✓Feature 3</li>
              <li>✗Feature 4</li>
              <li>✗Feature 5</li>
            </ul>
            <button className="bg-red-300 text-white py-2 px-4 mt-4 rounded">
              Select Plan
            </button>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <div className="px-6 py-4">
            <h2 className="text-xl font-bold font-mono mb-2">Premium</h2>
            <p className="font-mono mb-2">Premium Features Are:</p>
            <div className = "inline-flex">
            <p className="text-gray-600 text-2xl font-bold mb-4">
              {isMonthly ? '$30  /' : '$300 /'}
            </p>
            <p className="text-gray-600 mb-4">
              {isMonthly ? 'month' : ' year'}
            </p>
            </div>
            <ul className="text-gray-600">
              <li>✓Feature 1</li>
              <li>✓Feature 2 🛈</li>
              <li>✓Feature 3</li>
              <li>✓Feature 4</li>
              <li>✓Feature 5</li>
            </ul>
            <button className="bg-red-300 text-white py-2 px-4 mt-4 rounded">
              Select Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
