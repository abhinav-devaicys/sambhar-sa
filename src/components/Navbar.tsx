import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { BRAND } from '../data/sambharsa';
import { EASE_EDITORIAL } from '../lib/motion';
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
    let rafId = 0;
    const updateScroll = () => {
      rafId = 0;
      const next = window.scrollY > 40;
      setScrolled((prev) => (prev === next ? prev : next));
    };

    const onScroll = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(updateScroll);
      }
    };

    updateScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  const isSolid = scrolled || mobileOpen;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 w-full transform-gpu will-change-[background-color] transition-[background-color,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isSolid
          ? 'bg-[#F3EBDD]/95 backdrop-blur-sm border-b border-[#D5C4A3]/70 shadow-[0_1px_0_rgba(24,61,45,0.06)]'
          : 'bg-gradient-to-b from-[#141410]/55 via-[#141410]/25 to-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 sm:h-[72px] max-w-[1440px] items-center justify-between gap-4 sm:gap-8 px-4 sm:px-8 lg:px-14">
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
              className={`group relative py-1 text-sm font-medium transition-colors duration-200 ease-[cubic-bezier(0.2,0,0,1)] whitespace-nowrap shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 ${
                isSolid
                  ? 'text-[#183D2D]/85 hover:text-[#183D2D] focus-visible:outline-[#183D2D]'
                  : 'text-[#F3EBDD]/95 hover:text-[#E7B928] focus-visible:outline-[#F3EBDD]'
              }`}
            >
              <span>{link.label}</span>
              <span
                aria-hidden="true"
                className={`absolute bottom-0 left-0 h-[1.5px] w-full origin-left scale-x-0 transform-gpu transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 ${
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
            className={`hidden md:inline-flex items-center justify-center rounded-[3px] px-5 py-2.5 text-sm font-medium transform-gpu transition-[transform,background-color,color,border-color] duration-200 ease-[cubic-bezier(0.2,0,0,1)] hover:-translate-y-0.5 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 ${
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
            className={`inline-flex md:hidden items-center justify-center min-h-[44px] min-w-[44px] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 ${
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
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: EASE_EDITORIAL }}
            className="md:hidden max-h-[calc(100svh-4rem)] overflow-y-auto overscroll-contain transform-gpu will-change-[transform,opacity] border-t border-[#D5C4A3]/60 bg-[#F3EBDD] px-5 py-5"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="flex min-h-[48px] items-center justify-between border-b border-[#D5C4A3]/40 py-3 font-serif text-xl text-[#292821] transition-colors duration-150 hover:text-[#183D2D]"
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-sans text-[#183D2D]/50">→</span>
                </a>
              ))}
              <div className="pt-4">
                <a
                  href={BRAND.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="flex min-h-[48px] w-full items-center justify-center rounded-[3px] bg-[#183D2D] px-6 py-3 text-sm font-semibold text-[#F3EBDD] hover:bg-[#122f22] transition-colors duration-200"
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
