import paintImg from '../assets/paint.webp';

export default function ResultsSection() {
    return (
        <>
            <section
                className="bg-no-repeat bg-center bg-contain py-0 mt-20 flex flex-col items-center text-center px-4 font-montserrat"
                style={{ backgroundImage: `url(${paintImg})` }}
            >
                <div className="h-64 sm:h-80 md:h-96 lg:h-[28rem]"></div>
            </section>

            <div className="flex flex-col items-center text-center px-4 -mt-8 md:-mt-12 lg:-mt-26 font-montserrat">
                {/* Heading */}
                <h2 className="text-5xl md:text-5xl font-extrabold text-brand-orange mb-4">
                    PRODUCTS PROVEN<br className="hidden md:block" /> TO PLUMP
                </h2>

                {/* Subtext */}
                <p className="text-gray-700 max-w-2xl mb-6 text-xl">
                    Clean, conscious and clinically proven, our plumpers deliver real results so you can plump up your beauty, naturally.
                </p>

                {/* Button */}
                <button className="border border-brand-orange text-brand-orange px-6 py-2 mb-10 rounded-full font-semibold hover:bg-brand-orange hover:text-white transition">
                    SEE THE RESULTS
                </button>
            </div>
        </>
    )
}
