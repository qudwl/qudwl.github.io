import { Card, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { TechIcon } from '@/components/TechIcon';
import { Technologies } from '@/pages/types';
import { ProjectCardProps } from './types';

const ProjectCard: React.FC<ProjectCardProps> = ({ title, url, description, tech }) => {
  const technologies = tech.map((item: Technologies) => <TechIcon tech={item} />);
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder component="a" href={url}>
      <Stack gap="md">
        <Title>{title}</Title>
        <Text>{description}</Text>
        <SimpleGrid cols={12}>{technologies}</SimpleGrid>
      </Stack>
    </Card>
  );
};

export default ProjectCard;
