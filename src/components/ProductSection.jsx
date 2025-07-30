import React, { useRef } from 'react';
import PlumpFill from '../assets/plump-fill.webp';
import PlumpJuice from '../assets/plump-juice.webp';
import PlumpingPremier from '../assets/plumping-premier.webp';
import thumbnail from '../assets/thumbnail.jpg';

export default function ProductSection() {
      const scrollRef = useRef();
    
      const scroll = (direction) => {
        if (!scrollRef.current) return;
        const { scrollLeft, clientWidth } = scrollRef.current;
        scrollRef.current.scrollTo({
          left: direction === 'right' ? scrollLeft + clientWidth : scrollLeft - clientWidth,
          behavior: 'smooth',
        });
      };
  return (
     <section className="px-6 py-12 font-montserrat" id="products">
        <div className='flex justify-between items-center'>
          <h2 className="text-6xl font-bold text-brand-orange mb-8">BEST IN PLUMP</h2>
          <button
            onClick={() => scroll('right')}
            className="w-10 h-10 border border-brand-orange rounded-full text-brand-orange text-xl hover:bg-brand-orange hover:text-white transition hidden md:flex items-center justify-center"
          >
            →
          </button>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* SHOP ALL Box */}
          <div className="bg-brand-orange rounded-2xl p-6 flex flex-col justify-between min-h-[380px] text-white">
            <img src={thumbnail} alt="Shop All" className="rounded-xl mb-4 object-cover h-[450px] w-full" />
            <button className="border-2 border-white rounded-full px-6 py-2 font-bold mt-auto hover:bg-white hover:text-brand-orange transition-all">
              SHOP ALL
            </button>
          </div>

          {/* Product Card 1 */}
          <div className="bg-white p-6 flex flex-col justify-between min-h-[380px] transition-transform duration-300 transform hover:scale-105 rounded-xl">
            <img src={PlumpJuice} alt="Plump Juice" className="h-90 object-contain mb-4 border border-orange-200 rounded-2xl" />
            <h3 className="font-bold text-2xl">PLUMP JUICE</h3>
            <p className="text-gray-500 text-m">Plumping & hydrating lip oil</p>
            <p className="font-semibold mt-2">£18.00</p>
            <div className="flex space-x-1 mt-2">
              <div className="w-2.5 h-2.5 bg-pink-200 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-pink-400 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="bg-white p-6 flex flex-col justify-between min-h-[380px] transition-transform duration-300 transform hover:scale-105 rounded-xl">
            <img src={PlumpingPremier} alt="Primer" className="h-90 object-contain mb-4 border border-orange-200 rounded-2xl" />
            <h3 className="font-bold text-2xl">EXTREME MATTE PLUMPING PRIMER</h3>
            <p className="text-m text-gray-500">Extreme plumping lip primer</p>
            <p className="font-semibold mt-2">£16.00</p>
          </div>

          {/* Product Card 3 */}
          <div className="p-6 flex flex-col justify-between min-h-[380px] transition-transform duration-300 transform hover:scale-105 rounded-xl bg-white">
            <img src={PlumpFill} alt="Primer" className="h-90 object-contain mb-4 border border-orange-200 rounded-2xl p-6" />
            <h3 className="font-bold text-2xl">PLUMP & FILL</h3>
            <p className="text-m text-gray-500">plumping lip liner</p>
            <p className="font-semibold mt-2">£16.00</p>
            <div className="flex space-x-1 mt-2">
              <div className="w-2.5 h-2.5 bg-pink-200 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-pink-400 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
            </div>
          </div>

        </div>
      </section>
  )
}
