import React from 'react';
import arrival1 from '../assets/arrival1.png'
import arrival2 from '../assets/arrival2.png'
import arrival3 from '../assets/arrival3.png'
import arrival4 from '../assets/arrival4.png'

export default function NewArrival() {
  return (
    <section className="w-full max-w-[1170px] mx-auto px-4 py-12 font-sans">
      
      {/* Section Header */}
      <div className="space-y-2 mb-10">
        <div className="flex items-center gap-3">
          <div className="w-5 h-10 bg-[#DB4444] rounded-sm"></div>
          <span className="text-[#DB4444] font-semibold text-sm">Featured</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-black">
          New Arrival
        </h2>
      </div>

      {/* Grid Layout Structure */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
        
        {/* LEFT BIG BLOCK: PlayStation 5 */}
        <div className="bg-black rounded-sm relative min-h-[450px] md:min-h-[550px] flex items-end p-6 md:p-8 group overflow-hidden">
          {/* Background Image / Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <img 
              src={arrival1}
              alt="PlayStation 5" 
              className="w-full h-full object-contain object-bottom transition-transform duration-500 group-hover:scale-102"
            />
          </div>
          
          {/* Content Overlay */}
          <div className="relative z-10 max-w-[280px] space-y-3">
            <h3 className="text-xl md:text-2xl font-bold tracking-wide">PlayStation 5</h3>
            <p className="text-xs md:text-sm text-[#FAFAFA] opacity-90 leading-relaxed">
              Black and White version of the PS5 coming out on sale.
            </p>
            <a 
              href="#shop-ps5" 
              className="inline-block text-white font-medium text-sm border-b border-gray-400 hover:border-white pb-0.5 transition-colors"
            >
              Shop Now
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: Split Grid */}
        <div className="flex flex-col gap-8">
          
          {/* TOP RIGHT: Women's Collection */}
          <div className="bg-[#0D0D0D] rounded-sm relative flex items-end justify-between p-6 md:p-8 min-h-[250px] group overflow-hidden">
            {/* Right aligned image */}
            <div className="absolute inset-y-0 right-0 w-1/2 flex items-center justify-end">
              <img 
                src={arrival2} 
                alt="Women's Collection" 
                className="h-full object-contain object-right-bottom transition-transform duration-500 group-hover:scale-102"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-[250px] space-y-3">
              <h3 className="text-xl md:text-2xl font-bold tracking-wide">Women's Collections</h3>
              <p className="text-xs md:text-sm text-[#FAFAFA] opacity-90">
                Featured woman collections that give you another vibe.
              </p>
              <a 
                href="#shop-women" 
                className="inline-block text-white font-medium text-sm border-b border-gray-400 hover:border-white pb-0.5 transition-colors"
              >
                Shop Now
              </a>
            </div>
          </div>

          {/* BOTTOM RIGHT: Two Smaller Grid Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            
            {/* Speakers Item */}
            <div className="bg-[#1A1A1A] rounded-sm relative flex items-end p-6 min-h-[250px] group overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center p-6">
                {/* 
                  Aapke pic ke blur glow effect ko add karne ke liye background circle.
                */}
                <div className="absolute w-28 h-28 bg-gray-600/20 rounded-full blur-2xl"></div>
                <img 
                  src={arrival3} 
                  alt="Speakers" 
                  className="max-h-[160px] object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="relative z-10 space-y-2">
                <h3 className="text-lg font-bold">Speakers</h3>
                <p className="text-xs text-[#FAFAFA] opacity-80 line-clamp-1">Amazon wireless speakers</p>
                <a 
                  href="#shop-speakers" 
                  className="inline-block text-white font-medium text-xs border-b border-gray-400 hover:border-white pb-0.5 transition-colors"
                >
                  Shop Now
                </a>
              </div>
            </div>

            {/* Perfume Item */}
            <div className="bg-[#1A1A1A] rounded-sm relative flex items-end p-6 min-h-[250px] group overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="absolute w-28 h-28 bg-gray-600/20 rounded-full blur-2xl"></div>
                <img 
                  src={arrival4}
                  alt="Perfume" 
                  className="max-h-[160px] object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="relative z-10 space-y-2">
                <h3 className="text-lg font-bold">Perfume</h3>
                <p className="text-xs text-[#FAFAFA] opacity-80 line-clamp-1">GUCCI INTENSE OUD EDP</p>
                <a 
                  href="#shop-perfume" 
                  className="inline-block text-white font-medium text-xs border-b border-gray-400 hover:border-white pb-0.5 transition-colors"
                >
                  Shop Now
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}