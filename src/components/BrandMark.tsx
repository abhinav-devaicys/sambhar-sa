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
      <span className="inline-flex items-center whitespace-nowrap shrink-0 rounded-2xl bg-white px-2 py-1 shadow-sm">
        <img
          src={officialLogoMark}
          alt="SambharSa — Chasing Flavours of the South!"
          className="h-11 sm:h-12 w-auto object-contain select-none"
        />
      </span>
    );
  }

  return (
    <span className="inline-flex items-center whitespace-nowrap shrink-0">
      <img
        src={officialLogoMark}
        alt="SambharSa — Chasing Flavours of the South!"
        className="h-10 sm:h-11 w-auto object-contain mix-blend-multiply select-none"
      />
    </span>
  );
}
