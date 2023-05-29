import React, { useState } from 'react';

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageName: 'https://images.unsplash.com/photo-1580508174046-170816f65662?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpbmFuY2UlMjBwaW5rfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 2,
      name: 'Jane Smith',
      review: 'Nullam ullamcorper varius justo, vitae dapibus enim eleifend vitae.',
      imageName: 'https://images.unsplash.com/photo-1543444949-0b251f30a4e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmluYW5jZSUyMHBpbmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 3,
      name: 'Sam Johnson',
      review: 'Sed condimentum magna id quam vestibulum, at dapibus lacus porta.',
      imageName: 'https://images.unsplash.com/photo-1495695911455-19054a55f92f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZpbmFuY2UlMjBwaW5rfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="reviews-carousel max-w-screen-xl px-8 mx-auto bg-white py-3 ">
        <div className="flex items-center justify-center">
        <a href="#" class="relative block">
            <img alt="profil" src="https://images.unsplash.com/photo-1580508174046-170816f65662?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpbmFuY2UlMjBwaW5rfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" class="mx-auto object-cover rounded-full h-10 w-10 "/>
            
        </a>
        <p1 className="inline-flex ml-4 font-mono">Finance Finally</p1>
        </div>
        
      <h1 className="text-4xl font-bold font-mono text-center p-4">Customer Reviews</h1>
      <div className="testimonial">
        <p className="mt-2 font-mono text-xl leading-6 text-gray-500 text-center p-4">
          {testimonials[activeIndex].review}
        </p>
        <div className="flex items-center justify-center">
        <a href="#" class="relative block">
            <img alt="profil" 
            src={testimonials[activeIndex].imageName}
            className="mx-auto object-cover rounded-full h-10 w-10 "
            />
            
        </a>
        <p1 className="inline-flex ml-4 font-mono">{testimonials[activeIndex].name}</p1>
        </div>
      </div>
      <div className="carousel-controls flex justify-center space-x-4 mt-4">
        <button className="carousel-button" onClick={handlePrev}>
          &lt;
        </button>
        <p className="text-4xl"> · · ·</p>
        <button className="carousel-button" onClick={handleNext}>
          &gt;
        </button>
      </div>
      <div>
      
        
      </div>
    </div>
  );
};

export default Testimonial;
