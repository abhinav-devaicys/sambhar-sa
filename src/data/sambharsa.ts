import heroMasalaDosaImg from '@/src/assets/images/hero_masala_dosa_1794675349619.jpg';
import storyFilterCoffeeImg from '@/src/assets/images/story_filter_coffee_1794675350193.jpg';
import dishGheeRoastImg from '@/src/assets/images/dish_ghee_roast_1794675349829.jpg';
import dishIdliVadaImg from '@/src/assets/images/dish_idli_vada_1794675350707.jpg';
import dishLemonRiceImg from '@/src/assets/images/dish_lemon_rice_1794675351884.jpg';
import cultureSpiceDetailsImg from '@/src/assets/images/culture_spice_details_1794675351708.jpg';
import diningExperienceInteriorImg from '@/unnamed.webp';
import storefrontEveningImg from '@/unnamed (1).webp';

export type MenuCategory =
  | 'All'
  | 'Dosa'
  | 'Fusion Dosa'
  | 'South Indian Specials'
  | 'Rice'
  | 'Desserts'
  | 'Beverages';

export type MenuCategoryKey = Exclude<MenuCategory, 'All'>;

export interface DishItem {
  id: string;
  name: string;
  category: MenuCategoryKey;
  description: string;
  accompaniments: string;
  dietary: 'Pure Veg';
  image: string;
  imageAlt: string;
}

export interface MenuCategoryGroup {
  category: MenuCategoryKey;
  subtitle: string;
  items: {
    name: string;
    note?: string;
  }[];
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
  businessType: 'South Indian Vegetarian Restaurant',
  cuisine: 'Authentic South Indian cuisine',
  tagline: 'Chasing Flavours Of The South!',
  address:
    '5, DRDE Road, Jhansi Road, Opposite Food Corporation of India Godown, Gwalior, Madhya Pradesh – 474002, India.',
  shortAddress: '5, DRDE Road, Jhansi Road, Opp. FCI Godown, Gwalior – 474002',
  landmark: 'Opposite Food Corporation of India Godown, Jhansi Road',
  phone: '+91 96853 93184',
  phoneHref: 'tel:+919685393184',
  services: ['Dine-in', 'Takeaway', 'Home Delivery'] as const,
  googleRating: 4.7,
  googleReviewCount: '668+',
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
  'Fusion Dosa',
  'South Indian Specials',
  'Rice',
  'Desserts',
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
  },
  {
    id: 'ghee-roast',
    name: 'Ghee Roast',
    category: 'Dosa',
    description:
      'Paper-thin, lacy crepe roasted slowly with aromatic clarified butter until crisp and deeply caramelised along every fold.',
    accompaniments: 'Served with coconut chutney & house sambhar',
    dietary: 'Pure Veg',
    image: dishGheeRoastImg,
    imageAlt:
      'Crisp golden cone-shaped Ghee Roast dosa on a banana leaf beside coconut chutney and steaming sambhar',
  },
  {
    id: 'idli-vada',
    name: 'Idli & Vada',
    category: 'South Indian Specials',
    description:
      'Pillowy steamed rice cakes alongside crisp, golden urad dal fritters seasoned with whole black peppercorns and fresh curry leaves.',
    accompaniments: 'Served steaming with vegetable sambhar & twin chutneys',
    dietary: 'Pure Veg',
    image: dishIdliVadaImg,
    imageAlt:
      'Soft steamed white idlis and crisp golden vada on a banana leaf with brass bowls of sambhar',
  },
  {
    id: 'lemon-rice',
    name: 'Lemon Rice',
    category: 'Rice',
    description:
      'Fluffy steamed rice tossed with fragrant turmeric, fresh lemon juice, crackled black mustard seeds, chana dal, dried red chillies, and roasted cashews.',
    accompaniments: 'Finished with fresh curry leaf tempering',
    dietary: 'Pure Veg',
    image: dishLemonRiceImg,
    imageAlt:
      'Vibrant turmeric-yellow Lemon Rice garnished with roasted cashews, mustard seeds, and curry leaves',
  },
];

export const FULL_MENU: MenuCategoryGroup[] = [
  {
    category: 'Dosa',
    subtitle: 'Crisp fermented crepes griddled fresh to order',
    items: [
      { name: 'Sada Dosa', note: 'Classic crisp golden crepe' },
      { name: 'Masala Dosa', note: 'Spiced potato masala filling' },
      { name: 'Mysore Dosa', note: 'Red chilli-garlic chutney spread' },
      { name: 'Rawa Dosa', note: 'Lacy semolina crepe with pepper & cumin' },
      { name: 'Benne Masala Dosa', note: 'Rich butter-roasted with spiced potato' },
      { name: 'Ghee Roast', note: 'Caramelised in pure clarified butter' },
    ],
  },
  {
    category: 'Fusion Dosa',
    subtitle: 'Playful contemporary twists on the traditional griddle',
    items: [
      { name: 'Jinni Dosa', note: 'Savory vegetable & cheese medley' },
      { name: 'Pav Bhaji Dosa', note: 'Spiced mashed vegetable bhaji filling' },
      { name: 'Peri Peri Cheese Dosa', note: 'Zesty peri peri seasoning & melted cheese' },
      { name: 'Peri Peri Paneer Dosa', note: 'Spiced cottage cheese & peri peri blend' },
    ],
  },
  {
    category: 'South Indian Specials',
    subtitle: 'Comforting classics from morning tiffin to hearty bowls',
    items: [
      { name: 'Idli', note: 'Steamed fluffy fermented rice cakes' },
      { name: 'Vada', note: 'Crisp savoury urad dal lentil fritters' },
      { name: 'Paniyaram', note: 'Golden pan-roasted spiced batter dumplings' },
      { name: 'Upma', note: 'Roasted semolina tempered with curry leaves' },
      { name: 'Poori Kurma', note: 'Puffed golden pooris with spiced vegetable kurma' },
      { name: 'Bisi Bele Bath', note: 'Warm spiced lentil, rice & vegetable stew' },
    ],
  },
  {
    category: 'Rice',
    subtitle: 'Aromatic tempered rice specialities',
    items: [
      { name: 'Lemon Rice', note: 'Turmeric, fresh lemon & roasted cashews' },
      { name: 'Tomato Rice', note: 'Tangy slow-simmered tomato & spice tempering' },
      { name: 'Curd Rice', note: 'Cooling yogurt rice finished with mustard & curry leaves' },
      { name: 'Ghee Rice', note: 'Fragrant rice infused with pure ghee & whole spices' },
    ],
  },
  {
    category: 'Desserts',
    subtitle: 'Traditional slow-set Indian kulfis',
    items: [
      { name: 'Malai Kulfi', note: 'Rich classic reduced-milk kulfi' },
      { name: 'Kesar Pista Kulfi', note: 'Saffron threads & roasted pistachios' },
      { name: 'Mango Kulfi', note: 'Sweet summer mango creaminess' },
      { name: 'Maharaja Kulfi', note: 'Festive royal nut & cardamom blend' },
      { name: 'Jamun Kulfi', note: 'Vibrant tangy-sweet jamun berry kulfi' },
    ],
  },
  {
    category: 'Beverages',
    subtitle: 'Refreshing traditional coolers & spiced drinks',
    items: [
      { name: 'Aam Panna', note: 'Spiced roasted raw mango cooler' },
      { name: 'Kokum Sherbet', note: 'Tangy coastal kokum & cumin infusion' },
      { name: 'Panakam', note: 'Traditional jaggery, cardamom & ginger drink' },
      { name: 'Tadka Pudina Chaas', note: 'Tempered mint spiced buttermilk' },
    ],
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
