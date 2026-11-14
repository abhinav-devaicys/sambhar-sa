import { useState } from 'react';
import { Check, Compass, Copy, ExternalLink, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { BRAND } from '../data/sambharsa';

const ease = [0.16, 1, 0.3, 1] as const;

export function VisitUs() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(BRAND.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="visit-us" className="bg-[#F3EBDD] py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Address & Directions Column */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div>
              <p className="text-xs sm:text-sm font-medium tracking-wide text-[#B63B32]">
                Visit SambharSa · Gwalior
              </p>
              <h2
                className="mt-3 font-serif text-[#183D2D] leading-[1.08] tracking-tight"
                style={{ fontSize: 'clamp(2.1rem, 3.6vw, 3.5rem)' }}
              >
                Your Table Is Waiting.
              </h2>
              <p className="mt-4 max-w-lg text-base sm:text-[17px] leading-[1.7] text-[#292821]/80">
                Come experience the flavours of the South at SambharSa, Gwalior.
              </p>

              {/* Verified Location Block */}
              <div className="mt-9 border-t border-[#D5C4A3] pt-7 space-y-6">
                <div className="flex items-start gap-3.5">
                  <MapPin
                    className="w-5 h-5 text-[#B63B32] mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-sans text-xs font-semibold tracking-wide text-[#292821]/65">
                      Outlet Address
                    </h3>
                    <address className="not-italic mt-1.5 font-serif text-xl sm:text-2xl leading-snug text-[#183D2D]">
                      {BRAND.address}
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Compass
                    className="w-5 h-5 text-[#183D2D] mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-sans text-xs font-semibold tracking-wide text-[#292821]/65">
                      Landmark Orientation
                    </h3>
                    <p className="mt-1 text-sm sm:text-base text-[#292821]/80">
                      Situated on DRDE Road off Jhansi Road, directly opposite
                      the Food Corporation of India (FCI) Godown in Gwalior.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Actions */}
            <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-3.5">
              <a
                href={BRAND.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2.5 bg-[#183D2D] px-7 py-3 text-sm font-semibold text-[#F3EBDD] transition-all duration-200 hover:bg-[#122f22] hover:-translate-y-0.5 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183D2D]"
              >
                <span>Get Directions on Google Maps</span>
                <ExternalLink
                  className="w-4 h-4 text-[#E7B928]"
                  aria-hidden="true"
                />
              </a>

              <button
                type="button"
                onClick={handleCopyAddress}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 border border-[#183D2D]/35 px-6 py-3 text-sm font-semibold text-[#183D2D] transition-colors duration-200 hover:border-[#183D2D] hover:bg-[#183D2D]/5 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183D2D]"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#183D2D]" aria-hidden="true" />
                    <span>Address Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" aria-hidden="true" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Architectural Wayfinding & Storefront Preview Card */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="lg:col-span-6 flex flex-col border border-[#D5C4A3] bg-[#D5C4A3]/20"
          >
            {/* Editorial Wayfinding Diagram */}
            <div className="p-6 sm:p-8 lg:p-10 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 border-b border-[#D5C4A3] pb-4">
                  <span className="font-serif text-xl text-[#183D2D]">
                    Gwalior Location Guide
                  </span>
                  <span className="text-xs font-medium text-[#292821]/70">
                    DRDE Road · Jhansi Road
                  </span>
                </div>

                {/* Clean Vector Wayfinding Schematic */}
                <div className="my-7 border border-[#D5C4A3] bg-[#F3EBDD] p-5 sm:p-6">
                  <svg
                    viewBox="0 0 480 210"
                    className="w-full h-auto"
                    role="img"
                    aria-label="Schematic location guide showing Jhansi Road, DRDE Road, FCI Godown, and SambharSa Gwalior"
                  >
                    {/* Grid lines */}
                    <line
                      x1="0"
                      y1="150"
                      x2="480"
                      y2="150"
                      stroke="#D5C4A3"
                      strokeWidth="12"
                    />
                    <line
                      x1="150"
                      y1="0"
                      x2="150"
                      y2="210"
                      stroke="#D5C4A3"
                      strokeWidth="10"
                    />

                    {/* Road Labels */}
                    <text
                      x="280"
                      y="154"
                      fill="#292821"
                      fontSize="11"
                      fontWeight="600"
                      letterSpacing="1"
                    >
                      JHANSI ROAD
                    </text>
                    <text
                      x="132"
                      y="70"
                      fill="#292821"
                      fontSize="10"
                      fontWeight="600"
                      letterSpacing="1"
                      transform="rotate(-90 132 70)"
                    >
                      DRDE ROAD
                    </text>

                    {/* Opposite Landmark: FCI Godown */}
                    <rect
                      x="185"
                      y="32"
                      width="140"
                      height="42"
                      fill="#D5C4A3"
                      fillOpacity="0.45"
                      stroke="#292821"
                      strokeOpacity="0.25"
                    />
                    <text
                      x="255"
                      y="50"
                      textAnchor="middle"
                      fill="#292821"
                      fontSize="10"
                      fontWeight="600"
                    >
                      Food Corporation of India
                    </text>
                    <text
                      x="255"
                      y="64"
                      textAnchor="middle"
                      fill="#292821"
                      fillOpacity="0.7"
                      fontSize="9"
                    >
                      (FCI Godown Landmark)
                    </text>

                    {/* SambharSa Pin */}
                    <rect
                      x="185"
                      y="92"
                      width="165"
                      height="40"
                      fill="#183D2D"
                    />
                    <circle cx="204" cy="112" r="6" fill="#E7B928" />
                    <circle cx="204" cy="112" r="2.5" fill="#B63B32" />
                    <text
                      x="219"
                      y="110"
                      fill="#F3EBDD"
                      fontSize="12"
                      fontWeight="700"
                    >
                      SambharSa Gwalior
                    </text>
                    <text
                      x="219"
                      y="123"
                      fill="#E7B928"
                      fontSize="9"
                    >
                      5, DRDE Road · Opp. FCI Godown
                    </text>
                  </svg>
                </div>
              </div>

              <div className="border-t border-[#D5C4A3] pt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm text-[#292821]/75">
                <span>Look for our glowing yellow &amp; forest-green SambharSa signboard.</span>
                <a
                  href={BRAND.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#183D2D] underline underline-offset-4 hover:text-[#B63B32] whitespace-nowrap shrink-0"
                >
                  Open Live Map →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
