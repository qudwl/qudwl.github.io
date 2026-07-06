export interface Project {
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    title: 'SoberVault',
    description:
      'Your secure, local-first recovery vault. Track streaks, navigate urges, and secure your personal progress with 100% private, client-side encryption.',
    technologies: ['React', 'TypeScript', 'Dexie.js', 'Web Crypto API', 'PWA'],
    githubUrl: 'https://github.com/qudwl/SoberVault',
    liveUrl: 'https://qudwl.com/SoberVault',
  },
  {
    title: 'qudwl.github.io',
    description:
      'This personal portfolio site showcasing skills, background timeline, and recent projects. Fully responsive and converted to use Mantine components for standard visual excellence.',
    technologies: ['React', 'TypeScript', 'Vite', 'Mantine', 'Sass'],
    githubUrl: 'https://github.com/qudwl/qudwl.github.io',
    liveUrl: 'https://qudwl.com',
  },
  {
    title: 'React Password Generator',
    description:
      'A secure, local-first credential generator and vault. Generate cryptographically secure passwords, track custom metadata, and manage stored credentials locally.',
    technologies: ['React', 'TypeScript', 'Vite', 'Mantine'],
    githubUrl: 'https://github.com/qudwl/react-password-generator',
    liveUrl: 'https://qudwl.com/react-password-generator/',
  },
]
