import React, { useState } from 'react';

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      review: 'Nullam ullamcorper varius justo, vitae dapibus enim eleifend vitae.',
    },
    {
      id: 3,
      name: 'Sam Johnson',
      review: 'Sed condimentum magna id quam vestibulum, at dapibus lacus porta.',
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="reviews-carousel max-w-screen-xl px-8 mx-auto bg-white">
      <h1 className="text-4xl font-bold font-mono text-center p-4">Customer Reviews</h1>
      <div className="testimonial">
        <p className="mt-2 font-mono text-xl leading-6 text-gray-500 text-center p-4">
          {testimonials[activeIndex].review}
        </p>
        <p className="name font-mono text-xl mt-2 text-base leading-6 text-gray-500 text-center p-4">
          {testimonials[activeIndex].name}
        </p>
      </div>
      <div className="carousel-controls flex justify-center space-x-4 mt-4">
        <button className="carousel-button" onClick={handlePrev}>
          &lt;
        </button>
        <button className="carousel-button" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
