import leftImage from '../assets/trending-section1.png';
import rightImage from '../assets/plump-juice-coconut.webp';
import { FiArrowRight } from "react-icons/fi";

export default function TrendingSection() {
  return (
        <section className="w-full bg-[#F9F6F1] py-10 px-4 font-montserrat">
  <div className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
    {/* Left */}
    <div className="relative rounded-3xl overflow-hidden h-full min-h-[350px]">
      <img
        src={leftImage}
        alt="Lips"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-4 left-4 bg-brand-orange text-white text-xl font-bold px-3 py-1 rounded-full">
        TRENDING ON TIKTOK
      </div>
      <div className="absolute bottom-6 left-6">
        <h2 className="text-white text-3xl sm:text-4xl font-extrabold leading-tight">
          YOUR LIPS <br /> BUT JUICIER
        </h2>
      </div>
    </div>

    {/* Right */}
    <div className="bg-white rounded-3xl p-6 sm:p-10 flex flex-col justify-between relative min-h-[350px]">
      <div>
        <img
          src={rightImage}
          alt="Plump Juice"
          className="w-160 sm:w-172 object-contain mb-6 mx-auto scale-125"
        />
        <h3 className="text-2xl font-bold text-black text-center">PLUMP JUICE</h3>
        <p className="text-lg text-gray-500 text-center">Coconut • Clear</p>
        <p className="text-md font-medium mt-1 text-center">£18.00</p>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <button className="text-sm text-[#FF4B00] font-bold border border-[#FF4B00] px-4 py-2 rounded-full hover:bg-[#FF4B00] hover:text-white transition">
          ADD TO CART
        </button>
        <div className="w-10 h-10 rounded-full border border-[#FF4B00] flex items-center justify-center text-[#FF4B00] hover:bg-[#FF4B00] hover:text-white transition">
          <FiArrowRight size={18} />
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
