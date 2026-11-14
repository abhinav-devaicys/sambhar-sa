import { motion } from 'motion/react';
import { EXPERIENCE_GALLERY } from '../data/sambharsa';
import { EASE_EDITORIAL, VIEWPORT_REVEAL } from '../lib/motion';
import { ResilientImage } from './ResilientImage';

export function DiningExperience() {
  const mainPhoto = EXPERIENCE_GALLERY[0];
  const sidePhoto = EXPERIENCE_GALLERY[1];

  return (
    <section
      id="experience"
      className="border-b border-[#D5C4A3]/60 bg-[#F3EBDD] py-14 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_REVEAL}
          transition={{ duration: 0.5, ease: EASE_EDITORIAL }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-12 items-end pb-8 sm:pb-14 transform-gpu"
        >
          <div className="lg:col-span-7">
            <p className="text-xs sm:text-sm font-medium tracking-wide text-[#B63B32]">
              The Dining Experience
            </p>
            <h2
              className="mt-3 font-serif text-[#183D2D] leading-[1.1] tracking-tight"
              style={{ fontSize: 'clamp(1.85rem, 3.4vw, 3.3rem)' }}
            >
              Come For The Flavours. Stay For The Experience.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base leading-[1.7] text-[#292821]/80">
              Beneath warm woven pendant lights and vibrant yellow-and-green
              hospitality, SambharSa is built around unhurried meals, crisp
              table-side service, and comforting flavours shared across every
              generation.
            </p>
          </div>
        </motion.div>

        {/* Asymmetrical Editorial Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Primary Wide Dining Room Photo */}
          <motion.figure
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_REVEAL}
            transition={{ duration: 0.52, ease: EASE_EDITORIAL }}
            className="lg:col-span-7 flex flex-col transform-gpu"
          >
            <div className="group relative overflow-hidden bg-[#D5C4A3]/30 aspect-[16/10] lg:flex-1">
              <ResilientImage
                src={mainPhoto.image}
                alt={mainPhoto.imageAlt}
                fallbackTitle={mainPhoto.title}
                className="h-full w-full object-cover transform-gpu will-change-transform transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
              />
            </div>
            <figcaption className="mt-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-t border-[#D5C4A3]/60 pt-3">
              <span className="font-serif text-xl text-[#183D2D]">
                {mainPhoto.title}
              </span>
              <span className="text-sm text-[#292821]/70">
                {mainPhoto.caption}
              </span>
            </figcaption>
          </motion.figure>

          {/* Authentic Storefront Photo */}
          <motion.figure
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_REVEAL}
            transition={{ duration: 0.52, delay: 0.08, ease: EASE_EDITORIAL }}
            className="lg:col-span-5 flex flex-col transform-gpu"
          >
            <div className="group relative overflow-hidden bg-[#D5C4A3]/30 aspect-[4/3] lg:flex-1">
              <ResilientImage
                src={sidePhoto.image}
                alt={sidePhoto.imageAlt}
                fallbackTitle={sidePhoto.title}
                className="h-full w-full object-cover transform-gpu will-change-transform transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
              />
            </div>
            <figcaption className="mt-4 flex flex-col gap-1 border-t border-[#D5C4A3]/60 pt-3">
              <span className="font-serif text-xl text-[#183D2D]">
                {sidePhoto.title}
              </span>
              <span className="text-sm text-[#292821]/70">
                {sidePhoto.caption}
              </span>
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
