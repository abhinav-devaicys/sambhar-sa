import { motion } from 'motion/react';
import { BRAND, CULINARY_DETAILS } from '../data/sambharsa';
import { ResilientImage } from './ResilientImage';

const ease = [0.16, 1, 0.3, 1] as const;

export function CultureSection() {
  return (
    <section className="bg-[#183D2D] text-[#F3EBDD] py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Editorial Intro & Craft Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-[#E7B928]">
              <span>Culinary Craft</span>
              <span aria-hidden="true" className="text-[#D5C4A3]/50">
                ·
              </span>
              <span
                lang="hi"
                style={{ fontFamily: 'var(--font-devanagari)' }}
                className="text-[#D5C4A3]"
              >
                स्वाद और परंपरा
              </span>
            </div>

            <h2
              className="mt-4 font-serif text-[#F3EBDD] leading-[1.1] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 3.3vw, 3.25rem)' }}
            >
              The Soul Is In The Details.
            </h2>

            <p className="mt-5 text-base leading-[1.7] text-[#F3EBDD]/80">
              Great South Indian food lives in quiet, everyday discipline: the
              pop of black mustard seeds in hot oil, fresh curry leaves torn by
              hand, stone-ground coconut, and brass vessels that carry warmth to
              the table.
            </p>

            {/* Restrained Numbered Craft Pillars */}
            <div className="mt-10 border-t border-[#D5C4A3]/25">
              {CULINARY_DETAILS.map((detail) => (
                <div
                  key={detail.index}
                  className="py-5 border-b border-[#D5C4A3]/25 grid grid-cols-12 gap-4 items-baseline"
                >
                  <span className="col-span-2 font-mono text-xs tabular-nums text-[#E7B928]">
                    {detail.index}
                  </span>
                  <div className="col-span-10">
                    <h3 className="font-serif text-xl text-[#F3EBDD]">
                      {detail.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#F3EBDD]/75">
                      {detail.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Close-Up Spice & Mortar Photography */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.1, ease }}
            className="lg:col-span-7"
          >
            <div className="overflow-hidden bg-[#122f22] aspect-[16/10] sm:aspect-[16/9]">
              <ResilientImage
                src={BRAND.cultureImage}
                alt="Close-up of fresh green curry leaves, black mustard seeds in a brass spoon, grated coconut, red chillies, and stone-ground chutney"
                fallbackTitle="Fresh Spices & Stone-Ground Chutney"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>

            <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm text-[#D5C4A3]">
              <span>
                Fresh curry leaves · Black mustard seeds · Grated coconut ·
                Stone-ground chutneys
              </span>
              <span className="text-[#E7B928] font-medium">
                Prepared Daily
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
