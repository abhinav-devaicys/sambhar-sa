import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { BRAND } from '../data/sambharsa';
import { BrandMark } from './BrandMark';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Our Story', href: '#our-story' },
  { label: 'Menu', href: '#menu' },
  { label: 'Experience', href: '#experience' },
  { label: 'Reviews', href: '#reviews' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  const isSolid = scrolled || mobileOpen;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 w-full transition-all duration-300 ${
        isSolid
          ? 'bg-[#F3EBDD]/95 backdrop-blur-sm border-b border-[#D5C4A3]/70 shadow-[0_1px_0_rgba(24,61,45,0.06)]'
          : 'bg-gradient-to-b from-[#141410]/55 via-[#141410]/25 to-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 sm:h-[72px] max-w-[1440px] items-center justify-between gap-8 px-5 sm:px-8 lg:px-14">
        {/* Zone 1: Brand Logo */}
        <a
          href="#home"
          onClick={handleLinkClick}
          className={`rounded-sm shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 ${
            isSolid
              ? 'focus-visible:outline-[#183D2D]'
              : 'focus-visible:outline-[#F3EBDD]'
          }`}
          aria-label="SambharSa Gwalior Home"
        >
          <BrandMark variant={isSolid ? 'dark' : 'light'} />
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 lg:gap-9"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`group relative py-1 text-sm font-medium transition-colors duration-200 whitespace-nowrap shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 ${
                isSolid
                  ? 'text-[#183D2D]/85 hover:text-[#183D2D] focus-visible:outline-[#183D2D]'
                  : 'text-[#F3EBDD]/95 hover:text-[#E7B928] focus-visible:outline-[#F3EBDD]'
              }`}
            >
              <span>{link.label}</span>
              <span
                aria-hidden="true"
                className={`absolute bottom-0 left-0 h-[1.5px] w-full origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100 ${
                  isSolid ? 'bg-[#B63B32]' : 'bg-[#E7B928]'
                }`}
              />
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action + Mobile Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={BRAND.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:inline-flex items-center justify-center rounded-[3px] px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 ${
              isSolid
                ? 'bg-[#183D2D] text-[#F3EBDD] hover:bg-[#122f22] focus-visible:outline-[#183D2D]'
                : 'border border-[#F3EBDD]/75 bg-[#141410]/25 text-[#F3EBDD] backdrop-blur-[2px] hover:bg-[#F3EBDD] hover:text-[#183D2D] focus-visible:outline-[#F3EBDD]'
            }`}
          >
            Find Us
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className={`inline-flex md:hidden items-center justify-center min-h-[44px] min-w-[44px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${
              isSolid
                ? 'text-[#183D2D] hover:bg-[#D5C4A3]/30 focus-visible:outline-[#183D2D]'
                : 'text-[#F3EBDD] hover:bg-[#F3EBDD]/15 focus-visible:outline-[#F3EBDD]'
            }`}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile Navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-t border-[#D5C4A3]/60 bg-[#F3EBDD] px-5 py-6"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="flex min-h-[44px] items-center justify-between border-b border-[#D5C4A3]/40 py-3 font-serif text-xl text-[#292821] hover:text-[#183D2D]"
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-sans text-[#183D2D]/50">→</span>
                </a>
              ))}
              <div className="pt-5">
                <a
                  href={BRAND.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="flex min-h-[48px] w-full items-center justify-center rounded-[3px] bg-[#183D2D] px-6 py-3 text-sm font-semibold text-[#F3EBDD] hover:bg-[#122f22] transition-colors"
                >
                  Find Us in Gwalior
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
