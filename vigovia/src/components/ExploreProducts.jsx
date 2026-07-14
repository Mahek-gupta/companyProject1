import React from 'react';
import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'
import product3 from '../assets/product3.png'
import product4 from '../assets/product4.png'
import product5 from '../assets/product5.png'
import product6 from '../assets/product6.png'
import product7 from '../assets/product7.png'
import product8 from '../assets/product8.png'

// Sample product data based on the Figma section grid
const products = [
  { id: 1, title: "Breed Dry Dog Food", price: "$100", rating: 3, reviews: 35, image: product1, isNew: false },
  { id: 2, title: "CANON EOS DSLR Camera", price: "$360", rating: 4, reviews: 95, image: product2, isNew: false },
  { id: 3, title: "ASUS FHD Gaming Laptop", price: "$700", rating: 5, reviews: 325, image: product3, isNew: false },
  { id: 4, title: "Curology Product Set", price: "$500", rating: 4, reviews: 145, image: product4, isNew: false },
  { id: 5, title: "Kids Electric Car", price: "$960", rating: 5, reviews: 65, image: product5, isNew: true, colorOptions: ["#FB1314", "#DB4444"] },
  { id: 6, title: "Jr. Zoom Soccer Cleats", price: "$1160", rating: 5, reviews: 35, image: product6, isNew: false, colorOptions: ["#EEFF14", "#DB4444"] },
  { id: 7, title: "GP11 Shooter USB Gamepad", price: "$660", rating: 4, reviews: 55, image: product7, isNew: true, colorOptions: ["#000000", "#DB4444"] },
  { id: 8, title: "Quilted Satin Jacket", price: "$660", rating: 4, reviews: 80, image: product8, isNew: false, colorOptions: ["#184A48", "#DB4444"] },
];

export default function ExploreProducts() {
  return (
    <section className="w-full max-w-[1170px] mx-auto px-4 py-12 font-sans">
      
      {/* Section Header */}
      <div className="flex items-end justify-between mb-10">
        <div className="space-y-2">
          {/* Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-5 h-10 bg-[#DB4444] rounded-sm"></div>
            <span className="text-[#DB4444] font-semibold text-sm">Our Products</span>
          </div>
          {/* Main Heading */}
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-black">
            Explore Our Products
          </h2>
        </div>
        
        {/* Navigation Arrows */}
        <div className="flex gap-2">
          <button className="w-11 h-11 bg-[#F5F5F5] rounded-full flex items-center justify-center hover:bg-gray-200 transition">
            <span className="text-xl text-black">←</span>
          </button>
          <button className="w-11 h-11 bg-[#F5F5F5] rounded-full flex items-center justify-center hover:bg-gray-200 transition">
            <span className="text-xl text-black">→</span>
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10">
        {products.map((product) => (
          <div key={product.id} className="group flex flex-col relative bg-white">
            
            {/* Image Card Wrapper */}
            <div className="bg-[#F5F5F5] w-full h-[250px] rounded-sm flex items-center justify-center relative overflow-hidden">
              
              {/* New Product Tag */}
              {product.isNew && (
                <span className="absolute top-3 left-3 bg-[#00FF66] text-white text-xs font-medium px-3 py-1 rounded-sm">
                  NEW
                </span>
              )}

              {/* Action Icons (Wishlist and Quick View) */}
              <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-100 transition">
                  <span className="text-lg">♡</span>
                </button>
                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-100 transition">
                  <span className="text-sm">👁</span>
                </button>
              </div>

              {/* Product Image */}
              <img 
                src={product.image} 
                alt={product.title} 
                className="max-h-[180px] object-contain transition-transform duration-300 group-hover:scale-105"
              />

              {/* Add To Cart Button (Slides up on Hover) */}
              <button className="absolute bottom-0 left-0 right-0 bg-black text-white text-sm py-2.5 font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                Add To Cart
              </button>
            </div>

            {/* Product Meta Details */}
            <div className="mt-4 flex flex-col gap-1.5">
              <h3 className="font-medium text-black text-base line-clamp-1 group-hover:text-[#DB4444] transition-colors">
                {product.title}
              </h3>
              
              <div className="flex items-center gap-3">
                {/* Price */}
                <span className="text-[#DB4444] font-semibold text-base">{product.price}</span>
                
                {/* Star Rating & Reviews */}
                <div className="flex items-center">
                  <div className="flex text-yellow-400 text-sm">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i}>{i < product.rating ? "★" : "☆"}</span>
                    ))}
                  </div>
                  <span className="text-gray-400 text-xs font-semibold ml-2">({product.reviews})</span>
                </div>
              </div>

              {/* Color Variants (If available) */}
              {product.colorOptions && (
                <div className="flex gap-2 mt-1">
                  {product.colorOptions.map((color, cIdx) => (
                    <button 
                      key={cIdx} 
                      className={`w-4 h-4 rounded-full border border-white outline outline-1 ${cIdx === 0 ? 'outline-black' : 'outline-transparent'}`} 
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              )}
            </div>

          </div>
        ))}
      </div>

      {/* Bottom View All Button */}
      <div className="text-center mt-14">
        <button className="bg-[#DB4444] text-white font-medium px-12 py-4 rounded-sm hover:bg-[#c23b3b] transition duration-200">
          View All Products
        </button>
      </div>

    </section>
  );
}