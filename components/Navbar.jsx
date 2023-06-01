import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  // ...existing code...

  return (
    <div style={{ backgroundColor: color }} className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        {/* ...existing code... */}

        <div className="align-left">
          <div className="mb-4 inline-flex rounded-md">
            <button className='py-2 px-2 bg-red-2-- text-white text-center mr-4 text-sm sm:py-2 sm:px-2 sm:text-base md:py-2 md:px-2 md:text-base lg:py-2 lg:px-2 lg:text-base xl:py-2 xl:px-2 xl:text-base 2xl:py-2 2xl:px-2 2xl:text-lg'>Sign in</button>
            <button className='py-2 px-2 bg-red-400 text-white text-center mr-4 text-sm sm:py-2 sm:px-2 sm:text-base md:py-2 md:px-2 md:text-base lg:py-2 lg:px-2 lg:text-base xl:py-2 xl:px-2 xl:text-base 2xl:py-2 2xl:px-2 2xl:text-lg'>Sign up</button>
          </div>
        </div>

        {/* ...existing code... */}
      </div>
    </div>
  );
};

export default Navbar;
