import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-black text-[#FAFAFA] font-sans pt-20 pb-6 border-t border-gray-900">
      <div className="max-w-[1170px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 items-start">
        
        {/* Column 1: Exclusive / Subscribe */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-wider text-white">Exclusive</h2>
          <h3 className="text-xl font-medium">Subscribe</h3>
          <p className="text-sm font-light text-[#FAFAFA]/80">Get 10% off your first order</p>
          
          {/* Input Box with Paper Plane / Send Icon */}
          <div className="relative max-w-[217px] border-[1.5px] border-white rounded-md overflow-hidden bg-transparent">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full bg-transparent text-sm font-light px-4 py-3 pr-10 outline-none text-white placeholder-gray-500"
            />
            {/* FIGMA FIX: Send / Paper Plane Icon */}
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:opacity-80 transition">
              <svg className="w-5 h-5 transform rotate-45 -translate-y-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Column 2: Support */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-white">Support</h3>
          <p className="text-sm font-light leading-relaxed text-[#FAFAFA]/80 max-w-[175px]">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p className="text-sm font-light text-[#FAFAFA]/80 break-words">exclusive@gmail.com</p>
          <p className="text-sm font-light text-[#FAFAFA]/80">+88015-88888-9999</p>
        </div>

        {/* Column 3: Account */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-white">Account</h3>
          <ul className="space-y-3 text-sm font-light text-[#FAFAFA]/80">
            <li><a href="#profile" className="hover:underline transition">My Account</a></li>
            <li><a href="#login" className="hover:underline transition">Login / Register</a></li>
            <li><a href="#cart" className="hover:underline transition">Cart</a></li>
            <li><a href="#wishlist" className="hover:underline transition">Wishlist</a></li>
            <li><a href="#shop" className="hover:underline transition">Shop</a></li>
          </ul>
        </div>

        {/* Column 4: Quick Link */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-white">Quick Link</h3>
          <ul className="space-y-3 text-sm font-light text-[#FAFAFA]/80">
            <li><a href="#privacy" className="hover:underline transition">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:underline transition">Terms Of Use</a></li>
            <li><a href="#faq" className="hover:underline transition">FAQ</a></li>
            <li><a href="#contact" className="hover:underline transition">Contact</a></li>
          </ul>
        </div>

        {/* Column 5: Download App */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-white">Download App</h3>
          <p className="text-xs font-light text-gray-400">Save $3 with App New User Only</p>
          
          {/* FIGMA FIX: Actual QR Code Image and Store SVGs Wrapper */}
          <div className="flex gap-3 items-center">
            {/* QR Code Container (Aap apni Qr Image src me add kr skte h) */}
            <div className="w-20 h-20 bg-white p-1 rounded-sm flex items-center justify-center">
              <img 
                src="path-to-your-qrcode.png" 
                alt="QR Code" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback to visual representation if image path missing
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = '<div className="w-full h-full border-2 border-black p-1 flex flex-wrap gap-0.5"><div className="w-3 h-3 bg-black"></div><div className="w-3 h-3 bg-black ml-auto"></div><div className="w-3 h-3 bg-black mt-auto"></div></div>';
                }}
              />
            </div>
            
            {/* Google Play & App Store Buttons with Real SVG Layouts */}
            <div className="flex flex-col gap-2">
              {/* Google Play Button */}
              <div className="bg-black border border-gray-600 px-2 py-1.5 rounded flex items-center gap-2 cursor-pointer w-[110px] hover:bg-gray-900 transition">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.78 12 3.609 22.186c-.198-.198-.309-.47-.309-.753V2.567c0-.283.111-.555.309-.753zM14.487 12.707l2.84 2.84-12.247 7.03c-.496.285-1.122.115-1.407-.381-.07-.123-.106-.262-.106-.403L14.487 12.707zm3.551-1.414l3.123 1.794c.496.285.666.911.381 1.407-.11.19-.283.337-.487.42l-3.321-3.321.304-.3zM14.487 11.293L3.674 2.193c.404-.413 1.054-.426 1.474-.03l12.179 6.99-2.84 2.14z"/>
                </svg>
                <div className="flex flex-col text-left">
                  <span className="text-[6px] uppercase text-gray-400 font-bold leading-none">Get it on</span>
                  <span className="text-[10px] font-bold text-white leading-none mt-0.5">Google Play</span>
                </div>
              </div>

              {/* App Store Button */}
              <div className="bg-black border border-gray-600 px-2 py-1.5 rounded flex items-center gap-2 cursor-pointer w-[110px] hover:bg-gray-900 transition">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.7-1.13 1.84-1.01 2.94 1.07.08 2.18-.52 2.84-1.33z"/>
                </svg>
                <div className="flex flex-col text-left">
                  <span className="text-[6px] text-gray-400 font-bold leading-none">Download on the</span>
                  <span className="text-[10px] font-bold text-white leading-none mt-0.5">App Store</span>
                </div>
              </div>
            </div>
          </div>

          {/* FIGMA FIX: Social Links as Clean SVG Icons */}
          <div className="flex gap-6 pt-4 text-white items-center">
            {/* Facebook */}
            <a href="#facebook" className="hover:text-gray-400 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z"/></svg>
            </a>
            {/* Twitter */}
            <a href="#twitter" className="hover:text-gray-400 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
            {/* Instagram */}
            <a href="#instagram" className="hover:text-gray-400 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" h="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            {/* Linkedin */}
            <a href="#linkedin" className="hover:text-gray-400 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Copyright Section */}
      <div className="border-t border-gray-800/40 mt-16 pt-6 text-center">
        <p className="text-sm font-light text-gray-500 tracking-wide">
          &copy; Copyright Rimel 2022. All right reserved
        </p>
      </div>
    </footer>
  );
}