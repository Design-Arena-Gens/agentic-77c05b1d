export type Category = {
  id: string;
  name: string;
  image: string;
  spotlight: string;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  rating: number;
  ratingsCount: number;
  image: string;
  prime?: boolean;
  badge?: string;
  category: string;
};

export type Deal = {
  id: string;
  title: string;
  description: string;
  discountLabel: string;
  image: string;
  expiresIn: string;
};

export type Collection = {
  id: string;
  title: string;
  tagline: string;
  image: string;
};

export const heroSlides = [
  {
    id: "fresh-arrivals",
    headline: "Upgrade your home with summer essentials",
    subheading: "Save up to 40% on smart home, kitchen, and decor picks.",
    cta: "Shop home & kitchen",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80",
    accent: "#FF9900",
  },
  {
    id: "tech-drop",
    headline: "The latest tech, handpicked for you",
    subheading: "Laptops, tablets, and accessories from top brands.",
    cta: "Explore electronics",
    image:
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1600&q=80",
    accent: "#232F3E",
  },
  {
    id: "outdoor-living",
    headline: "Ready for backyard season?",
    subheading: "Grills, patio furniture, and more to make summer shine.",
    cta: "Shop outdoor living",
    image:
      "https://images.unsplash.com/photo-1530533718754-001d2668365a?auto=format&fit=crop&w=1600&q=80",
    accent: "#008296",
  },
] as const;

export const categories: Category[] = [
  {
    id: "tech",
    name: "Electronics",
    image:
      "https://images.unsplash.com/photo-1517059224940-d4af9eec41e5?auto=format&fit=crop&w=600&q=80",
    spotlight: "Up to 30% off PCs & tablets",
  },
  {
    id: "home",
    name: "Home & Kitchen",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80",
    spotlight: "Refresh your living room",
  },
  {
    id: "beauty",
    name: "Beauty & Grooming",
    image:
      "https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=600&q=80",
    spotlight: "Glow with summer skincare",
  },
  {
    id: "fitness",
    name: "Sports & Outdoors",
    image:
      "https://images.unsplash.com/photo-1506224477002-47c61ea78b21?auto=format&fit=crop&w=600&q=80",
    spotlight: "Gear up for adventure",
  },
];

export const featuredProducts: Product[] = [
  {
    id: "echo-pop",
    name: "Echo Pop Smart Speaker with Alexa",
    price: 39.99,
    rating: 4.6,
    ratingsCount: 22345,
    image:
      "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?auto=format&fit=crop&w=640&q=80",
    prime: true,
    badge: "Deal of the day",
    category: "Smart Home",
  },
  {
    id: "kindle-scribe",
    name: "Kindle Scribe 64 GB with Premium Pen",
    price: 339.99,
    rating: 4.8,
    ratingsCount: 8456,
    image:
      "https://images.unsplash.com/photo-1513475392581-04b3947925e7?auto=format&fit=crop&w=640&q=80",
    prime: true,
    category: "Tablets",
  },
  {
    id: "bose-700",
    name: "Bose Noise Cancelling Headphones 700",
    price: 299.0,
    rating: 4.7,
    ratingsCount: 12678,
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=640&q=80",
    category: "Headphones",
  },
  {
    id: "keurig-k",
    name: "Keurig K-Supreme Plus Smart Coffee Maker",
    price: 179.99,
    rating: 4.5,
    ratingsCount: 9564,
    image:
      "https://images.unsplash.com/photo-1484981137413-879d0a2a9ecb?auto=format&fit=crop&w=640&q=80",
    prime: true,
    category: "Kitchen",
  },
];

export const dailyDeals: Deal[] = [
  {
    id: "deal-1",
    title: "Summer fashion finds",
    description: "Light layers and breezy styles under $50.",
    discountLabel: "Up to 45% off",
    image:
      "https://images.unsplash.com/photo-1521579971123-1192931a1452?auto=format&fit=crop&w=640&q=80",
    expiresIn: "Ends in 6h 42m",
  },
  {
    id: "deal-2",
    title: "Smart TVs from top brands",
    description: "4K and OLED displays with Alexa built-in.",
    discountLabel: "Save up to $400",
    image:
      "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=640&q=80",
    expiresIn: "Ends today",
  },
  {
    id: "deal-3",
    title: "Essential home office upgrades",
    description: "Desk chairs, monitors, and lighting picks.",
    discountLabel: "Up to 35% off",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=640&q=80",
    expiresIn: "Ends in 12h 15m",
  },
];

export const trendingCollections: Collection[] = [
  {
    id: "travel",
    title: "Travel-ready tech",
    tagline: "Portable chargers, headphones, and backpacks.",
    image:
      "https://images.unsplash.com/photo-1529074963764-98f45c47344b?auto=format&fit=crop&w=720&q=80",
  },
  {
    id: "kitchen",
    title: "Chef's kitchen upgrades",
    tagline: "Cookware, knives, and smart appliances.",
    image:
      "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=720&q=80",
  },
  {
    id: "gaming",
    title: "Gaming setups that win",
    tagline: "Monitors, RGB lighting, and accessories.",
    image:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=720&q=80",
  },
];

export const bestSellers: Product[] = [
  {
    id: "airfryer",
    name: "Cosori Pro LE 5.0-Quart Air Fryer",
    price: 99.99,
    rating: 4.7,
    ratingsCount: 32450,
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31b?auto=format&fit=crop&w=640&q=80",
    prime: true,
    category: "Kitchen",
  },
  {
    id: "fitbit",
    name: "Fitbit Charge 6 Fitness Tracker",
    price: 159.95,
    rating: 4.5,
    ratingsCount: 27890,
    image:
      "https://images.unsplash.com/photo-1516570161787-2fd917215a3d?auto=format&fit=crop&w=640&q=80",
    prime: true,
    category: "Wearables",
  },
  {
    id: "lego",
    name: "LEGO Icons Botanical Collection",
    price: 49.99,
    rating: 4.9,
    ratingsCount: 14890,
    image:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=640&q=80",
    category: "Toys",
  },
];

export const recommendedProducts: Product[] = [
  {
    id: "jbl-flip",
    name: "JBL Flip 6 Portable Bluetooth Speaker",
    price: 129.95,
    rating: 4.8,
    ratingsCount: 21034,
    image:
      "https://images.unsplash.com/photo-1612810806695-30ba1b4c064c?auto=format&fit=crop&w=640&q=80",
    prime: true,
    category: "Audio",
  },
  {
    id: "anker",
    name: "Anker PowerCore III Elite 25600 PD 87W",
    price: 159.99,
    rating: 4.6,
    ratingsCount: 8954,
    image:
      "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&w=640&q=80",
    category: "Accessories",
  },
  {
    id: "dyson",
    name: "Dyson V11 Torque Drive Cordless Vacuum",
    price: 599.99,
    rating: 4.7,
    ratingsCount: 11234,
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=640&q=80",
    prime: true,
    category: "Home Care",
  },
  {
    id: "instapot",
    name: "Instant Pot Duo Crisp Air Fryer Pressure Cooker",
    price: 169.95,
    rating: 4.8,
    ratingsCount: 25432,
    image:
      "https://images.unsplash.com/photo-1585386959984-a4155228ef44?auto=format&fit=crop&w=640&q=80",
    category: "Kitchen",
  },
];

export const footerLinks = [
  {
    title: "Get to Know Us",
    links: [
      "Careers",
      "Blog",
      "About Amazon",
      "Investor Relations",
      "Amazon Devices",
      "Amazon Science",
    ],
  },
  {
    title: "Make Money with Us",
    links: [
      "Sell products on Amazon",
      "Sell on Amazon Business",
      "Sell apps on Amazon",
      "Become an Affiliate",
      "Advertise Your Products",
      "Self-Publish with Us",
    ],
  },
  {
    title: "Amazon Payment Products",
    links: [
      "Amazon Business Card",
      "Shop with Points",
      "Reload Your Balance",
      "Amazon Currency Converter",
    ],
  },
  {
    title: "Let Us Help You",
    links: [
      "Amazon & COVID-19",
      "Your Account",
      "Your Orders",
      "Shipping Rates & Policies",
      "Returns & Replacements",
      "Amazon Assistant",
    ],
  },
] as const;

export const navLinks = [
  "Today's Deals",
  "Customer Service",
  "Registry",
  "Gift Cards",
  "Sell",
] as const;
