import React from 'react';
import selling1 from '../assets/selling1.png'
import selling2 from '../assets/selling2.png'
import selling3 from '../assets/selling3.png'
import selling4 from '../assets/selling4.png'

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

export default function BestSelling() {
  const bestProducts = [
    { id: 1, title: "The North Coat", price: "$260", originalPrice: "$360", rating: "65", image: selling1 },
    { id: 2, title: "Gucci Savannah Bag", price: "$960", originalPrice: "$1160", rating: "65", image: selling2 },
    { id: 3, title: "RGB Liquid CPU Cooler", price: "$160", originalPrice: "$170", rating: "65", image:selling3 },
    { id: 4, title: "Small Bookshelf", price: "$360", originalPrice: null, rating: "65", image: selling4 },
  ];

  return (
    <section className="space-y-8">
      {/* Header with Side Button */}
      <div className="flex justify-between items-end">
        <SectionHeader subtitle="This Month" title="Best Selling Products" />
        <button className="bg-[#DB4444] text-white px-8 py-3 rounded-sm font-semibold hover:bg-[#c23b3b] transition duration-200 text-sm">
          View All
        </button>
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {bestProducts.map((product) => (
          <div key={product.id} className="group relative bg-[#F5F5F5] rounded-sm p-4 flex flex-col justify-between min-h-[350px]">
            {/* Top Action Icons */}
            <div className="flex justify-end">
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

            {/* Hover Cart button */}
            <button className="absolute bottom-0 left-0 right-0 bg-black text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-sm font-semibold">
              Add To Cart
            </button>

            {/* Product Details */}
            <div className="bg-white pt-3 space-y-1">
              <h3 className="font-bold text-base text-black truncate">{product.title}</h3>
              <div className="flex items-center space-x-3">
                <span className="text-[#DB4444] font-semibold">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-gray-400 line-through text-sm">{product.originalPrice}</span>
                )}
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-yellow-400 text-sm">★★★★★</span>
                <span className="text-gray-500 text-xs font-semibold">({product.rating})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}