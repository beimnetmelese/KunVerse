export const universes = [
  {
    id: 'about',
    name: 'Planet About Me',
    color: '#f59e0b', // Amber
    position: [0, 2, -5],
    description: 'A look at who I am, my skills, passion, and the journey.',
    texture: 'images.jpg',
  },
  {
    id: 'frontend',
    name: 'Planet Frontend',
    color: '#3b82f6', // Blue
    position: [-4, -1, -6],
    description: 'Frontend creations with React, Next.js, Tailwind, and animations.',
    texture: 'images.jpg',
  },
  {
    id: 'backend',
    name: 'Planet Backend',
    color: '#10b981', // Green
    position: [4, -1, -6],
    description: 'Robust backend logic with Django, FastAPI, databases, and auth systems.',
    texture: 'images.jpg',
  },
  {
    id: 'bots',
    name: 'Planet Bots',
    color: '#a855f7', // Purple
    position: [-3, 2, -4],
    description: 'Telegram bots, automation, AI integrations — I build them all.',
    texture: 'images.jpg',
  },
  {
    id: 'contact',
    name: 'Planet Contact',
    color: '#ef4444', // Red
    position: [3, 2, -4],
    description: 'Want to collab? Let’s connect — links, email, and socials here.',
    texture: 'images.jpg',
  },
] as const;

export type Universe = (typeof universes)[number];
