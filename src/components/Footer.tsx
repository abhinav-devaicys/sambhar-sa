import { ArrowUpRight, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { BRAND } from '../data/sambharsa';
import { BrandMark } from './BrandMark';

const FOOTER_LINKS = [
  { label: 'Home', href: '#home', external: false },
  { label: 'Our Story', href: '#our-story', external: false },
  { label: 'Signature Menu', href: '#menu', external: false },
  { label: 'Dining Experience', href: '#experience', external: false },
  { label: 'Reviews', href: '#reviews', external: false },
  { label: 'Find Us', href: BRAND.googleMapsUrl, external: true },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#183D2D] text-[#F3EBDD]">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14 pt-14 pb-10 sm:pt-18 sm:pb-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#D5C4A3]/20">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <a href="#home" aria-label="SambharSa Gwalior Top">
              <BrandMark variant="light" showTagline />
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#D5C4A3]">
              A contemporary South Indian dining experience in Gwalior
              celebrating crispy dosas, slow-simmered sambhar, freshly ground
              chutneys, and warm hospitality.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3">
            <h2 className="font-sans text-xs font-semibold tracking-wide text-[#E7B928]">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_LINKS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    {...(item.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="text-sm text-[#F3EBDD]/85 hover:text-[#E7B928] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Maps Column */}
          <div className="md:col-span-4">
            <h2 className="font-sans text-xs font-semibold tracking-wide text-[#E7B928]">
              Gwalior Outlet
            </h2>
            <div className="mt-4 flex items-start gap-2.5 text-sm leading-relaxed text-[#F3EBDD]/85">
              <MapPin
                className="w-4 h-4 text-[#E7B928] mt-1 shrink-0"
                aria-hidden="true"
              />
              <address className="not-italic">{BRAND.address}</address>
            </div>

            <div className="mt-5 flex flex-wrap gap-4">
              <a
                href={BRAND.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#E7B928] hover:underline underline-offset-4"
              >
                <span>Google Maps Directions</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
              <a
                href={BRAND.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#D5C4A3] hover:text-[#F3EBDD] hover:underline underline-offset-4"
              >
                <span>Google Reviews</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-7 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#D5C4A3]/80">
          <p>&copy; {year} SambharSa Gwalior. All rights reserved.</p>
          <p>{BRAND.tagline}</p>
        </div>
      </motion.div>
    </footer>
  );
}
