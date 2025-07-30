import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

import Lip1 from '../assets/lip1.webp';
import Lip2 from '../assets/lip2.webp';
import Face from '../assets/face.webp';

export default function CategorySection() {
  // Controls for animation
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);


  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const featureBarVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.5 },
    },
  };

  return (
    <section className="bg-[#fefcf9] py-12 font-montserrat">
      {/* Product Categories */}
      <motion.div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {[
          { src: Lip1, alt: 'Lip', title: 'LIP' },
          { src: Face, alt: 'Face', title: 'FACE' },
          { src: Lip2, alt: 'Kits', title: 'KITS' },
        ].map(({ src, alt, title }, i) => (
          <motion.div
            key={i}
            className="rounded-2xl overflow-hidden relative group cursor-pointer"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 text-white uppercase font-bold text-3xl tracking-wider">
              SHOP
            </div>
            <div className="absolute top-14 left-4 text-white uppercase font-extrabold text-6xl">
              {title}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Feature Bar */}
      <motion.div
        variants={featureBarVariants}
        initial="hidden"
        animate={controls}
        className="overflow-hidden bg-white mt-10 px-4 py-8"
      >
        <div className="flex gap-32 text-[13px] font-extrabold uppercase text-brand-orange text-center whitespace-nowrap animate-scroll-left hover:[animation-play-state:paused]">
          <span className="before:content-['•'] before:mr-2 text-2xl">Clinically proven to plump</span>
          <span className="before:content-['•'] before:mr-2 text-2xl">100% natural</span>
          <span className="before:content-['•'] before:mr-2 text-2xl">Vegan</span>
          <span className="before:content-['•'] before:mr-2 text-2xl">Cruelty-Free</span>
          <span className="before:content-['•'] before:mr-2 text-2xl">Certified</span>
          <span className="before:content-['•'] before:mr-2 text-2xl">Long Lasting</span>
          <span className="before:content-['•'] before:mr-2 text-2xl">Dermatologically tested</span>
          <span className="before:content-['•'] before:mr-2 text-2xl">FRAGRANCE-FREE</span>
        </div>
      </motion.div>
    </section>
  );
}
