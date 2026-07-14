import React from 'react';
import  iphone from '../assets/iphone.png'

// Simple SVG Icons to keep the component dependency-free
const ChevronRightIcon = () => (
  <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const AppleIcon = () => (
  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,22C14.32,22.05 13.89,21.24 12.37,21.24C10.84,21.24 10.37,21.97 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.1,16.67C20.08,16.74 19.67,18.11 18.71,19.5M15.97,4.17C16.63,3.37 17.07,2.28 16.95,1C16,1.04 14.9,1.6 14.24,2.38C13.68,3.04 13.19,4.14 13.34,5.39C14.39,5.47 15.4,4.88 15.97,4.17Z" />
  </svg>
);

export default function HeroSection() {
  const categories = [
    { name: "Woman's Fashion", hasSub: true },
    { name: "Men's Fashion", hasSub: true },
    { name: "Electronics", hasSub: false },
    { name: "Home & Lifestyle", hasSub: false },
    { name: "Medicine", hasSub: false },
    { name: "Sports & Outdoor", hasSub: false },
    { name: "Baby's & Toys", hasSub: false },
    { name: "Groceries & Pets", hasSub: false },
    { name: "Health & Beauty", hasSub: false },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Left Column: Sidebar Navigation */}
        <aside className="w-full md:w-[240px] pt-10 pb-4 border-r border-gray-200 hidden md:block">
          <ul className="space-y-4 pr-6">
            {categories.map((category, index) => (
              <li 
                key={index} 
                className="flex items-center justify-between text-black hover:text-[#DB4444] cursor-pointer font-medium transition-colors duration-200"
              >
                <span>{category.name}</span>
                {category.hasSub && <ChevronRightIcon />}
              </li>
            ))}
          </ul>
        </aside>

        {/* Right Column: Hero Banner Slider */}
        <div className="flex-1 pt-10">
          <div className="bg-black text-white rounded-sm p-8 md:p-12 flex flex-col-reverse md:flex-row items-center justify-between min-h-[344px] relative overflow-hidden">
            
            {/* Banner Left Content */}
            <div className="flex flex-col space-y-4 max-w-md z-10">
              <div className="flex items-center space-x-4">
                <AppleIcon />
                <span className="font-normal text-sm md:text-base tracking-wide">
                  iPhone 14 Series
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-wide">
                Up to 10% <br /> off Voucher
              </h1>
              
              <div className="pt-2">
                <a 
                  href="#shop" 
                  className="inline-flex items-center border-b border-white pb-1 font-semibold hover:text-gray-300 transition-colors duration-200"
                >
                  Shop Now
                  <ArrowRightIcon />
                </a>
              </div>
            </div>

            {/* Banner Right Content: Image */}
            <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0 z-10">
              <img 
                src={iphone} 
                alt="iPhone 14 Promo" 
                className="object-contain h-[200px] md:h-[300px] transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Background Accent (Optional Subtle Glow) */}
            <div className="absolute right-0 bottom-0 w-72 h-72 bg-gradient-to-tr from-[#DB4444]/20 to-transparent rounded-full filter blur-3xl pointer-events-none"></div>
          </div>
          
          {/* Slider Pagination Dots */}
          <div className="flex justify-center space-x-2 mt-4">
            <span className="w-3 h-3 rounded-full bg-gray-300 cursor-pointer"></span>
            <span className="w-3 h-3 rounded-full bg-gray-300 cursor-pointer"></span>
            <span className="w-3 h-3 rounded-full bg-[#DB4444] cursor-pointer"></span>
            <span className="w-3 h-3 rounded-full bg-gray-300 cursor-pointer"></span>
            <span className="w-3 h-3 rounded-full bg-gray-300 cursor-pointer"></span>
          </div>
        </div>

      </div>
    </section>
  );
}