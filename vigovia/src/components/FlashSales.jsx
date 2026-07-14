import React from 'react';
import flash1 from '../assets/flash1.png'
import flash2 from '../assets/flash2.png'
import flash3 from '../assets/flash3.png'
import flash4 from '../assets/flash4.png'
// import flash5 from '../assets/flash5.png'
// import flash6 from '../assets/flash6.png'
// import flash7 from '../assets/flash7.png'
// import flash8 from '../assets/flash8.png'


// Common Section Header Component (Red Badge + Title)
function SectionHeader({ subtitle, title }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-3">
        <div className="w-5 h-10 bg-[#DB4444] rounded-sm"></div>
        <span className="text-[#DB4444] font-semibold text-sm md:text-base">{subtitle}</span>
      </div>
      <h2 className="text-2xl md:text-4xl font-bold tracking-wide text-black">{title}</h2>
    </div>
  );
}

export default function FlashSales() {
  // Demo Data for Flash Sales Products
  const flashProducts = [
    { id: 1, discount: "-40%", title: "HAVIT HV-G92 Gamepad", price: "$120", originalPrice: "$160", rating: "88", image:flash1  },
    { id: 2, discount: "-35%", title: "AK-900 Wired Keyboard", price: "$960", originalPrice: "$1160", rating: "75", image: flash2},
    { id: 3, discount: "-30%", title: "IPS LCD Gaming Monitor", price: "$370", originalPrice: "$400", rating: "99", image: flash3 },
    { id: 4, discount: "-25%", title: "S-Series Comfort Chair", price: "$375", originalPrice: "$400", rating: "99", image: flash4 },
  ];

  return (
    <section className="space-y-8">
      {/* Header + Timer */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-20">
          <SectionHeader subtitle="Today's" title="Flash Sales" />
          
          {/* Timer Section */}
          <div className="flex items-center space-x-4 text-black">
            <div className="text-center">
              <p className="text-xs font-semibold">Days</p>
              <p className="text-2xl md:text-3xl font-bold">03</p>
            </div>
            <span className="text-[#DB4444] text-2xl font-bold">:</span>
            <div className="text-center">
              <p className="text-xs font-semibold">Hours</p>
              <p className="text-2xl md:text-3xl font-bold">23</p>
            </div>
            <span className="text-[#DB4444] text-2xl font-bold">:</span>
            <div className="text-center">
              <p className="text-xs font-semibold">Minutes</p>
              <p className="text-2xl md:text-3xl font-bold">19</p>
            </div>
            <span className="text-[#DB4444] text-2xl font-bold">:</span>
            <div className="text-center">
              <p className="text-xs font-semibold">Seconds</p>
              <p className="text-2xl md:text-3xl font-bold">56</p>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex space-x-2">
          <button className="w-11 h-11 rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-gray-200 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
          </button>
          <button className="w-11 h-11 rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-gray-200 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>

      {/* Product List/Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {flashProducts.map((product) => (
          <div key={product.id} className="group relative bg-[#F5F5F5] rounded-sm p-4 flex flex-col justify-between min-h-[350px]">
            {/* Top Row: Discount Tag & Action Icons */}
            <div className="flex justify-between items-start">
              <span className="bg-[#DB4444] text-white text-xs px-3 py-1 rounded font-semibold">
                {product.discount}
              </span>
              <div className="flex flex-col space-y-2">
                <button className="p-2 bg-white rounded-full shadow hover:bg-[#DB4444] hover:text-white transition">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318z"/></svg>
                </button>
                <button className="p-2 bg-white rounded-full shadow hover:bg-[#DB4444] hover:text-white transition">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                </button>
              </div>
            </div>

            {/* Product Image */}
            <div className="flex justify-center py-4">
              <img src={product.image} alt={product.title} className="h-40 object-contain group-hover:scale-105 transition duration-300" />
            </div>

            {/* Hover "Add to Cart" Button */}
            <button className="absolute bottom-0 left-0 right-0 bg-black text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-sm font-semibold">
              Add To Cart
            </button>

            {/* Content Details (Below the Card Container for better layout) */}
            <div className="bg-white pt-3 space-y-1">
              <h3 className="font-bold text-base text-black truncate">{product.title}</h3>
              <div className="flex items-center space-x-3">
                <span className="text-[#DB4444] font-semibold">{product.price}</span>
                <span className="text-gray-400 line-through text-sm">{product.originalPrice}</span>
              </div>
              {/* Simple Stars */}
              <div className="flex items-center space-x-1">
                <span className="text-yellow-400 text-sm">★★★★★</span>
                <span className="text-gray-500 text-xs font-semibold">({product.rating})</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Button */}
      <div className="flex justify-center pt-4">
        <button className="bg-[#DB4444] text-white px-12 py-4 rounded-sm font-semibold hover:bg-[#c23b3b] transition duration-200">
          View All Products
        </button>
      </div>
    </section>
  );
}