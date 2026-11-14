import { motion } from 'motion/react';
import { BRAND } from '../data/sambharsa';
import { ResilientImage } from './ResilientImage';

const ease = [0.16, 1, 0.3, 1] as const;

export function BrandStory() {
  return (
    <section
      id="our-story"
      className="border-b border-[#D5C4A3]/60 bg-[#F3EBDD] py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-16">
          {/* Portrait Visual Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div className="relative overflow-hidden bg-[#D5C4A3]/30 aspect-[3/4] max-w-md mx-auto lg:max-w-none">
              <ResilientImage
                src={BRAND.storyImage}
                alt="Traditional South Indian brass davara and tumbler pouring frothy filter coffee beside fresh curry leaves"
                fallbackTitle="Traditional Brass Filter Coffee"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          </motion.div>

          {/* Editorial Narrative Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: 0.1, ease }}
            className="lg:col-span-7 order-1 lg:order-2 lg:pl-6"
          >
            <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-[#183D2D]">
              <span>Our Story</span>
              <span aria-hidden="true" className="text-[#B63B32]">
                ·
              </span>
              <span
                lang="hi"
                style={{ fontFamily: 'var(--font-devanagari)' }}
                className="text-[#292821]/70"
              >
                सांभर सा
              </span>
            </div>

            <h2
              className="mt-4 font-serif text-[#183D2D] leading-[1.12] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 3.3vw, 3.25rem)' }}
            >
              More Than A Meal. A Journey Through The South.
            </h2>

            <div className="mt-6 h-[1px] w-20 bg-[#E7B928]" aria-hidden="true" />

            <p className="mt-7 max-w-2xl text-base sm:text-[17px] leading-[1.75] text-[#292821]/90">
              South Indian cuisine is a celebration of simplicity, tradition,
              and unforgettable flavours. At SambharSa, we bring that spirit to
              the table through the warmth of hospitality and a love for the
              diverse culinary traditions of the South.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-[1.75] text-[#292821]/75">
              Every plate in our Gwalior kitchen begins with unhurried
              preparation—carefully fermented batters, crisp golden edges on the
              griddle, fragrant curry leaf tempering, and chutneys ground fresh
              to honour the comforting rhythm of an authentic South Indian
              table.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-[#D5C4A3]/70 pt-7 max-w-2xl">
              <div>
                <h3 className="font-serif text-xl text-[#183D2D]">
                  Daily Fresh Kitchen
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#292821]/75">
                  Prepared to order from fermented batters, slow-simmered
                  sambhar, and roasted whole spices.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-[#183D2D]">
                  Warm Hospitality
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#292821]/75">
                  A calm, welcoming dining room crafted for unhurried mornings,
                  family meals, and filter coffee conversations.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
