export const universes2 = [
  {
    id: 'react',
    name: 'React Galaxy',
    icon: '⚛️',
    color: '#61dafb',
    position: [0, 0, -5],
    description: 'Frontend projects with React ecosystem',
    projects: [
      {
        title: 'This Portfolio',
        description: 'Interactive 3D developer showcase',
        stack: ['Next.js', 'Three.js', 'Tailwind CSS']
      }
    ]
  },
  {
    id: 'ai',
    name: 'AI Nebula',
    icon: '🤖',
    color: '#ff4d4d',
    position: [-3, 2, -7],
    description: 'Machine learning implementations',
    projects: []
  },
  // Add more universes...
] as const;

export type Universe = typeof universes2[number];