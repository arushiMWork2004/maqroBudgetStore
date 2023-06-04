import React, { useState } from 'react';
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

const Footer = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setDropdownOpen(false);
  };

  return (
    <footer className="bg-white py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-between">
        <div className="col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1">
          <div className="flex items-center justify-center">
            <a href="#" className="relative block">
              <img
                alt="profil"
                src="https://images.unsplash.com/photo-1580508174046-170816f65662?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpbmFuY2UlMjBwaW5rfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                className="mx-auto object-cover rounded-full h-10 w-10"
              />
            </a>
            <p className="inline-flex ml-4 font-mono">Finance Finally</p>
          </div>
        </div>
        <div className="col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1 container grid grid-cols-2">
          <div>
            <h1 className="font-mono font-bold text-xl mb-2">Product</h1>
            <p className="font-mono mb-2">Features</p>
            <p className="font-mono mb-2">Pricing</p>
          </div>
          <div>
            <h1 className="font-mono font-bold text-xl mb-2">Resources</h1>
            <p className="font-mono mb-2">Blog</p>
            <p className="font-mono mb-2">User guides</p>
            <p className="font-mono mb-2">Webinar</p>
          </div>
        </div>
        <div className="col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1">
          <h1 className="font-mono font-bold text-xl mb-2">Company</h1>
          <p className="font-mono mb-2">About us</p>
          <p className="font-mono mb-2">Join us</p>
        </div>
        <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-1">
          <h1 className="font-mono font-bold text-xl">Subscribe to our newsletter</h1>
          <p className="font-mono mb-2">For product announcements and inclusive insights</p>
          <div className="col-span-1 flex items-center justify-start space-x-2">
            <div className="flex items-center bg-white rounded-lg px-4 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-black"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M19.586 3H.414A.414.414 0 000 3.414L0 16.586a.414.414 0 00.414.414H19.59a.41.41 0 00.416-.414V3.414A.414.414 0 0019.586 3zm0 1a1.41 1.41 0 00-1.414 1.414v.166l-8 5-8-5V5.414A1.41 1.41 0 00.414 4h19.172zM18 6.838L10 11.836 2 6.838V15h16V6.838z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="email"
                placeholder="input your email"
                className="bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 px-4 py-2"
              />
            </div>
            <div>
              <button className="bg-red-200 px-8 py-2">subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto border-b w-2/3"></div>
      <div className="container mx-auto mt-6 flex justify-center">
        <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-between">
          <div className="relative">
            <button
              className="flex items-center justify-between bg-white border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-blue-500"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {selectedLanguage}
              <svg
                className={`w-5 h-5 ml-2 transform ${dropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute z-10 bg-white border border-gray-300 rounded-md mt-2">
                <ul>
                  <li
                    className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleLanguageChange('English')}
                  >
                    English
                  </li>
                  <li
                    className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleLanguageChange('Spanish')}
                  >
                    Spanish
                  </li>
                  <li
                    className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleLanguageChange('French')}
                  >
                    French
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <p className="text-sm">
              © Finance Finally • Privacy • Terms • Sitemap
            </p>
          </div>
          <div className="inline-flex">
            {/* Render the Facebook icon */}
            <FaFacebook className="text-gray-600 text-3xl mr-2" />

            {/* Render the LinkedIn icon */}
            <FaLinkedin className="text-gray-600 text-3xl mr-2" />

            {/* Render the YouTube icon */}
            <FaYoutube className="text-gray-600 text-3xl mr-2" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
