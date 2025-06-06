import Card from '@/components/Card';
import SimpleGrid from '@/components/SimpleGrid';
import { TechIcon } from '@/components/TechIcon';
import { Technologies } from '@/routes/types';
import { ProjectCardProps } from './types';

const ProjectCard: React.FC<ProjectCardProps> = ({ title, url, description, tech }) => {
  const technologies = tech.map((item: Technologies) => <TechIcon tech={item} />);
  return (
    <Card recessed>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <SimpleGrid columns={12}>{technologies}</SimpleGrid>
      </div>
    </Card>
  );
};

export default ProjectCard;
