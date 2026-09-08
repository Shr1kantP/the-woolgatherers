export interface BlogIndexPost {
  id: string;
  slug: string;
  badge: string;
  date: string;
  title: string;
  excerpt: string;
  gradientClass: string;
  image?: string;
  imageAlt?: string;
  href: string;
  featured?: boolean;
}

export const blogIndexPosts: BlogIndexPost[] = [
  {
    id: 'plus',
    slug: 'top-creative-marketing-agencies-in-bangalore',
    badge: 'The Woolgatherers',
    date: 'March 26, 2026',
    title: 'Top Creative Marketing Agencies in Bangalore',
    excerpt: 'A shortlist of creative marketing agencies in Bangalore, and what to look for when choosing a partner for your next chapter.',
    gradientClass: 'bg-gradient-to-br from-[#9edcf0] via-[#52c9d7] to-[#23a9c1]',
    image: '/images/blogs/blog-1.png',
    imageAlt: 'A painted city advertising scene',
    href: '/blog/top-creative-marketing-agencies-in-bangalore',
  },
  {
    id: 'f-and-b-agencies',
    slug: 'best-digital-agencies-in-bangalore-for-f-and-b-brands',
    badge: 'The Woolgatherers',
    date: 'April 02, 2026',
    title: 'Best Digital Agencies in Bangalore for F&B Brands',
    excerpt: 'What to look for before hiring a digital agency for food and beverage work, from production capability to content strategy.',
    gradientClass: 'bg-gradient-to-br from-[#f1c7a4] via-[#c56f4b] to-[#71382d]',
    image: '/images/blogs/blog-2.png',
    imageAlt: 'A warmly lit restaurant interior',
    href: '/blog/best-digital-agencies-in-bangalore-for-f-and-b-brands',
  },
  {
    id: 'brand-identity-checklist',
    slug: 'complete-brand-identity-checklist-for-d2c-f-and-b-startups',
    badge: 'The Woolgatherers',
    date: 'April 09, 2026',
    title: 'The Complete Brand Identity Checklist for D2C/F&B Startups',
    excerpt: 'The strategic, legal, visual, packaging, content, and technical systems a D2C or F&B brand needs before it scales.',
    gradientClass: 'bg-gradient-to-br from-[#f5d7c5] via-[#d68762] to-[#252525]',
    image: '/images/blogs/blog-3.png',
    imageAlt: 'Illustrated packaged coffee products',
    href: '/blog/complete-brand-identity-checklist-for-d2c-f-and-b-startups',
  },
  {
    id: 'small-digital-agencies',
    slug: 'small-digital-agencies-in-bangalore-worth-knowing',
    badge: 'The Woolgatherers',
    date: 'April 16, 2026',
    title: '7 Small Digital Agencies in Bangalore That Are Worth Knowing About',
    excerpt: 'A practical shortlist of smaller Bangalore agencies for branding, content, websites, social media, and performance marketing.',
    gradientClass: 'bg-gradient-to-br from-[#d7e6ee] via-[#77a8bd] to-[#315767]',
    image: '/images/blogs/blog-5.png',
    imageAlt: 'A creative team working together in a studio',
    href: '/blog/small-digital-agencies-in-bangalore-worth-knowing',
  },
  {
    id: 'chennai-creative-agencies',
    slug: 'top-creative-marketing-agencies-in-chennai',
    badge: 'The Woolgatherers',
    date: 'April 23, 2026',
    title: 'Top Creative Marketing Agencies in Chennai',
    excerpt: 'A shortlist of creative marketing agencies in Chennai, and what to look for when choosing the right partner for your next chapter.',
    gradientClass: 'bg-gradient-to-br from-[#f4d39d] via-[#e69561] to-[#9d4f45]',
    image: '/images/blogs/blog-4.png',
    imageAlt: 'A temple and waterside scene in South India',
    href: '/blog/top-creative-marketing-agencies-in-chennai',
  },
];
