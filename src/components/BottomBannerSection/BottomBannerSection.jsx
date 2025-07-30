import mainIMG from '../../assets/bottom-banner-sideimg.webp';
import ModelsSection from './ModelsSection';

export default function BottomBannerSection() {

    return (
        <>
            {/* Main section */}
            <section className="w-full bg-[#F9F6F1] py-10 px-4 font-montserrat">
                <div className="max-w-full mx-auto bg-white rounded-2xl overflow-hidden flex flex-col md:flex-row">
                    {/* Left image */}
                    <div className="relative w-full md:w-1/2 h-[400px] md:h-auto">
                        <img src={mainIMG} alt="Main" className="w-full h-full object-cover" />
                    </div>

                    {/* Center vertical text */}
                    <div className="hidden md:flex items-center justify-center bg-[#FF4B00] px-2">
                        <div className="relative h-full w-[40px]">
                            <div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-xs tracking-widest animate-scrollText origin-center"
                                style={{
                                    transform: 'rotate(-90deg) translateY(100%)',
                                    transformOrigin: 'center',
                                }}
                            >
                                {/* <div className="flex flex-col gap-10">
                  <span>YOU ARE YOUR BEST PROJECT</span>
                  <span>YOU ARE YOUR BEST PROJECT</span>
                  <span>YOU ARE YOUR BEST PROJECT</span>
                </div> */}
                            </div>
                        </div>
                    </div>


                    {/* Right content */}
                    <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-end">
                        <h2 className="text-4xl md:text-7xl font-extrabold text-[#FF4B00] leading-tight">
                            MADE TO PLUMP,<br />MADE FOR EVERYONE
                        </h2>
                        <p className="text-xl text-gray-700 mt-4 leading-relaxed">
                            We're here to empower you to celebrate your natural beauty and have fun while
                            doing it. That’s why we’ve created derm-approved, clean and conscious plumpers
                            that you can actually feel good about obsessing over.
                        </p>
                        <button className="mt-6 w-fit px-6 py-2 text-[#FF4B00] border border-[#FF4B00] rounded-full font-semibold text-lg hover:bg-[#FF4B00] hover:text-white transition">
                            DISCOVER MORE
                        </button>
                    </div>
                </div>
            </section>

           <ModelsSection/>
        </>
    )
}
