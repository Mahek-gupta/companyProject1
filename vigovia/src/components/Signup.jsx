import React from 'react';

export default function SignupPage() {
  return (
    <div className="w-full min-h-screen bg-white font-sans flex flex-col justify-between">
      
      {/* MAIN SIGNUP CONTENT SECTION */}
      <section className="w-full max-w-[1305px] mx-auto pt-16 flex flex-col md:flex-row items-end justify-between gap-8 px-4">
        
        {/* LEFT SIDE: Side Image Asset (Bottom-aligned with items-end) */}
        <div className="w-full md:w-[55%] flex items-end justify-start self-end overflow-hidden bg-[#E5F1F4] rounded-t-sm h-[500px] md:h-[600px]">
          <img 
            src="path-to-your-signup-image.png" 
            alt="Shopping cart and smartphone" 
            className="w-full h-full object-contain object-bottom select-none"
            onError={(e) => {
              // Fallback visual background pattern if image is missing locally
              e.target.style.display = 'none';
            }}
          />
        </div>

        {/* RIGHT SIDE: Create Account Form (Centered vertically but aligned nicely) */}
        <div className="w-full md:w-[35%] flex flex-col justify-center pb-12 md:pb-20">
          <div className="w-full max-w-[370px] mx-auto space-y-6">
            
            {/* Header Text */}
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-medium tracking-wide text-black">
                Create an account
              </h1>
              <p className="text-sm text-black font-normal">
                Enter your details below
              </p>
            </div>

            {/* Input Form Fields */}
            <form className="space-y-6 pt-2" onSubmit={(e) => e.preventDefault()}>
              {/* Name Input */}
              <div className="border-b border-gray-400 py-2">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full bg-transparent text-base outline-none text-black placeholder-gray-400"
                />
              </div>

              {/* Email or Phone Input */}
              <div className="border-b border-gray-400 py-2">
                <input 
                  type="text" 
                  placeholder="Email or Phone Number" 
                  className="w-full bg-transparent text-base outline-none text-black placeholder-gray-400"
                />
              </div>

              {/* Password Input */}
              <div className="border-b border-gray-400 py-2">
                <input 
                  type="password" 
                  placeholder="Password" 
                  className="w-full bg-transparent text-base outline-none text-black placeholder-gray-400"
                />
              </div>

              {/* Action Buttons */}
              <div className="space-y-4 pt-4">
                {/* Create Account Button */}
                <button className="w-full bg-[#DB4444] text-white font-medium py-4 rounded-sm hover:bg-[#c23b3b] transition duration-200 shadow-sm">
                  Create Account
                </button>

                {/* Google Sign-In Button */}
                <button className="w-full bg-white text-black border border-gray-300 font-normal py-4 rounded-sm flex items-center justify-center gap-3 hover:bg-gray-50 transition duration-200">
                  {/* Google SVG Icon */}
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#EA4335" d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.2-5.136 4.2A5.64 5.64 0 0 1 8.344 13a5.64 5.64 0 0 1 5.648-5.6c2.477 0 4.54 1.5 5.378 3.65l3.901-2.92C21.2 4.1 16.99 1.4 12.24 1.4 5.866 1.4.64 6.4.64 12.6s5.226 11.2 11.6 11.2c6.242 0 11.607-4.4 11.607-11.2 0-.75-.084-1.3-.23-1.915H12.24Z"/>
                  </svg>
                  Sign up with Google
                </button>
              </div>
            </form>

            {/* Login Link */}
            <div className="text-center pt-2 text-sm text-gray-600">
              Already have an account?{" "}
              <a href="#login" className="text-black font-medium border-b border-gray-500 hover:border-black ml-1 transition">
                Log in
              </a>
            </div>

          </div>
        </div>

      </section>

    </div>
  );
}