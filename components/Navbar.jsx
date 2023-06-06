import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown menu

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff');
        setTextColor('#000000');
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
      }
    };

    window.addEventListener('scroll', changeColor);

    return () => {
      // Clean up the event listener on unmount
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

  return (
    <div
      style={{ backgroundColor: color }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="m-auto flex justify-between items-center p-4 text-white">
        <div className="flex items-center -left">
          <a href="#" className="relative block">
            <img
              alt="profil"
              src="https://images.unsplash.com/photo-1580508174046-170816f65662?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpbmFuY2UlMjBwaW5rfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              className="mx-auto object-cover rounded-full h-10 w-10"
            />
          </a>
          <p
            style={{ color: textColor }}
            className="inline-flex ml-4 font-mono"
          >
            Finance Finally
          </p>
        </div>
        <ul
          style={{ color: textColor }}
          className={`hidden sm:flex ${
            nav ? 'absolute' : ''
          } sm:relative top-full left-0 sm:top-0 sm:left-auto bg-black text-center sm:bg-transparent sm:text-white`}
        >
          <li className="relative group">
            <button
              className="flex items-center p-4"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Features
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`ml-2 h-5 w-5 transform ${
                  dropdownOpen ? 'rotate-180' : 'rotate-0'
                } transition-transform duration-300`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12l-5-5 1.5-1.5L10 9l3.5-3.5L15 7l-5 5z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {/* Dropdown content */}
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10">
                <Link href="/dropdown-item1">
                  <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Dropdown Item 1
                  </a>
                </Link>
                <Link href="/dropdown-item2">
                  <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Dropdown Item 2
                  </a>
                </Link>
                <Link href="/dropdown-item3">
                  <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Dropdown Item 3
                  </a>
                </Link>
              </div>
            )}
          </li>
          <li className="p-4">
            <Link href="/pricing">Pricing</Link>
          </li>
          <li className="p-4">
            <Link href="/aboutUs">About Us</Link>
          </li>
          <li className="p-4">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="p-4">
            <Link href="/blog">Blog</Link>
          </li>
          {/* Add a dropdown menu */}
        </ul>
        <div className="align-left">
          <div className="mb-4 inline-flex rounded-md">
            <button
              style={{ color: textColor }}
              className="py-2 px-2 bg-red-2-- font-mono text-center mr-4 sm:py-2 sm:px-2 sm:text-sm md:py-2 md:px-2 md:text-sm lg:py-2 lg:px-2 lg:text-sm"
            >
              Sign in
            </button>
            <button className="py-2 px-2 font-mono bg-red-400 text-white text-center mr-4 sm:py-2 sm:px-2 sm:text-sm md:py-2 md:px-2 md:text-sm lg:py-2 lg:px-2 lg:text-sm">
              Sign up
            </button>
          </div>
        </div>
        {/* Mobile button */}
        <button
          onClick={handleNav}
          className="sm:hidden text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {nav ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        {/* Mobile Menu */}
        <div
          className={`${
            nav ? 'flex' : 'hidden'
          } sm:hidden absolute top-full left-0 right-0 bg-white text-gray-500 text-center ease-in duration-300`}
        >
          <ul className="w-full">
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/pricing">Pricing</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/aboutUs">About Us</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/blog">Blog</Link>
            </li>
            {/* Add dropdown menu in mobile view */}
            <li className="relative group">
              <button
                className="flex items-center p-4"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Features
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`ml-2 h-5 w-5 transform ${
                    dropdownOpen ? 'rotate-180' : 'rotate-0'
                  } transition-transform duration-300`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12l-5-5 1.5-1.5L10 9l3.5-3.5L15 7l-5 5z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {/* Dropdown content */}
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10">
                  <Link href="/dropdown-item1">
                    <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Dropdown Item 1
                    </a>
                  </Link>
                  <Link href="/dropdown-item2">
                    <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Dropdown Item 2
                    </a>
                  </Link>
                  <Link href="/dropdown-item3">
                    <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Dropdown Item 3
                    </a>
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
