import { useEffect, useRef } from 'react';
import model1 from '../../assets/models/model1.webp';
import model2 from '../../assets/models/model2.webp';
import model3 from '../../assets/models/model3.webp';
import model4 from '../../assets/models/model4.webp';
import model5 from '../../assets/models/model5.webp';
import model6 from '../../assets/models/model6.webp';
import model7 from '../../assets/models/model7.webp';
import model8 from '../../assets/models/model8.webp';
import model9 from '../../assets/models/model9.webp';

export default function ModelsSection() {
    const scrollRef = useRef(null);

    const models = [
        { src: model1, alt: "Model 1" },
        { src: model2, alt: "Model 2" },
        { src: model3, alt: "Model 3" },
        { src: model4, alt: "Model 4" },
        { src: model5, alt: "Model 5" },
        { src: model6, alt: "Model 6" },
        { src: model7, alt: "Model 7" },
        { src: model8, alt: "Model 8" },
        { src: model9, alt: "Model 9" },
    ];

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        let scrollAmount = 0;

        const interval = setInterval(() => {
            if (!scrollContainer) return;

            scrollContainer.scrollLeft += 1;
            scrollAmount += 1;

            // Reset scroll when reaching end
            if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
                scrollContainer.scrollLeft = 0;
                scrollAmount = 0;
            }
        }, 20); // Lower = faster scroll

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="bg-[#F9F6F1] py-6 px-4 sm:px-8 font-montserrat">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-orange">@PROJECT_COSMETICS</h2>
                <button className="border border-brand-orange text-brand-orange px-4 py-2 rounded-full font-semibold hover:bg-brand-orange hover:text-white transition">
                    FOLLOW US
                </button>
            </div>

            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto scroll-smooth pb-2 hide-scrollbar"
            >
                {models.map((model, index) => (
                    <div
                        key={index}
                        className="relative flex-shrink-0 w-80 h-100 rounded-xl overflow-hidden group"
                    >
                        <img
                            src={model.src}
                            alt={model.alt}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        {/* Optional overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                ))}
            </div>
        </div>

    )
}
