import { BlogPostData } from './BlogPost';
import React from 'react';

export const samplePost: BlogPostData = {
  date: 'Jul 12, 2025',
  title: "If You're Going to Maine",
  subtitle: "this weekend or at any point, ever, I guess",
  author: "The Woolgatherers",
  heroImage: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=1600&q=80',
  heroImageAlt: 'Coastal Maine landscape',
  body: [
    {
      type: 'paragraph',
      content:
        "Hello and happy weekend! Don't you just love a little surprise newsletter treat? Someone recently told me Costco's whole raison d'etre for carrying products is \"surprise and delight,\" which, god, if that doesn't resonate with my style of newsletter publishing!",
    },
    {
      type: 'paragraph',
      content:
        "I've been going to Maine annually for almost as long as I've lived in New York (15 years!). I'm lucky enough to have a very close friend who's from there (hi, Sigrid!), who I think is the absolute best tour guide anybody could ask for in both her and her husband (and their excellent group of friends). My list of recommendations is good because they are generous and good.",
    },
    {
      type: 'heading',
      content: 'The Strategy',
    },
    {
      type: 'paragraph',
      content: (
        <span>
          As with all my lists, this list is built by a solid combination of others lists/recommendations (private texts, public Googles, etc.) and dumb luck/enthusiasm for exploration. While having a list to start from can be helpful, <em>nothing beats asking a local their favorite place for XYZ</em>, nothing beats giving yourself the freedom to ignore a list, nothing beats stumbling into a place you've never heard of and finding out for yourself if you like it or not. You should use this as a guide for additional independent exploration, not a punch list.
        </span>
      ),
    },
    {
      type: 'list',
      leadIn: "Okay, here's the list:",
      items: [
        "Eventide Oyster Co. - You must get the brown butter lobster roll.",
        "The Honey Paw - Incredible noodles right next door.",
        "Bite Into Maine - Best food truck view.",
      ],
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1779896412192-cca060dfafde?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Lobster roll',
      caption: 'A truly transcendent lobster roll experience.',
    },
    {
      type: 'paragraph',
      content:
        'If you make it to any of these spots, please let me know what you ordered and if you loved it as much as I did.',
    },
  ],
};
