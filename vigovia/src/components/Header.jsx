import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#FFFFFF] border-b border-[#E5E5E5]">
      {/* 
        Figma UI Design Alignment:
        - Layout width standard ke mutabik desktop par left/right padding `xl:px-[136px]` chodi gayi hai.
        - Taaki responsive screen par horizontal whitespace perfectly align rahe.
      */}
      <div className="w-full mx-auto h-[80px] px-4 md:px-12 xl:px-[136px] flex items-center justify-between">
        
        {/* 1. Left Section: Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="font-poppins font-bold text-[24px] tracking-[0.03em] text-[#000000]">
            Exclusive
          </a>
        </div>

        {/* 2. Center Section: Navigation Links (Desktop View) */}
        <nav className="hidden md:flex items-center gap-[48px]">
          <a href="#home" className="font-poppins text-[16px] text-[#000000] border-b-2 border-black pb-0.5 font-medium transition-all">
            Home
          </a>
          <a href="#contact" className="font-poppins text-[16px] text-[#000000] hover:border-b-2 hover:border-gray-400 pb-0.5 transition-all">
            Contact
          </a>
          <a href="#about" className="font-poppins text-[16px] text-[#000000] hover:border-b-2 hover:border-gray-400 pb-0.5 transition-all">
            About
          </a>
          <a href="#signup" className="font-poppins text-[16px] text-[#000000] hover:border-b-2 hover:border-gray-400 pb-0.5 transition-all">
            Sign Up
          </a>
        </nav>

        {/* 3. Right Section: Search & Actions */}
        <div className="hidden lg:flex items-center gap-[24px]">
          
          {/* Search Field Box */}
          <div className="relative flex items-center bg-[#F5F5F5] rounded-[4px] pl-[20px] pr-[12px] py-[7px] w-[243px]">
            <input 
              type="text" 
              placeholder="What are you looking for?" 
              className="bg-transparent text-[12px] font-poppins text-[#000000] placeholder-[#7D7D7D] focus:outline-none w-full pr-6"
            />
            {/* Search Magnifier Icon */}
            <svg className="w-5 h-5 text-black absolute right-3 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-[16px]">
            {/* Wishlist Heart Icon */}
            <button className="text-black hover:text-red-500 transition-colors" aria-label="Wishlist">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>

            {/* Shopping Cart Icon */}
            <button className="text-black hover:text-gray-600 transition-colors" aria-label="Cart">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
          </div>

        </div>

        {/* 4. Mobile Menu Trigger (Hamburger) */}
        <div className="flex items-center lg:hidden gap-4">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black focus:outline-none">
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>

      </div>

      {/* 5. Mobile Responsive Drawer Layer */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-4 shadow-sm animate-fadeIn">
          <nav className="flex flex-col gap-3 font-poppins text-[16px]">
            <a href="#home" className="text-black font-medium">Home</a>
            <a href="#contact" className="text-black">Contact</a>
            <a href="#about" className="text-black">About</a>
            <a href="#signup" className="text-black">Sign Up</a>
          </nav>
          <div className="relative flex items-center bg-[#F5F5F5] rounded-[4px] px-3 py-2 w-full">
            <input type="text" placeholder="Search..." className="bg-transparent text-[14px] focus:outline-none w-full" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;