import { FormEvent, useState } from 'react';
import {
  ArrowUpRight,
  CheckCircle2,
  MessageSquareQuote,
  Star,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { BRAND, CUSTOMER_REVIEWS, FULL_MENU, SIGNATURE_DISHES } from '../data/sambharsa';
import { EASE_EDITORIAL, VIEWPORT_REVEAL } from '../lib/motion';

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
      className="border-b border-[#D5C4A3]/60 bg-[#F3EBDD] py-14 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-14">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_REVEAL}
          transition={{ duration: 0.5, ease: EASE_EDITORIAL }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 sm:gap-6 pb-8 sm:pb-10 border-b border-[#D5C4A3]/70 transform-gpu"
        >
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-medium tracking-wide text-[#B63B32]">
              Guest Voices
            </p>
            <h2
              className="mt-3 font-serif text-[#183D2D] leading-[1.1] tracking-tight"
              style={{ fontSize: 'clamp(1.85rem, 3.3vw, 3.25rem)' }}
            >
              Good Food. Beautiful Memories.
            </h2>
            <p className="mt-4 text-base sm:text-[17px] leading-[1.7] text-[#292821]/80">
              Reflections from diners who experienced the warmth, hospitality,
              and flavours of SambharSa, Gwalior.
            </p>
          </div>

          <a
            href={BRAND.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-[46px] self-start lg:self-auto items-center justify-center gap-2.5 border border-[#183D2D]/35 px-6 py-2.5 text-sm font-semibold text-[#183D2D] transition-[background-color,border-color,color] duration-200 ease-[cubic-bezier(0.2,0,0,1)] hover:border-[#183D2D] hover:bg-[#183D2D] hover:text-[#F3EBDD] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183D2D]"
          >
            <span>Read Google Business Reviews</span>
            <ArrowUpRight
              className="w-4 h-4 transform-gpu transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </motion.div>

        {/* Authentic Customer Feedback Grid */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {CUSTOMER_REVIEWS.map((review, index) => (
            <motion.article
              key={review.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_REVEAL}
              transition={{ duration: 0.48, delay: index * 0.08, ease: EASE_EDITORIAL }}
              className="flex flex-col justify-between border border-[#D5C4A3] bg-[#F3EBDD] p-5 sm:p-8 lg:p-10 transform-gpu"
            >
              <div>
                {/* Five-Star Rating Display */}
                <div
                  className="flex items-center justify-between gap-4"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  <div className="flex items-center gap-1">
                    {Array.from({ length: review.rating }).map((_, starIdx) => (
                      <Star
                        key={starIdx}
                        className="w-4 h-4 fill-[#E7B928] text-[#E7B928]"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <span className="text-xs font-medium tabular-nums text-[#292821]/65">
                    {review.rating}.0 / 5
                  </span>
                </div>

                <blockquote className="mt-5 sm:mt-6 font-serif text-lg sm:text-[1.35rem] leading-[1.55] text-[#183D2D]">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
              </div>

              <footer className="mt-6 sm:mt-8 pt-4 border-t border-[#D5C4A3]/60 flex flex-wrap items-center justify-between gap-2 text-sm">
                <span className="font-semibold text-[#292821]">
                  {review.author}
                </span>
                <span className="text-xs text-[#292821]/65">
                  SambharSa Guest · Gwalior
                </span>
              </footer>
            </motion.article>
          ))}
        </div>

        {/* Share Your Table Note Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_REVEAL}
          transition={{ duration: 0.5, delay: 0.08, ease: EASE_EDITORIAL }}
          className="mt-8 sm:mt-12 border border-[#D5C4A3] bg-[#D5C4A3]/15 p-5 sm:p-8 lg:p-10 transform-gpu"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2.5 text-[#183D2D]">
                <MessageSquareQuote
                  className="w-5 h-5 text-[#B63B32] shrink-0"
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
                <span className="text-xs font-semibold tracking-wide text-[#B63B32]">
                  Guestbook
                </span>
              </div>
              <h3 className="mt-2 font-serif text-2xl sm:text-3xl text-[#183D2D]">
                Share Your Table Note
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#292821]/75">
                Recently dined at SambharSa Gwalior? Leave a note about your
                favourite dish or share your experience on Google Maps.
              </p>
            </div>

            <div className="lg:col-span-7">
              <AnimatePresence mode="wait" initial={false}>
              {submittedNote ? (
                <motion.div
                  key="submitted-note"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.22, ease: EASE_EDITORIAL }}
                  className="py-2 transform-gpu"
                >
                  <div className="flex items-center gap-2.5 text-[#183D2D]">
                    <CheckCircle2
                      className="w-5 h-5 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="font-serif text-xl">
                      Thank you, {submittedNote.name}.
                    </span>
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#292821]/80">
                    Your note for{' '}
                    <span className="font-semibold text-[#183D2D]">
                      {submittedNote.dish}
                    </span>{' '}
                    has been recorded for this session. We also invite you to
                    post your review on Google Maps.
                  </p>
                  <blockquote className="mt-4 border border-[#D5C4A3] bg-[#F3EBDD] p-4 text-sm italic text-[#292821]/85">
                    &ldquo;{submittedNote.note}&rdquo;
                  </blockquote>
                  <div className="mt-5 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4">
                    <a
                      href={BRAND.googleReviewsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] w-full sm:w-auto items-center justify-center gap-2 bg-[#183D2D] px-5 py-2.5 text-sm font-medium text-[#F3EBDD] hover:bg-[#122f22] transition-colors"
                    >
                      <span>Share on Google Maps</span>
                      <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmittedNote(null)}
                      className="min-h-[44px] w-full sm:w-auto px-4 py-2 text-sm font-medium text-[#183D2D] underline underline-offset-4 hover:text-[#B63B32] cursor-pointer"
                    >
                      Write another note
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="guestbook-form"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.22, ease: EASE_EDITORIAL }}
                  onSubmit={handleSubmit}
                  className="space-y-4 transform-gpu"
                  noValidate
                >
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
                        placeholder="e.g. Ananya"
                        className="w-full min-h-[44px] border border-[#D5C4A3] bg-[#F3EBDD] px-3.5 py-2.5 text-base sm:text-sm text-[#292821] placeholder:text-[#292821]/40 focus:border-[#183D2D] focus:outline-none"
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
                        className="w-full min-h-[44px] border border-[#D5C4A3] bg-[#F3EBDD] px-3.5 py-2.5 text-base sm:text-sm text-[#292821] focus:border-[#183D2D] focus:outline-none"
                      >
                        {FULL_MENU.map((group) => (
                          <optgroup key={group.category} label={group.category}>
                            {group.items.map((item) => (
                              <option key={item.name} value={item.name}>
                                {item.name}
                              </option>
                            ))}
                          </optgroup>
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
                      rows={2}
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder="What stood out during your visit?"
                      className="w-full border border-[#D5C4A3] bg-[#F3EBDD] px-3.5 py-2.5 text-base sm:text-sm text-[#292821] placeholder:text-[#292821]/40 focus:border-[#183D2D] focus:outline-none resize-none"
                    />
                  </div>

                  {formError && (
                    <p
                      role="alert"
                      className="text-xs font-medium text-[#B63B32]"
                    >
                      {formError}
                    </p>
                  )}

                  <div className="flex justify-end pt-1">
                    <button
                      type="submit"
                      className="min-h-[44px] w-full sm:w-auto bg-[#183D2D] px-6 py-2.5 text-sm font-medium text-[#F3EBDD] transition-colors duration-200 hover:bg-[#122f22] cursor-pointer whitespace-nowrap shrink-0"
                    >
                      Submit Note
                    </button>
                  </div>
                </motion.form>
              )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
