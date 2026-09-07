import { BlogPostData } from './BlogPost';

export const editorialPosts = [
  {
    id: '1',
    title: 'A Residency for Brands',
    description: 'A brand is not built in a rush. It is shaped in conversation, reflection, and deliberate attention.',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200',
    href: '/blog/1',
    isFeatured: true,
  },
  {
    id: '2',
    title: 'Brand Strategy Before Aesthetics',
    description: 'The most memorable identities begin with clarity: audience, positioning, and the tension a brand is ready to resolve.',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200',
    href: '/blog/2',
  },
  {
    id: '3',
    title: 'The Hall of Perspectives',
    description: 'When different generations and disciplines gather, the brand conversation becomes sharper and richer.',
    imageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200',
    href: '/blog/3',
  },
  {
    id: '4',
    title: 'Social Content With a Point of View',
    description: 'Social is not filler. It is where a brand becomes legible, useful, and unmistakably itself.',
    imageUrl: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200',
    href: '/blog/4',
  },
  {
    id: '5',
    title: 'Digital Experiences That Move the Brand Forward',
    description: 'A thoughtful website can make a brand feel complete, confident, and ready for the next chapter.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    href: '/blog/5',
  },
];

export const blogPosts: Record<string, BlogPostData> = {
  '1': {
    date: 'Jul 12, 2025',
    title: 'A Residency for Brands',
    subtitle: 'A place where brands slow down, gather their thoughts, and leave with more clarity.',
    author: 'The Woolgatherers',
    heroImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80',
    heroImageAlt: 'People collaborating around a table in a warm creative studio',
    body: [
      {
        type: 'paragraph',
        content:
          'Not every brand needs more noise. Some need room. A slower rhythm. A place to think before the next move is made.',
      },
      {
        type: 'paragraph',
        content:
          'The Woolgatherers was designed as a residency for brands: a space where founders, teams, and ideas can take stock, sharpen their positioning, and find a more grounded way to grow. This is not an agency model built around quick wins. It is a studio model built for depth.',
      },
      {
        type: 'heading',
        content: 'Why a residency works',
      },
      {
        type: 'paragraph',
        content:
          'Brands are often asked to move quickly before they are fully ready. New launches, packaging decisions, social calendars, and digital overhauls all arrive at once. The result is a tension between velocity and clarity.',
      },
      {
        type: 'list',
        leadIn: 'A proper residency creates room for:',
        items: [
          'Clearer strategic thinking before presentation design begins.',
          'A better understanding of brand purpose, not just market mechanics.',
          'Cross-disciplinary ideas that only emerge through conversation.',
          'A calmer pace that still produces momentum.',
        ],
      },
      {
        type: 'paragraph',
        content:
          'That is the core philosophy: a brand should feel certain in its voice, confident in its visual language, and ready for the next chapter with intention.',
      },
    ],
  },
  '2': {
    date: 'Aug 02, 2025',
    title: 'Brand Strategy Before Aesthetics',
    subtitle: 'A more memorable identity starts with meaning, not just mood.',
    author: 'The Woolgatherers',
    heroImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80',
    heroImageAlt: 'Notebook, strategy notes, and desk setup for brand planning',
    body: [
      {
        type: 'paragraph',
        content:
          'Beautiful design can attract attention, but it does not carry every brand story. The enduring work begins with strategy: who the brand is, what it stands for, and what tension it is ready to solve for its audience.',
      },
      {
        type: 'paragraph',
        content:
          'That means understanding the gap between a brand as it is and the version it wants to become. Sometimes the work is about refining a heritage story. Sometimes it is about making a startup feel more grounded, premium, or emotionally resonant.',
      },
      {
        type: 'heading',
        content: 'The real creative brief',
      },
      {
        type: 'paragraph',
        content:
          'As the brand matures, the creative brief becomes less about trends and more about clarity. What is the promise? What is the audience actually looking for? What should a brand feel like in the moments that matter?',
      },
      {
        type: 'list',
        leadIn: 'The strongest identities usually emerge from an honest answer to these questions:',
        items: [
          'What does this brand want to be known for?',
          'What belief, tension, or need does it help resolve?',
          'How should it feel after a customer encounters it?',
          'What will make this brand memorable beyond the category?',
        ],
      },
      {
        type: 'paragraph',
        content:
          'When strategy is grounded in real intent, the visual system has a much better chance of being distinctive, coherent, and long-lasting.',
      },
    ],
  },
  '3': {
    date: 'Aug 16, 2025',
    title: 'The Hall of Perspectives',
    subtitle: 'Different generations, disciplines, and ways of seeing create better work.',
    author: 'The Woolgatherers',
    heroImage: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80',
    heroImageAlt: 'Creative collaborators sitting around a table with coffee and ideas',
    body: [
      {
        type: 'paragraph',
        content:
          'Behind every brand story is a conversation. At The Woolgatherers, that conversation is deliberately shaped by contrast: different generations, disciplines, and lived experiences produce sharper thinking.',
      },
      {
        type: 'paragraph',
        content:
          'The Hall is a reminder that good creative work is rarely built in isolation. It grows through friction, exchange, and the tension between different ways of seeing the world.',
      },
      {
        type: 'heading',
        content: 'A living network of insight',
      },
      {
        type: 'paragraph',
        content:
          'Some of the best work emerges when a strategist, designer, storyteller, and operator are all in the room together. Each brings a different lens to the same challenge, and each challenge becomes more complete as a result.',
      },
      {
        type: 'list',
        leadIn: 'This is why the residency model matters:',
        items: [
          'Ideas become richer when they are tested against different points of view.',
          'Brand decisions gain texture when they absorb lived expertise and nuance.',
          'The final output feels more human because it was shaped by many perspectives.',
        ],
      },
      {
        type: 'paragraph',
        content:
          'When people from different backgrounds share space, the work is not only better; it becomes more generous, more curious, and more surprisingly original.',
      },
    ],
  },
  '4': {
    date: 'Sep 01, 2025',
    title: 'Social Content With a Point of View',
    subtitle: 'Great social media does not just fill the feed; it reveals the brand.',
    author: 'The Woolgatherers',
    heroImage: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80',
    heroImageAlt: 'Social media team reviewing content strategy and campaign ideas',
    body: [
      {
        type: 'paragraph',
        content:
          'Social media is often treated like a production treadmill: create more, post more, keep the feed alive. But for brands, the more relevant question is not volume. It is voice.',
      },
      {
        type: 'paragraph',
        content:
          'The best content strategy is not generic content with a brand stamp placed on top. It is a deliberate system that helps people understand what the brand believes, how it thinks, and why it is worth paying attention to.',
      },
      {
        type: 'heading',
        content: 'Content that feels like the brand',
      },
      {
        type: 'list',
        leadIn: 'That means a strong content layer should:',
        items: [
          'Reflect the brand’s personality in every frame, caption, and format.',
          'Connect product, purpose, and perception without sounding forced.',
          'Create rhythm across channels so the brand feels consistent and alive.',
          'Turn everyday moments into a clearer, richer brand story.',
        ],
      },
      {
        type: 'paragraph',
        content:
          'When content is built with intention, the brand becomes more legible. People understand not just what a company sells, but what it stands for and how it moves through the world.',
      },
    ],
  },
  '5': {
    date: 'Sep 13, 2025',
    title: 'Digital Experiences That Move the Brand Forward',
    subtitle: 'A well-made website is where presence becomes confidence.',
    author: 'The Woolgatherers',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
    heroImageAlt: 'Laptop and design dashboard used to build a digital brand experience',
    body: [
      {
        type: 'paragraph',
        content:
          'A website is not just a transaction layer. It is the place where a brand proves it knows who it is. It is how a company tells its story, shows its standards, and invites the right people in.',
      },
      {
        type: 'paragraph',
        content:
          'At The Woolgatherers, websites are built as digital experiences: thoughtful, elevated, and intentionally paced. The aim is not to impress with complexity. The aim is to make the brand feel complete and credible from the first scroll.',
      },
      {
        type: 'heading',
        content: 'Designed for clarity and momentum',
      },
      {
        type: 'list',
        leadIn: 'A strong digital experience brings together:',
        items: [
          'Clear user journeys that reduce friction and build trust.',
          'Visual systems that feel distinctive and consistent with the brand.',
          'Micro-interactions that create delight without overwhelming the interface.',
          'Narrative flow that turns attention into understanding and action.',
        ],
      },
      {
        type: 'paragraph',
        content:
          'The result is a brand that feels present online with confidence, not just visible. That is what makes a digital experience work in the long run.',
      },
    ],
  },
};

export const blogPostOrder = ['1', '2', '3', '4', '5'];
