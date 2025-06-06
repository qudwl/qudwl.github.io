import { Stack, Text, Title } from '@mantine/core';
import Card from '@/components/Card';
import SimpleGrid from '@/components/SimpleGrid';
import { TechIcon } from '@/components/TechIcon';
import { Technologies } from '@/pages/types';
import { ProjectCardProps } from './types';

const ProjectCard: React.FC<ProjectCardProps> = ({ title, url, description, tech }) => {
  const technologies = tech.map((item: Technologies) => <TechIcon tech={item} />);
  return (
    <Card recessed>
      <Stack gap="md">
        <Title>{title}</Title>
        <Text>{description}</Text>
        <SimpleGrid columns={12}>{technologies}</SimpleGrid>
      </Stack>
    </Card>
  );
};

export default ProjectCard;
