import { SimpleGrid, Stack, Title } from '@mantine/core';
import { PageProps, Technologies } from '../types';
import { ProjectCard, ProjectCardProps } from './components/ProjectCard';

const projects: ProjectCardProps[] = [
  {
    title: 'Tic Tac Toe',
    url: 'https://qudwl.github.io/tic-tac-toe/',
    description: 'A simple tic tac toe game with a generic algorithm used.',
    tech: [Technologies.JS, Technologies.HTML],
  },
];

const Projects: React.FC<PageProps> = ({ className }) => {
  const items = projects.map((item) => (
    <ProjectCard
      title={item.title}
      url={item.url}
      description={item.description}
      tech={item.tech}
    />
  ));

  return (
    <Stack className={className} p="xs" pt="lg" gap="lg">
      <Title order={1}>Projects</Title>
      <SimpleGrid cols={3}>{items}</SimpleGrid>
    </Stack>
  );
};

export default Projects;
