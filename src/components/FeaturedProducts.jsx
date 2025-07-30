import Product1 from '../assets/featured-products/product1.webp';
import Product2 from '../assets/featured-products/product2.webp';
import Product3 from '../assets/featured-products/product3.webp';
import Product4 from '../assets/featured-products/product4.webp';
import fabulous from '../assets/featured-products/logos/logo6.avif'
import closer from '../assets/featured-products/logos/logo3.avif'
import refinery29 from '../assets/featured-products/logos/logo1.webp'
import mailonline from '../assets/featured-products/logos/logo4.avif'
import thismorning from '../assets/featured-products/logos/logo2.avif'
import cosmopolitan from '../assets/featured-products/logos/logo5.avif';
import { FaArrowRight } from 'react-icons/fa';

export default function FeaturedProducts() {
    const logos = [
        { src: fabulous, alt: "Fabulous" },
        { src: closer, alt: "Closer" },
        { src: refinery29, alt: "Refinery29" },
        { src: mailonline, alt: "Mail Online" },
        { src: thismorning, alt: "This Morning" },
        { src: cosmopolitan, alt: "Cosmopolitan" },
    ];

    const kits = [
        {
            title: "THE FULL WORKS",
            desc: "Buff, prep & plump kit",
            discount: "22% OFF",
            price: "£42.00",
            original: "£54.00",
            image: Product3,
        },
        {
            title: "FILTER FREE",
            desc: "Smooth, plump & prep kit",
            discount: "16% OFF",
            price: "£35.00",
            original: "£42.00",
            image: Product2,
        },
        {
            title: "PLUMP & FILL LINER BUNDLES",
            desc: "Plumping lip liner kit",
            discount: "27% OFF",
            price: "£35.00",
            original: "£48.00",
            image: Product4,
        },
        {
            title: "PREP & PLUMP",
            desc: "Prime, hydrate & plump kit",
            discount: "20% OFF",
            price: "£24.00",
            original: "£30.00",
            image: Product1,
        },
    ];
    return (
        <div className="bg-[#FFFCF7] px-4 py-12 text-[#000000] font-montserrat">
            <section className="py-10 bg-white mb-12 overflow-hidden">
                <h2 className="text-center text-2xl font-extrabold text-gray-800 mb-6 tracking-wide">
                    FEATURED IN
                </h2>
                <div className="overflow-x-auto overflow-hidden whitespace-nowrap px-4 animate-scroll-left hover:[animation-play-state:paused]">
                    <div className="flex items-center gap-16 md:gap-24 flex-nowrap">
                        {logos.map((logo, index) => (
                            <img
                                key={index}
                                src={logo.src}
                                alt={logo.alt}
                                className="h-8 sm:h-10 md:h-12 object-contain inline-block"
                            />
                        ))}
                    </div>
                </div>
            </section>

            <div className="max-w-[90%] mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-10">
                    <h2 className="text-4xl md:text-5xl text-[#FF4D00] font-extrabold">PLUMPING KITS</h2>
                    <button className="flex items-center border border-[#FF4D00] text-[#FF4D00] font-medium px-4 py-2 rounded-full hover:bg-[#FF4D00] hover:text-white transition">
                        SHOP ALL KITS <FaArrowRight className="ml-2 text-sm" />
                    </button>
                </div>

                {/* Card Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {kits.map((kit, idx) => (
                        <div>
                            <div
                                key={idx}
                                className="relative rounded-xl border border-[#FF4D00]/30 p-4 text-center bg-white min-h-[420px] flex flex-col justify-between transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >

                                <div className="absolute top-2 left-2 bg-[#FF4D00] text-white text-xs font-semibold px-2 py-1 rounded-md">
                                    {kit.discount}
                                </div>

                                {/* Image */}
                                <img
                                    src={kit.image}
                                    alt={kit.title}
                                    className="w-48 sm:w-42 md:w-56 mx-auto object-contain mt-6 mb-4"
                                />

                            </div>
                            {/* Content */}
                            <div className="flex flex-col gap-2 flex-grow justify-end items-start mt-7">
                                <h3 className="font-bold text-xl md:text-md uppercase">{kit.title}</h3>
                                <p className="text-gray-500 text-sm">{kit.desc}</p>
                                <div className="text-sm md:text-base">
                                    <span className="text-[#FF4D00] font-bold mr-2">{kit.price}</span>
                                    <span className="line-through text-gray-500">{kit.original}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
