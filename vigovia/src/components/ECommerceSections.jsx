import React from 'react';

export default function ECommerceSections() {
  return (
    <div className="w-full max-w-[1170px] mx-auto px-4 py-12 space-y-16 font-sans">
      
      {/* SECTION 1: Enhance Your Music Experience Banner */}
      <section className="bg-black text-white rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 min-h-[500px]">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <span className="text-[#00FF66] font-semibold text-sm uppercase tracking-wider">
            Categories
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            Enhance Your <br /> Music Experience
          </h2>
          
          {/* Countdown Timer */}
          <div className="flex gap-4 py-2">
            {[
              { label: 'Days', value: '05' },
              { label: 'Hours', value: '23' },
              { label: 'Minutes', value: '59' },
              { label: 'Seconds', value: '35' }
            ].map((timer, idx) => (
              <div key={idx} className="bg-white text-black w-14 h-14 rounded-full flex flex-col items-center justify-center shadow-md">
                <span className="text-sm font-bold leading-none">{timer.value}</span>
                <span className="text-[10px] text-gray-500 mt-0.5">{timer.label}</span>
              </div>
            ))}
          </div>

          <button className="bg-[#00FF66] text-black font-semibold px-8 py-3 rounded-md hover:bg-[#00e65c] transition-colors duration-200">
            Buy Now!
          </button>
        </div>

        {/* Right Image Container (Yahan horizontal flip apply kiya hai) */}
        <div className="flex-1 flex justify-center items-center relative">
          {/* Background glow effect */}
          <div className="absolute w-72 h-72 bg-gray-700/30 rounded-full blur-3xl pointer-events-none"></div>
          
          {/* 
            CRITICAL FIX: 
            'scale-x-[-1]' image ko horizontally flip kar dega jisse sound/speaker right side dikhega.
          */}
          <img 
            src="path-to-your-speaker-image.png" 
            alt="Music Experience Speaker" 
            className="w-full max-w-[450px] object-contain relative z-10 transform scale-x-[-1]"
          />
        </div>
      </section>

      {/* SECTION 2: Explore Our Products */}
    

    </div>
  );
}