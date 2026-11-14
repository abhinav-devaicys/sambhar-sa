import officialLogoMark from '@/sambharsa_official_logo_mark.jpg';

interface BrandMarkProps {
  variant?: 'dark' | 'light';
  showTagline?: boolean;
}

export function BrandMark({
  variant = 'dark',
}: BrandMarkProps) {
  if (variant === 'light') {
    return (
      <span className="inline-flex items-center whitespace-nowrap shrink-0 rounded-xl sm:rounded-2xl bg-white px-1.5 py-0.5 sm:px-2 sm:py-1 shadow-sm">
        <img
          src={officialLogoMark}
          alt="SambharSa — Chasing Flavours of the South!"
          className="h-9 sm:h-11 lg:h-12 w-auto object-contain select-none"
        />
      </span>
    );
  }

  return (
    <span className="inline-flex items-center whitespace-nowrap shrink-0">
      <img
        src={officialLogoMark}
        alt="SambharSa — Chasing Flavours of the South!"
        className="h-9 sm:h-10 lg:h-11 w-auto object-contain mix-blend-multiply select-none"
      />
    </span>
  );
}
