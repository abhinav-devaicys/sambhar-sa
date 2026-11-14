import { ArrowRight, ArrowUpRight, Star } from 'lucide-react';
import { motion } from 'motion/react';
import heroRestaurantPhoto from '@/sambhar-sa-nri-circle-jaipur-south-indian-restaurants-BT4V2Y5tNF.webp';
import { BRAND } from '../data/sambharsa';
import { EASE_EDITORIAL } from '../lib/motion';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[92svh] sm:min-h-[88svh] lg:min-h-[100svh] w-full overflow-hidden bg-[#141410] flex flex-col justify-end items-center"
    >
      {/* Full-bleed Restaurant Photograph with Hardware-Accelerated Entrance */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 1.035 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: EASE_EDITORIAL }}
        className="absolute inset-0 transform-gpu will-change-[transform,opacity]"
      >
        <img
          src={heroRestaurantPhoto}
          alt=""
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-[50%_38%] sm:object-[50%_68%] lg:object-[50%_78%] select-none"
        />
      </motion.div>

      {/* Cinematic Translucent Gradient Overlay */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.65, delay: 0.05, ease: EASE_EDITORIAL }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(20, 20, 16, 0.25) 0%, rgba(20, 20, 16, 0.40) 50%, rgba(20, 20, 16, 0.72) 100%)',
        }}
      />

      {/* Focused Soft Scrim Behind Centered Lower Editorial Block */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[66%] sm:h-[60%] bg-gradient-to-t from-[#141410]/92 via-[#141410]/56 to-transparent"
      />

      {/* Centered Editorial Hero Content — Positioned Below the Signboard Lettering */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-14 pt-64 sm:pt-[20rem] lg:pt-[25rem] pb-8 sm:pb-12 lg:pb-14 flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08, ease: EASE_EDITORIAL }}
          className="transform-gpu font-sans text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] sm:tracking-[0.22em] text-[#E7B928]"
        >
          AN AUTHENTIC SOUTH INDIAN EXPERIENCE
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16, ease: EASE_EDITORIAL }}
          className="transform-gpu mt-3 sm:mt-4 max-w-4xl font-serif font-normal text-[#F3EBDD] leading-[1.06] tracking-[-0.015em]"
          style={{
            fontSize: 'clamp(2.15rem, 5.2vw, 4.75rem)',
            textShadow: '0 2px 24px rgba(15, 15, 12, 0.45)',
          }}
        >
          Chasing Flavours
          <br className="hidden sm:inline" /> of the South.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24, ease: EASE_EDITORIAL }}
          className="transform-gpu mt-4 sm:mt-5 max-w-[550px] font-sans text-sm sm:text-base md:text-[17px] font-normal leading-[1.65] sm:leading-[1.7] text-[#F3EBDD]/88"
        >
          Discover the warmth, richness, and unforgettable flavours of South
          Indian cuisine at SambharSa, Gwalior.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.32, ease: EASE_EDITORIAL }}
          className="transform-gpu mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-sm sm:max-w-none sm:w-auto"
        >
          <a
            href="#menu"
            className="group inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center gap-2.5 rounded-[3px] bg-[#183D2D] px-6 sm:px-8 py-3.5 font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-[#F3EBDD] transform-gpu transition-[transform,filter,background-color] duration-200 ease-[cubic-bezier(0.2,0,0,1)] hover:brightness-110 hover:-translate-y-0.5 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E7B928]"
          >
            <span>EXPLORE MENU</span>
            <ArrowRight
              className="w-4 h-4 text-[#E7B928] transform-gpu transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>

          <a
            href="#visit-us"
            className="inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center rounded-[3px] border border-[#F3EBDD]/75 bg-transparent px-6 sm:px-8 py-3.5 font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-[#F3EBDD] transition-[background-color,border-color,color] duration-200 ease-[cubic-bezier(0.2,0,0,1)] hover:bg-[#F3EBDD]/15 hover:border-[#F3EBDD] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F3EBDD]"
          >
            FIND US
          </a>
        </motion.div>

        {/* Minimal Google Business Profile Review Indicator */}
        <motion.a
          href={BRAND.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Rated ${BRAND.googleRating} out of 5 across ${BRAND.googleReviewCount} Google Reviews for SambharSa Gwalior`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.4, ease: EASE_EDITORIAL }}
          className="group transform-gpu mt-5 sm:mt-6 inline-flex min-h-[40px] max-w-full flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 rounded-[3px] border border-[#F3EBDD]/18 bg-[#141410]/45 backdrop-blur-sm px-3 sm:px-4 py-2 text-[11px] sm:text-xs text-[#F3EBDD]/90 transition-[border-color,background-color] duration-200 ease-[cubic-bezier(0.2,0,0,1)] hover:border-[#E7B928]/55 hover:bg-[#141410]/65 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E7B928]"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5 shrink-0"
            aria-hidden="true"
          >
            <path
              fill="#4285F4"
              d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47a5.54 5.54 0 0 1-2.4 3.63v3h3.88c2.27-2.09 3.54-5.17 3.54-8.87Z"
            />
            <path
              fill="#34A853"
              d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3c-1.08.72-2.45 1.15-4.05 1.15-3.12 0-5.77-2.11-6.72-4.96H1.29v3.09A11.99 11.99 0 0 0 12 24Z"
            />
            <path
              fill="#FBBC05"
              d="M5.28 14.28A7.2 7.2 0 0 1 4.9 12c0-.79.14-1.56.38-2.28V6.63H1.29A11.99 11.99 0 0 0 0 12c0 1.94.46 3.77 1.29 5.37l3.99-3.09Z"
            />
            <path
              fill="#EA4335"
              d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0A11.99 11.99 0 0 0 1.29 6.63l3.99 3.09C6.23 6.86 8.88 4.75 12 4.75Z"
            />
          </svg>

          <span className="font-semibold tabular-nums text-[#F3EBDD]">
            {BRAND.googleRating.toFixed(1)}
          </span>

          <div
            className="flex items-center gap-0.5"
            aria-hidden="true"
          >
            {[0, 1, 2, 3].map((idx) => (
              <Star
                key={idx}
                className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-[#E7B928] text-[#E7B928]"
              />
            ))}
            <span className="relative inline-flex h-3 w-3 sm:h-3.5 sm:w-3.5">
              <Star className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#E7B928]/45" />
              <span className="absolute inset-0 overflow-hidden w-[70%]">
                <Star className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-[#E7B928] text-[#E7B928]" />
              </span>
            </span>
          </div>

          <span aria-hidden="true" className="text-[#F3EBDD]/35">
            ·
          </span>

          <span className="font-medium tabular-nums tracking-wide text-[#F3EBDD]/85 whitespace-nowrap">
            {BRAND.googleReviewCount} Google Reviews
          </span>

          <ArrowUpRight
            className="h-3.5 w-3.5 text-[#F3EBDD]/55 transform-gpu transition-[transform,color] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#E7B928]"
            aria-hidden="true"
          />
        </motion.a>
      </div>
    </section>
  );
}
