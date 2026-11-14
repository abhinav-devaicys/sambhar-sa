import { FormEvent, useState } from 'react';
import { ArrowUpRight, CheckCircle2, MessageSquareQuote } from 'lucide-react';
import { motion } from 'motion/react';
import { BRAND, SIGNATURE_DISHES } from '../data/sambharsa';

const ease = [0.16, 1, 0.3, 1] as const;

export function Testimonials() {
  const [guestName, setGuestName] = useState('');
  const [favouriteDish, setFavouriteDish] = useState(SIGNATURE_DISHES[0].name);
  const [note, setNote] = useState('');
  const [submittedNote, setSubmittedNote] = useState<{
    name: string;
    dish: string;
    note: string;
  } | null>(null);
  const [formError, setFormError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmedName = guestName.trim();
    const trimmedNote = note.trim();

    if (!trimmedName || !trimmedNote) {
      setFormError('Please enter your name and a brief dining note.');
      return;
    }

    setFormError('');
    setSubmittedNote({
      name: trimmedName,
      dish: favouriteDish,
      note: trimmedNote,
    });
    setGuestName('');
    setNote('');
  };

  return (
    <section
      id="reviews"
      className="border-b border-[#D5C4A3]/60 bg-[#F3EBDD] py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Verified Google Reviews Lead Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease }}
            className="lg:col-span-6"
          >
            <p className="text-xs sm:text-sm font-medium tracking-wide text-[#B63B32]">
              Guest Voices
            </p>
            <h2
              className="mt-3 font-serif text-[#183D2D] leading-[1.1] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 3.3vw, 3.25rem)' }}
            >
              Good Food. Beautiful Memories.
            </h2>

            <p className="mt-5 max-w-xl text-base sm:text-[17px] leading-[1.7] text-[#292821]/80">
              We believe authentic hospitality speaks loudest through real
              diners. Read verified reviews shared by guests who have dined at
              SambharSa directly on Google Business.
            </p>

            {/* Unfabricated Editorial Review Highlights */}
            <div className="mt-8 border-t border-[#D5C4A3]/70 pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-serif text-lg text-[#183D2D]">
                  Verified Google Profile
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#292821]/75">
                  Browse genuine guest photos, ratings, and dining stories on
                  our Google Business listing.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-[#183D2D]">
                  Freshly Made to Order
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#292821]/75">
                  From crisp ghee roast dosas to steaming idlis, every dish is
                  plated hot at your table.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={BRAND.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[48px] items-center justify-center gap-2.5 bg-[#183D2D] px-6 py-3 text-sm font-semibold text-[#F3EBDD] transition-all duration-200 hover:bg-[#122f22] hover:-translate-y-0.5 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183D2D]"
              >
                <span>Read Google Business Reviews</span>
                <ArrowUpRight
                  className="w-4 h-4 text-[#E7B928] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </motion.div>

          {/* Interactive Guestbook / Feedback Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="lg:col-span-6 border border-[#D5C4A3] bg-[#F3EBDD] p-6 sm:p-8 lg:p-10"
          >
            <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#D5C4A3]/70">
              <div>
                <h3 className="font-serif text-2xl text-[#183D2D]">
                  Share Your Table Note
                </h3>
                <p className="mt-1 text-sm text-[#292821]/70">
                  Recently dined at SambharSa Gwalior? Leave a note about your
                  favourite dish.
                </p>
              </div>
              <MessageSquareQuote
                className="w-6 h-6 text-[#183D2D]/60 shrink-0"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </div>

            {submittedNote ? (
              <div className="py-8">
                <div className="flex items-center gap-2.5 text-[#183D2D]">
                  <CheckCircle2 className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <span className="font-serif text-xl">
                    Thank you, {submittedNote.name}.
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#292821]/80">
                  Your note for{' '}
                  <span className="font-semibold text-[#183D2D]">
                    {submittedNote.dish}
                  </span>{' '}
                  has been recorded for this session. We also welcome you to
                  post your review on Google Maps to help fellow diners in
                  Gwalior.
                </p>
                <blockquote className="mt-4 border border-[#D5C4A3] bg-[#D5C4A3]/20 p-4 text-sm italic text-[#292821]/85">
                  &ldquo;{submittedNote.note}&rdquo;
                </blockquote>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <a
                    href={BRAND.googleReviewsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-2 bg-[#183D2D] px-5 py-2.5 text-sm font-medium text-[#F3EBDD] hover:bg-[#122f22] transition-colors"
                  >
                    <span>Share on Google Maps</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmittedNote(null)}
                    className="min-h-[44px] px-4 py-2 text-sm font-medium text-[#183D2D] underline underline-offset-4 hover:text-[#B63B32] cursor-pointer"
                  >
                    Write another note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="guest-name"
                      className="block text-xs font-semibold tracking-wide text-[#292821]/80 mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      id="guest-name"
                      type="text"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      placeholder="e.g. Aarav"
                      className="w-full min-h-[44px] border border-[#D5C4A3] bg-white/55 px-3.5 py-2.5 text-sm text-[#292821] placeholder:text-[#292821]/40 focus:border-[#183D2D] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="favourite-dish"
                      className="block text-xs font-semibold tracking-wide text-[#292821]/80 mb-1.5"
                    >
                      Favourite Dish
                    </label>
                    <select
                      id="favourite-dish"
                      value={favouriteDish}
                      onChange={(e) => setFavouriteDish(e.target.value)}
                      className="w-full min-h-[44px] border border-[#D5C4A3] bg-white/55 px-3.5 py-2.5 text-sm text-[#292821] focus:border-[#183D2D] focus:outline-none"
                    >
                      {SIGNATURE_DISHES.map((dish) => (
                        <option key={dish.id} value={dish.name}>
                          {dish.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="guest-note"
                    className="block text-xs font-semibold tracking-wide text-[#292821]/80 mb-1.5"
                  >
                    Your Dining Memory
                  </label>
                  <textarea
                    id="guest-note"
                    rows={3}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="What stood out during your visit?"
                    className="w-full border border-[#D5C4A3] bg-white/55 px-3.5 py-2.5 text-sm text-[#292821] placeholder:text-[#292821]/40 focus:border-[#183D2D] focus:outline-none resize-none"
                  />
                </div>

                {formError && (
                  <p role="alert" className="text-xs font-medium text-[#B63B32]">
                    {formError}
                  </p>
                )}

                <div className="flex items-center justify-between gap-4 pt-1">
                  <span className="text-xs text-[#292821]/60">
                    No fabricated reviews are shown on this site.
                  </span>
                  <button
                    type="submit"
                    className="min-h-[44px] bg-[#183D2D] px-6 py-2.5 text-sm font-medium text-[#F3EBDD] transition-colors hover:bg-[#122f22] cursor-pointer whitespace-nowrap shrink-0"
                  >
                    Submit Note
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
