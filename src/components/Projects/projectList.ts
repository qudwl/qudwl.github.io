export interface Project {
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    title: 'A11y Helper',
    description:
      'A browser extension designed to audit web pages for accessibility issues, highlighting contrast problems, missing alt text, and keyboard navigation gaps in real time.',
    technologies: ['React', 'TypeScript', 'Web Extensions API', 'Sass'],
    githubUrl: 'https://github.com/qudwl/a11y-helper',
  },
  {
    title: 'EcoShop',
    description:
      'A fast, fully accessible e-commerce storefront prototype built to meet strict WCAG 2.1 AA requirements, featuring screen-reader friendly filter controls and semantic markup.',
    technologies: ['Next.js', 'React', 'Sass Modules', 'Aria-Live'],
    githubUrl: 'https://github.com/qudwl/ecoshop',
    liveUrl: 'https://ecoshop-demo.example.com',
  },
  {
    title: 'qudwl.github.io',
    description:
      'This personal portfolio site showcasing skills, background timeline, and recent projects. Fully responsive and converted to use Mantine components for standard visual excellence.',
    technologies: ['React', 'TypeScript', 'Vite', 'Mantine', 'Sass'],
    githubUrl: 'https://github.com/qudwl/qudwl.github.io',
    liveUrl: 'https://qudwl.github.io',
  },
]
