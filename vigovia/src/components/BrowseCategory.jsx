// import React from 'react';
// import icon1 from '../assets/Category-CellPhone.png'
// import icon2 from '../assets/Category-Computer.png'
// import icon3 from '../assets/Category-SmartWatch.png'
// import icon4 from '../assets/Category-Camera.png'
// import icon5 from '../assets/Category-Headphone.png'
// import icon6 from '../assets/Category-Gamepad (1).png'

// function SectionHeader({ subtitle, title }) {
//   return (
//     <div className="space-y-4">
//       <div className="flex items-center space-x-3">
//         <div className="w-5 h-10 bg-[#DB4444] rounded-sm"></div>
//         <span className="text-[#DB4444] font-semibold text-sm md:text-base">{subtitle}</span>
//       </div>
//       <h2 className="text-2xl md:text-4xl font-bold tracking-wide text-black">{title}</h2>
//     </div>
//   );
// }

// export default function BrowseCategory() {
//   // Category Icons & Data
//   const categories = [
//     { name: "Phones", icon:icon1 },
//     { name: "Computers", icon: "💻" },
//     { name: "SmartWatch", icon: "⌚" },
//     { name: "Camera", icon: "📷" },
//     { name: "HeadPhones", icon: "🎧" },
//     { name: "Gaming", icon: "🎮" },
//   ];

//   return (
//     <section className="space-y-8">
//       {/* Header */}
//       <div className="flex justify-between items-end">
//         <SectionHeader subtitle="Categories" title="Browse By Category" />
        
//         {/* Navigation Arrows */}
//         <div className="flex space-x-2">
//           <button className="w-11 h-11 rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-gray-200 transition">
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
//           </button>
//           <button className="w-11 h-11 rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-gray-200 transition">
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
//           </button>
//         </div>
//       </div>

//       {/* Category Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
//         {categories.map((cat, index) => (
//           <div 
//             key={index}
//             className="border border-gray-200 rounded-sm p-6 flex flex-col items-center justify-center space-y-4 cursor-pointer hover:bg-[#DB4444] hover:border-[#DB4444] hover:text-white transition-all duration-300 group min-h-[145px]"
//           >
//             <span className="text-4xl filter group-hover:brightness-200">{cat.icon}</span>
//             <span className="font-medium text-sm text-black group-hover:text-white">{cat.name}</span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


import React from 'react';
import icon1 from '../assets/Category-CellPhone.png';
import icon2 from '../assets/Category-Computer.png';
import icon3 from '../assets/Category-SmartWatch.png';
import icon4 from '../assets/Category-Camera.png';
import icon5 from '../assets/Category-Headphone.png';
import icon6 from '../assets/Category-Gamepad (1).png';

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

export default function BrowseCategory() {
  // Category Icons & Data
  const categories = [
    { name: "Phones", icon: icon1 },
    { name: "Computers", icon: icon2 },
    { name: "SmartWatch", icon: icon3 },
    { name: "Camera", icon: icon4 },
    { name: "HeadPhones", icon: icon5 },
    { name: "Gaming", icon: icon6 },
  ];

  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-end">
        <SectionHeader subtitle="Categories" title="Browse By Category" />
        
        {/* Navigation Arrows */}
        <div className="flex space-x-2">
          <button className="w-11 h-11 rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-gray-200 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <button className="w-11 h-11 rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-gray-200 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {categories.map((cat, index) => (
          <div 
            key={index} 
            className="border border-gray-200 rounded-sm p-6 flex flex-col items-center justify-center space-y-4 cursor-pointer hover:bg-[#DB4444] hover:border-[#DB4444] hover:text-white transition-all duration-300 group min-h-[145px]"
          >
            {/* Image render ho rha hai yahan aur group-hover se filter white ho rha hai */}
            <img 
              src={cat.icon} 
              alt={cat.name}
              className="w-12 h-12 object-contain filter group-hover:brightness-0 group-hover:invert transition duration-300" 
            />
            <span className="font-medium text-sm text-black group-hover:text-white transition duration-300">
              {cat.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
