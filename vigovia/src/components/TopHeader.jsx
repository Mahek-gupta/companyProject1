import React from 'react';

const TopHeader = () => {
  return (
    <div className="w-full bg-[#000000] text-[#FAFAFA] min-h-[48px] py-2 md:py-0 flex flex-col md:flex-row items-center justify-between px-4 md:px-20 text-[14px]">
      
      {/* Invisible Spacer for desktop layout balance */}
      <div className="hidden md:block w-[78px]"></div>

      {/* Center: Promo Announcement */}
      <div className="text-center flex-1 font-poppins tracking-wide leading-tight">
        <span>Summer Sale For All Swim Suits And Express Delivery - OFF 50%! </span>
        <a 
          href="#shop" 
          className="underline font-semibold ml-2 hover:text-gray-300 transition-colors inline-block whitespace-nowrap"
        >
          ShopNow
        </a>
      </div>

      {/* Right: Language Dropdown */}
      <div className="flex items-center gap-1 mt-2 md:mt-0 self-center md:self-auto">
        <select className="bg-transparent text-[#FAFAFA] border-none outline-none cursor-pointer font-poppins text-[14px] hover:text-gray-300">
          <option value="English" className="bg-black text-white">English</option>
          <option value="Spanish" className="bg-black text-white">Español</option>
          <option value="French" className="bg-black text-white">Français</option>
        </select>
        {/* Chevron Icon Down */}
        <svg 
          className="w-3 h-3 text-white pointer-events-none" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

    </div>
  );
};

export default TopHeader;