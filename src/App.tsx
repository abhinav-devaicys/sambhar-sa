/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MotionConfig } from 'motion/react';
import { EASE_EDITORIAL } from './lib/motion';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BrandStory } from './components/BrandStory';
import { SignatureMenu } from './components/SignatureMenu';
import { DiningExperience } from './components/DiningExperience';
import { CultureSection } from './components/CultureSection';
import { Testimonials } from './components/Testimonials';
import { VisitUs } from './components/VisitUs';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ duration: 0.5, ease: EASE_EDITORIAL }}
    >
      <div className="min-h-screen bg-[#F3EBDD] text-[#292821] flex flex-col">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <BrandStory />
          <SignatureMenu />
          <DiningExperience />
          <CultureSection />
          <Testimonials />
          <VisitUs />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
