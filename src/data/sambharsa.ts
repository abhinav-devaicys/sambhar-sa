import heroMasalaDosaImg from '@/src/assets/images/hero_masala_dosa_1794675349619.jpg';
import storyFilterCoffeeImg from '@/src/assets/images/story_filter_coffee_1794675350193.jpg';
import dishGheeRoastImg from '@/src/assets/images/dish_ghee_roast_1794675349829.jpg';
import dishGheePodiImg from '@/src/assets/images/dish_ghee_podi_1794675351536.jpg';
import dishIdliVadaImg from '@/src/assets/images/dish_idli_vada_1794675350707.jpg';
import dishLemonRiceImg from '@/src/assets/images/dish_lemon_rice_1794675351884.jpg';
import cultureSpiceDetailsImg from '@/src/assets/images/culture_spice_details_1794675351708.jpg';
import diningExperienceInteriorImg from '@/unnamed.webp';
import storefrontEveningImg from '@/unnamed (1).webp';

export type MenuCategory =
  | 'All'
  | 'Dosa'
  | 'Idli & Vada'
  | 'Rice Specialities'
  | 'Beverages';

export interface DishItem {
  id: string;
  name: string;
  category: Exclude<MenuCategory, 'All'>;
  description: string;
  accompaniments: string;
  dietary: 'Pure Veg';
  image: string;
  imageAlt: string;
  featured?: boolean;
}

export interface CraftDetail {
  index: string;
  title: string;
  description: string;
}

export interface CustomerReview {
  id: string;
  author: string;
  rating: number;
  quote: string;
}

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'ananya-r',
    author: 'Ananya R.',
    rating: 5,
    quote:
      'The authentic flavors of the South brought right to the heart of Gwalior. Every dish, especially the sambhar, feels like a warm embrace from a traditional home kitchen. A truly sophisticated and premium dining experience.',
  },
  {
    id: 'vikram-s',
    author: 'Vikram S.',
    rating: 5,
    quote:
      'Finally, a South Indian spot that gets the balance between modern elegance and genuine cultural roots right. The ambiance is as refined as the menu. Highly recommended for anyone chasing the true flavors of the South.',
  },
];

export const BRAND = {
  name: 'SambharSa',
  city: 'Gwalior',
  tagline: 'Chasing Flavours of the South!',
  address:
    '5, DRDE Road, Jhansi Road, opposite Food Corporation of India Godown, Gwalior, Madhya Pradesh, India',
  shortAddress: '5, DRDE Road, Jhansi Road, Opp. FCI Godown, Gwalior',
  landmark: 'Opposite Food Corporation of India Godown, Jhansi Road',
  googleMapsUrl: 'https://maps.app.goo.gl/Md3Dhve5co6axZuV7',
  googleReviewsUrl:
    'https://www.google.com/maps/search/?api=1&query=SambharSa+Gwalior+DRDE+Road',
  storefrontImage: storefrontEveningImg,
  heroImage: heroMasalaDosaImg,
  storyImage: storyFilterCoffeeImg,
  cultureImage: cultureSpiceDetailsImg,
  diningImage: diningExperienceInteriorImg,
};

export const MENU_CATEGORIES: MenuCategory[] = [
  'All',
  'Dosa',
  'Idli & Vada',
  'Rice Specialities',
  'Beverages',
];

export const SIGNATURE_DISHES: DishItem[] = [
  {
    id: 'masala-dosa',
    name: 'Masala Dosa',
    category: 'Dosa',
    description:
      'Fermented rice-and-lentil crepe griddled to a crisp golden sheen, folded around spiced potato masala tempered with mustard seeds and curry leaves.',
    accompaniments: 'Served with slow-simmered sambhar & freshly ground chutneys',
    dietary: 'Pure Veg',
    image: heroMasalaDosaImg,
    imageAlt:
      'Golden crisp Masala Dosa served on a fresh banana leaf with brass bowls of sambhar and chutneys',
    featured: true,
  },
  {
    id: 'ghee-roast-dosa',
    name: 'Ghee Roast Dosa',
    category: 'Dosa',
    description:
      'Paper-thin, lacy crepe roasted slowly with aromatic clarified butter until crisp and deeply caramelised along every fold.',
    accompaniments: 'Served with coconut chutney & house sambhar',
    dietary: 'Pure Veg',
    image: dishGheeRoastImg,
    imageAlt:
      'Crisp golden cone-shaped Ghee Roast Dosa on a banana leaf beside coconut chutney and steaming sambhar',
    featured: true,
  },
  {
    id: 'ghee-podi-dosa',
    name: 'Ghee Podi Dosa',
    category: 'Dosa',
    description:
      'A crisp South Indian classic generously finished with house-roasted lentil gun-powder spice blend and pure ghee.',
    accompaniments: 'Served with white coconut & spiced tomato chutneys',
    dietary: 'Pure Veg',
    image: dishGheePodiImg,
    imageAlt:
      'Ghee Podi Dosa coated in roasted spiced lentil podi on a fresh banana leaf with brass bowls',
    featured: true,
  },
  {
    id: 'idli-medu-vada',
    name: 'Steamed Idli & Medu Vada',
    category: 'Idli & Vada',
    description:
      'Pillowy steamed rice cakes paired with crisp, golden urad dal fritters seasoned with whole black peppercorns and fresh curry leaves.',
    accompaniments: 'Served steaming with vegetable sambhar & twin chutneys',
    dietary: 'Pure Veg',
    image: dishIdliVadaImg,
    imageAlt:
      'Soft steamed white idlis and crisp golden medu vada on a banana leaf with brass bowls of sambhar',
    featured: true,
  },
  {
    id: 'lemon-rice',
    name: 'Lemon Rice',
    category: 'Rice Specialities',
    description:
      'Fluffy steamed rice tossed with fragrant turmeric, fresh lemon juice, crackled black mustard seeds, chana dal, dried red chillies, and roasted cashews.',
    accompaniments: 'Finished with fresh curry leaf tempering',
    dietary: 'Pure Veg',
    image: dishLemonRiceImg,
    imageAlt:
      'Vibrant turmeric-yellow Lemon Rice garnished with roasted cashews, mustard seeds, and curry leaves',
    featured: true,
  },
  {
    id: 'filter-coffee',
    name: 'South Indian Filter Coffee',
    category: 'Beverages',
    description:
      'Slow-brewed decoction whisked with hot frothed milk and poured high in a traditional brass davara tumbler for an aromatic finish.',
    accompaniments: 'Freshly brewed to order',
    dietary: 'Pure Veg',
    image: storyFilterCoffeeImg,
    imageAlt:
      'Traditional brass davara and tumbler pouring frothy steaming South Indian filter coffee',
    featured: true,
  },
];

export const CULINARY_DETAILS: CraftDetail[] = [
  {
    index: '01',
    title: 'Slow-Fermented Batters',
    description:
      'Patient soaking and stone-style grinding create light, airy idlis and dosas that crisp naturally on a seasoned griddle.',
  },
  {
    index: '02',
    title: 'Freshly Tempered Chutneys',
    description:
      'Ground daily with fresh coconut, roasted lentils, and finished with crackling mustard seeds, dried chillies, and curry leaves.',
  },
  {
    index: '03',
    title: 'Brass & Banana Leaf Warmth',
    description:
      'Honouring time-tested serving traditions where aroma, texture, and heartfelt hospitality meet at every table.',
  },
];

export const EXPERIENCE_GALLERY = [
  {
    id: 'dining-room',
    title: 'Warm Timber, Cane Seating & Woven Light',
    caption: 'Unhurried tables crafted for family gatherings and everyday comfort.',
    image: diningExperienceInteriorImg,
    imageAlt:
      'Authentic SambharSa dining room interior with woven cane pendant lights, rich timber beams, wooden tables with cane chairs, and South Indian accents',
    span: 'large' as const,
  },
  {
    id: 'storefront',
    title: 'Evening Welcome & Vanakkam Entry',
    caption: 'Illuminated emerald signage, pure-vegetarian craft, and warm glass doors welcoming every guest.',
    image: storefrontEveningImg,
    imageAlt:
      'SambharSa evening storefront facade with illuminated green signage, Vanakkam doorway light, and warm interior dining room visible inside',
    span: 'side' as const,
  },
];
