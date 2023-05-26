import React, { useState } from 'react';

const PricingPlan = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const togglePlan = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <div className="flex justify-center items-center py-8">
      <div className="max-w-5xl">
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
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded shadow w-full">
            <h2 className="text-2xl font-bold mb-4">Basic</h2>
            <p className="text-gray-600 mb-4">{isMonthly ? '$10/month' : '$100/year'}</p>
            <ul className="text-gray-600">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <button className="bg-red-300 text-white py-2 px-4 mt-4 rounded">
              Select Plan
            </button>
          </div>
          <div className="bg-white p-10 rounded shadow w-full">
            <h2 className="text-2xl font-bold mb-4">Standard</h2>
            <p className="text-gray-600 mb-4">{isMonthly ? '$20/month' : '$200/year'}</p>
            <ul className="text-gray-600">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <button className="bg-red-300 text-white py-2 px-4 mt-6 rounded">
              Select Plan
            </button>
          </div>
          <div className="bg-white p-8 rounded shadow w-full">
            <h2 className="text-2xl font-bold mb-4">Premium</h2>
            <p className="text-gray-600 mb-4">{isMonthly ? '$30/month' : '$300/year'}</p>
            <ul className="text-gray-600">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
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
