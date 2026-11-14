import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import heroRestaurantPhoto from '@/sambhar-sa-nri-circle-jaipur-south-indian-restaurants-BT4V2Y5tNF.webp';

const ease = [0.16, 1, 0.3, 1] as const;

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[85svh] lg:min-h-[100svh] w-full overflow-hidden bg-[#141410] flex flex-col justify-end items-center"
    >
      {/* Full-bleed Restaurant Photograph with Subtle Scale Entrance */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.05, ease }}
        className="absolute inset-0 bg-cover bg-no-repeat bg-[position:50%_40%] sm:bg-[position:50%_68%] lg:bg-[position:50%_78%]"
        style={{ backgroundImage: `url(${heroRestaurantPhoto})` }}
      />

      {/* Cinematic Translucent Gradient Overlay */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.08, ease }}
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(20, 20, 16, 0.25) 0%, rgba(20, 20, 16, 0.40) 50%, rgba(20, 20, 16, 0.72) 100%)',
        }}
      />

      {/* Focused Soft Scrim Behind Centered Lower Editorial Block */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-t from-[#141410]/88 via-[#141410]/50 to-transparent"
      />

      {/* Centered Editorial Hero Content — Positioned Below the Signboard Lettering */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-14 pt-80 sm:pt-[22rem] lg:pt-[26rem] pb-10 sm:pb-14 lg:pb-16 flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22, ease }}
          className="font-sans text-[11px] sm:text-xs font-medium uppercase tracking-[0.22em] text-[#E7B928]"
        >
          AN AUTHENTIC SOUTH INDIAN EXPERIENCE
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.34, ease }}
          className="mt-4 max-w-4xl font-serif font-normal text-[#F3EBDD] leading-[1.06] tracking-[-0.015em]"
          style={{
            fontSize: 'clamp(2.5rem, 5.2vw, 4.75rem)',
            textShadow: '0 2px 24px rgba(15, 15, 12, 0.45)',
          }}
        >
          Chasing Flavours
          <br className="hidden sm:inline" /> of the South.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.48, ease }}
          className="mt-5 max-w-[550px] font-sans text-sm sm:text-base md:text-[17px] font-normal leading-[1.7] text-[#F3EBDD]/88"
        >
          Discover the warmth, richness, and unforgettable flavours of South
          Indian cuisine at SambharSa, Gwalior.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.62, ease }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto"
        >
          <a
            href="#menu"
            className="group inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center gap-2.5 rounded-[3px] bg-[#183D2D] px-8 py-3.5 font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-[#F3EBDD] transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E7B928]"
          >
            <span>EXPLORE MENU</span>
            <ArrowRight
              className="w-4 h-4 text-[#E7B928] transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>

          <a
            href="#visit-us"
            className="inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center rounded-[3px] border border-[#F3EBDD]/75 bg-transparent px-8 py-3.5 font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-[#F3EBDD] transition-all duration-200 hover:bg-[#F3EBDD]/15 hover:border-[#F3EBDD] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F3EBDD]"
          >
            FIND US
          </a>
        </motion.div>
      </div>
    </section>
  );
}
