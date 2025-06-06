import Page from '@/components/Page';
import SimpleGrid from '@/components/SimpleGrid';
import { RouteProps, Technologies } from '../types';
import { ProjectCard, ProjectCardProps } from './components/ProjectCard';

const projects: ProjectCardProps[] = [
  {
    title: 'Tic Tac Toe',
    url: 'https://qudwl.github.io/tic-tac-toe/',
    description: 'A simple tic tac toe game with a generic algorithm used.',
    tech: [Technologies.JS, Technologies.HTML],
  },
];

const Projects: React.FC<RouteProps> = ({ className }) => {
  const items = projects.map((item) => (
    <ProjectCard
      title={item.title}
      url={item.url}
      description={item.description}
      tech={item.tech}
    />
  ));

  return (
    <Page className={className}>
      <h1>Projects</h1>
      <SimpleGrid columns={3}>{items}</SimpleGrid>
    </Page>
  );
};

export default Projects;
