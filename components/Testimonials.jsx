import React, { useState } from 'react';

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem Loremg elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageName: 'https://images.unsplash.com/photo-1580508174046-170816f65662?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpbmFuY2UlMjBwaW5rfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      job: 'University Student',
    },
    {
      id: 2,
      name: 'Jane Smith',
      review: 'Nullam ullamcorper varius justo, vitae dapibus enim eleifend vitae.Nullam ullamcorper varius justo, vitae dapibus enim eleifend vitae.Nullam ullamcorper varius justo, vitae dapibus enim eleifend vitae.Nullam ullamcorper varius justo, vitae dapibus enim eleifend vitae.Nullam ullamcorper varius justo, vitae dapibus enim eleifend vitae.',
      imageName: 'https://images.unsplash.com/photo-1543444949-0b251f30a4e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmluYW5jZSUyMHBpbmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      job: 'Waitress',
    },
    {
      id: 3,
      name: 'Sam Johnson',
      review: 'Sed condimentum magna id quam vestibulum, at dapibus lacus porta.Sed condimentum magna id quam vestibulum, at dapibus lacus porta.Sed condimentum magna id quam vestibulum, at dapibus lacus porta.Sed condimentum magna id quam vestibulum, at dapibus lacus porta.Sed condimentum magna id quam vestibulum, at dapibus lacus porta.Sed condimentum magna id quam vestibulum, at dapib',
      imageName: 'https://images.unsplash.com/photo-1495695911455-19054a55f92f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZpbmFuY2UlMjBwaW5rfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      job: 'Manager',
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
      <div className="bg-white py-24">
        <div className="reviews-carousel bg-white w-full">
        <div className="flex items-center justify-center mb-2">
        <a href="#" class="relative block">
            <img alt="profil" src="https://images.unsplash.com/photo-1580508174046-170816f65662?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpbmFuY2UlMjBwaW5rfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" class="mx-auto object-cover rounded-full h-10 w-10 "/>
            
        </a>
        </div>
        <p1 className="flex items-center justify-center font-mono">Finance. Finally.</p1>
        
      <div className="testimonial">
        
      <div className="carousel-controls flex justify-center grid grid-cols-4 mt-4 mb-4">

  <button className="mr-24 carousel-button flex justify-end items-center text-4xl" onClick={handlePrev}>
      <img
          src="/left1.png"
          alt="Image 1"
          className="h-8 mb-4 sm:mb-0"
        />
  </button>
  <div className="text-center flex-grow col-start-2 col-span-2">
    <p className="mt-2 font-mono text-3xl leading-6 text-gray-500 p-8">
      {testimonials[activeIndex].review}
    </p>
  </div>
  <button className="ml-24 carousel-button align-right text-4xl" onClick={handleNext}>
      <img
          src="/right1.png"
          alt="Image 1"
          className="h-8 mb-4 sm:mb-0"
        />
  </button>
</div>

            
      </div>
      <div className="flex align-center items-center justify-center">
        <a href="#" class="relative block inline-flex">
            <img alt="profil" 
            src={testimonials[activeIndex].imageName}
            className="mx-auto object-cover rounded-full h-10 w-10 "
            />
            
        </a>
        <p1 className="inline-flex ml-4 font-mono font-bold inline-flex">{testimonials[activeIndex].name} -  </p1>
        <p1 className="inline-flex ml-4 font-monoinline-flex">{testimonials[activeIndex].job}</p1>
        </div>
        </div>
    </div>    
  );
};

export default Testimonial;
