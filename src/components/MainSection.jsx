import React from 'react';
import mainIMG from '../assets/main.webp';
import Logo from '../assets/logo.png';

export default function MainSection() {
  return (
    <section
      className="
    min-h-screen font-montserrat flex items-center justify-center bg-[#fefcf9]
    border border-brand-orange rounded-3xl p-4 sm:p-6 md:p-8 m-4 relative overflow-hidden
    bg-cover bg-center bg-no-repeat
  "
      style={{ backgroundImage: `url(${mainIMG})` }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-75 block sm:hidden z-0"></div>

      {/* Top Banner */}
      <div className="absolute top-4 inset-x-4 bg-brand-orange text-white text-sm md:text-lg font-bold px-4 py-1 rounded-full text-center mx-2 z-10">
        FREE UK SHIPPING ON ORDERS OVER £40
      </div>

      {/* Top Nav */}
      <div className="absolute top-16 left-0 right-0 px-2 sm:px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between z-10 gap-3 sm:gap-4">
        {/* Nav Buttons */}
        {/* Nav Buttons */}
        <div className="flex flex-row gap-2 sm:gap-4 border border-brand-orange text-xs sm:text-sm md:text-base font-semibold rounded-full px-2 py-1">
          <button
            onClick={() => {
              const productSection = document.getElementById('products');
              if (productSection) {
                productSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-3 sm:px-4 py-1 rounded-full hover:bg-brand-orange hover:text-white transition duration-300"
          >
            SHOP
          </button>
          <button className="px-3 sm:px-4 py-1 rounded-full hover:bg-brand-orange hover:text-white transition duration-300">
            ABOUT
          </button>
          <button className="px-3 sm:px-4 py-1 rounded-full hover:bg-brand-orange hover:text-white transition duration-300">
            LEARN
          </button>
        </div>


        {/* Logo */}
        <div className="flex justify-center w-full sm:w-auto my-2 sm:my-0">
          <img src={Logo} alt="Logo" className="w-[180px] sm:w-[220px] md:w-[250px]" />
        </div>

        {/* Right Buttons */}
        <div className="flex items-center space-x-2 sm:space-x-3 mt-2 sm:mt-0">
          <button className="border border-brand-orange px-3 sm:px-4 py-1 rounded-full font-bold hover:bg-brand-orange hover:text-white transition duration-300">
            SEARCH
          </button>
          <button className="border border-brand-orange px-3 sm:px-4 py-1 rounded-full font-bold hover:bg-brand-orange hover:text-white transition duration-300 flex items-center space-x-2 relative">
            <span>CART</span>
            <span className="ml-1 border border-brand-orange px-2 py-0.5 rounded-full text-xs sm:text-base bg-white text-brand-orange hover:bg-brand-orange hover:text-white transition duration-300">
              0
            </span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-8 left-4 sm:left-8 right-4 max-w-xl space-y-4 px-2 sm:px-4 z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-orange leading-tight">
          BIG LIPS,<br />BIGGER ENERGY
        </h2>
        <p className="text-base sm:text-lg text-gray-700">
          Our famous lip liner lines, fills and plumps so you can cheat your way to an instant lip lift.
        </p>
        <button className="bg-white border-2 border-brand-orange text-brand-orange font-bold px-4 sm:px-6 py-2 rounded-full text-base sm:text-lg transition duration-300 hover:bg-brand-orange hover:text-white">
          SHOP PLUMP & FILL
        </button>
      </div>
    </section>
  );
}
