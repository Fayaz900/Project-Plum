import Lip1 from '../assets/lip1.webp';
import Lip2 from '../assets/lip2.webp';
import Face from '../assets/face.webp'

export default function CategorySection() {
    return (
        <section className="bg-[#fefcf9] py-12 font-montserrat">
            {/* Product Categories */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 mx-auto">
                <div className="rounded-2xl overflow-hidden relative group">
                    <img
                        src={Lip1}
                        alt="Lip"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 text-white uppercase font-bold text-3xl tracking-wider">SHOP</div>
                    <div className="absolute top-14 left-4 text-white uppercase font-extrabold text-6xl">LIP</div>
                </div>

                <div className="rounded-2xl overflow-hidden relative group">
                    <img
                        src={Face}
                        alt="Face"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 text-white uppercase font-bold text-3xl tracking-wider">SHOP</div>
                    <div className="absolute top-14 left-4 text-white uppercase font-extrabold text-6xl">FACE</div>
                </div>

                <div className="rounded-2xl overflow-hidden relative group">
                    <img
                        src={Lip2}
                        alt="Kits"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 text-white uppercase font-bold text-3xl tracking-wider">SHOP</div>
                    <div className="absolute top-14 left-4 text-white uppercase font-extrabold text-6xl">KITS</div>
                </div>
            </div>


            {/* Feature Bar */}
            <div className="overflow-hidden bg-white mt-10 px-4 py-8">
                <div
                    className="flex gap-32 text-[13px] font-extrabold uppercase text-brand-orange text-center whitespace-nowrap animate-scroll-left hover:[animation-play-state:paused]"
                >
                    <span className="before:content-['•'] before:mr-2 text-2xl">
                        Clinically proven to plump
                    </span>
                    <span className="before:content-['•'] before:mr-2 text-2xl">100% natural</span>
                    <span className="before:content-['•'] before:mr-2 text-2xl">Vegan</span>
                    <span className="before:content-['•'] before:mr-2 text-2xl">Cruelty-Free</span>
                    <span className="before:content-['•'] before:mr-2 text-2xl">Certified</span>
                    <span className="before:content-['•'] before:mr-2 text-2xl">Long Lasting</span>
                    <span className="before:content-['•'] before:mr-2 text-2xl">Dermatologically tested</span>
                    <span className="before:content-['•'] before:mr-2 text-2xl">FRAGRANCE-FREE</span>

                </div>
            </div>

        </section>
    )
}
