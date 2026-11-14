import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, Phone, X } from 'lucide-react';
import {
  BRAND,
  DishItem,
  FULL_MENU,
  MENU_CATEGORIES,
  MenuCategory,
  SIGNATURE_DISHES,
} from '../data/sambharsa';
import { ResilientImage } from './ResilientImage';

const ease = [0.16, 1, 0.3, 1] as const;

export function SignatureMenu() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('All');
  const [selectedDish, setSelectedDish] = useState<DishItem | null>(null);

  const visibleGroups =
    activeCategory === 'All'
      ? FULL_MENU
      : FULL_MENU.filter((group) => group.category === activeCategory);

  return (
    <section
      id="menu"
      className="border-b border-[#D5C4A3]/60 bg-[#F3EBDD] py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-[#D5C4A3]/70"
        >
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-medium tracking-wide text-[#B63B32]">
              {BRAND.businessType}
            </p>
            <h2
              className="mt-3 font-serif text-[#183D2D] leading-[1.1] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 3.4vw, 3.25rem)' }}
            >
              Flavours Worth Coming Back For.
            </h2>
            <p className="mt-4 text-base sm:text-[17px] leading-[1.65] text-[#292821]/80">
              Discover authentic South Indian favourites alongside playful
              fusion dosas, comforting specials, kulfis, and traditional
              coolers.
            </p>
          </div>

          <p className="text-xs sm:text-sm font-medium text-[#183D2D] whitespace-nowrap shrink-0">
            Dine-in · Takeaway · Home Delivery
          </p>
        </motion.div>

        {/* Featured Signature Photography Row */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-10">
          {SIGNATURE_DISHES.map((dish, idx) => (
            <motion.article
              key={dish.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.06, ease }}
              className="group flex flex-col"
            >
              <button
                type="button"
                onClick={() => setSelectedDish(dish)}
                aria-label={`Inspect details for ${dish.name}`}
                className="text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#183D2D]"
              >
                <div className="relative overflow-hidden bg-[#D5C4A3]/30 aspect-[4/3]">
                  <ResilientImage
                    src={dish.image}
                    alt={dish.imageAlt}
                    fallbackTitle={dish.name}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                </div>

                <div className="mt-4 flex items-center justify-between gap-3 text-xs text-[#292821]/65">
                  <div className="flex items-center gap-2">
                    <span>{dish.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#183D2D] font-medium">
                      {dish.dietary}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[#183D2D] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <span>Notes</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                </div>

                <h3 className="mt-2 font-serif text-2xl text-[#183D2D] group-hover:text-[#B63B32] transition-colors duration-200">
                  {dish.name}
                </h3>

                <p className="mt-2 text-sm leading-[1.65] text-[#292821]/80">
                  {dish.description}
                </p>
              </button>
            </motion.article>
          ))}
        </div>

        {/* Complete 6-Category Menu Directory */}
        <div className="mt-16 sm:mt-20 pt-12 border-t border-[#D5C4A3]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#183D2D]">
                The Complete Menu
              </h3>
              <p className="mt-1.5 text-sm text-[#292821]/75">
                100% Vegetarian · Explore all six categories prepared fresh in
                our kitchen.
              </p>
            </div>

            {/* Interactive Category Filter Tabs */}
            <div
              role="tablist"
              aria-label="Full menu categories"
              className="flex flex-wrap items-center gap-2"
            >
              {MENU_CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(category)}
                    className={`min-h-[40px] px-4 py-2 text-xs sm:text-sm font-medium transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183D2D] ${
                      isActive
                        ? 'bg-[#183D2D] text-[#F3EBDD]'
                        : 'bg-[#D5C4A3]/30 text-[#292821]/80 hover:bg-[#D5C4A3]/60 hover:text-[#183D2D]'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {visibleGroups.map((group) => (
                <motion.div
                  key={group.category}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3, ease }}
                  className={`border border-[#D5C4A3] bg-[#F3EBDD] p-6 sm:p-7 ${
                    activeCategory !== 'All' ? 'md:col-span-2 lg:col-span-3' : ''
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-4 pb-4 border-b border-[#D5C4A3]/70">
                    <h4 className="font-serif text-2xl text-[#183D2D]">
                      {group.category}
                    </h4>
                    <span className="text-xs font-medium tabular-nums text-[#292821]/60">
                      {group.items.length} items
                    </span>
                  </div>
                  <p className="mt-3 text-xs text-[#292821]/70">
                    {group.subtitle}
                  </p>

                  <ul
                    className={`mt-5 divide-y divide-[#D5C4A3]/50 ${
                      activeCategory !== 'All'
                        ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 divide-y-0'
                        : ''
                    }`}
                  >
                    {group.items.map((item) => (
                      <li
                        key={item.name}
                        className={`py-3 ${
                          activeCategory !== 'All'
                            ? 'border-b border-[#D5C4A3]/50'
                            : ''
                        }`}
                      >
                        <div className="flex items-baseline justify-between gap-2">
                          <span className="font-medium text-sm sm:text-base text-[#183D2D]">
                            {item.name}
                          </span>
                          <span className="text-[11px] text-[#292821]/55 shrink-0">
                            Pure Veg
                          </span>
                        </div>
                        {item.note && (
                          <p className="mt-0.5 text-xs text-[#292821]/70">
                            {item.note}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Menu Footer Note & Order Call CTA */}
        <div className="mt-14 pt-8 border-t border-[#D5C4A3]/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-sm text-[#292821]/75">
            Available for dine-in, takeaway, and home delivery in Gwalior.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={BRAND.phoneHref}
              className="inline-flex min-h-[44px] items-center gap-2 bg-[#183D2D] px-5 py-2.5 text-sm font-medium text-[#F3EBDD] transition-colors duration-200 hover:bg-[#122f22] whitespace-nowrap shrink-0"
            >
              <Phone className="w-4 h-4 text-[#E7B928]" aria-hidden="true" />
              <span>Order · {BRAND.phone}</span>
            </a>
            <a
              href="#visit-us"
              className="inline-flex min-h-[44px] items-center gap-2 border border-[#183D2D] px-5 py-2.5 text-sm font-medium text-[#183D2D] transition-colors duration-200 hover:bg-[#183D2D] hover:text-[#F3EBDD] whitespace-nowrap shrink-0"
            >
              <span>Visit Us</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* Dish Detail Modal */}
      <AnimatePresence>
        {selectedDish && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="dish-modal-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedDish(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#292821]/65 p-4 sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.25, ease }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl overflow-hidden bg-[#F3EBDD] border border-[#D5C4A3] shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelectedDish(null)}
                aria-label="Close dish details"
                className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center bg-[#F3EBDD]/90 text-[#183D2D] hover:bg-[#183D2D] hover:text-[#F3EBDD] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[16/10] w-full overflow-hidden bg-[#D5C4A3]/30">
                <ResilientImage
                  src={selectedDish.image}
                  alt={selectedDish.imageAlt}
                  fallbackTitle={selectedDish.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 text-xs text-[#292821]/70">
                  <span>{selectedDish.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#183D2D] font-medium">
                    {selectedDish.dietary}
                  </span>
                </div>
                <h3
                  id="dish-modal-title"
                  className="mt-2 font-serif text-3xl text-[#183D2D]"
                >
                  {selectedDish.name}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#292821]/85">
                  {selectedDish.description}
                </p>
                <p className="mt-4 pt-4 border-t border-[#D5C4A3]/70 text-sm font-medium text-[#183D2D]">
                  {selectedDish.accompaniments}
                </p>
                <div className="mt-6 flex flex-wrap justify-end gap-3">
                  <a
                    href={BRAND.phoneHref}
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 border border-[#183D2D]/40 px-5 py-2.5 text-sm font-medium text-[#183D2D] hover:border-[#183D2D] transition-colors"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    <span>Call {BRAND.phone}</span>
                  </a>
                  <a
                    href="#visit-us"
                    onClick={() => setSelectedDish(null)}
                    className="inline-flex min-h-[44px] items-center justify-center bg-[#183D2D] px-6 py-2.5 text-sm font-medium text-[#F3EBDD] hover:bg-[#122f22] transition-colors"
                  >
                    Visit SambharSa Gwalior
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
