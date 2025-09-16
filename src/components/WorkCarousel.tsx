import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const projects = [
  { id: 1, title: "Real Estate Landing Page", description: "Futuristic property showcase", imgSrc: "https://iili.io/KBcPDml.png" },
  { id: 2, title: "E-commerce Dashboard", description: "AI-driven sales insights", imgSrc: "https://iili.io/KB0YR6b.webp" },
  { id: 3, title: "Hospitality Booking Website", description: "Smart customer engagement", imgSrc: "https://iili.io/KBl3DX9.jpg" },
  { id: 4, title: "Healthcare Portal", description: "AI-powered patient support", imgSrc: "https://iili.io/KBlySCG.webp" },
  { id: 5, title: "SaaS/Tech Platform", description: "Modern user analytics", imgSrc: "https://iili.io/KB0xgP2.webp" },
];

const WorkCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000, stopOnInteraction: true })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on('select', onSelect);
    onSelect();
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {projects.map((project) => (
            <div className="flex-shrink-0 flex-grow-0 basis-full min-w-0 px-4" key={project.id}>
              <motion.div
                className="relative bg-white/50 dark:bg-black/30 backdrop-blur-lg rounded-2xl p-4 border border-black/10 dark:border-white/10 overflow-hidden transition-all duration-300 group"
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0, 229, 255, 0.2)' }}
              >
                <div className={`absolute -inset-px rounded-2xl bg-gradient-to-r from-neon-cyan to-neon-purple opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-md`} />
                <div className="relative">
                  <div className="aspect-video w-full overflow-hidden rounded-lg">
                    <img src={project.imgSrc} alt={project.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <h4 className="font-bold text-white text-lg drop-shadow-md">{project.title}</h4>
                    <p className="text-sm text-gray-200 drop-shadow-md">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between items-center px-2 md:-px-4 pointer-events-none">
        <button onClick={scrollPrev} className="pointer-events-auto bg-black/5 dark:bg-white/10 backdrop-blur-sm border border-black/10 dark:border-white/20 rounded-full p-2 text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/20 transition-colors">
          <ArrowLeft size={24} />
        </button>
        <button onClick={scrollNext} className="pointer-events-auto bg-black/5 dark:bg-white/10 backdrop-blur-sm border border-black/10 dark:border-white/20 rounded-full p-2 text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/20 transition-colors">
          <ArrowRight size={24} />
        </button>
      </div>

      <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 flex gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === selectedIndex ? 'bg-neon-cyan scale-125' : 'bg-gray-400 dark:bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkCarousel;
