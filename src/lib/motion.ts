export const EASE_EDITORIAL = [0.22, 1, 0.36, 1] as const;
export const EASE_MICRO = [0.2, 0, 0, 1] as const;

export const VIEWPORT_REVEAL = {
  once: true,
  amount: 0.14,
  margin: '0px 0px -40px 0px',
} as const;

export const SPRING_TAB = {
  type: 'spring' as const,
  stiffness: 440,
  damping: 36,
  mass: 0.85,
};
