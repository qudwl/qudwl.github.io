import {
  Badge,
  Button,
  Card,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react'
import type { Ref } from 'react'
import { PROJECTS } from '@/constants'
import ScrollFade from '../ScrollFade'
import styles from './Projects.module.scss'
import { projects } from './projectList'

const Projects = ({ ref }: { ref?: Ref<HTMLDivElement> }) => {
  return (
    <section id={PROJECTS} ref={ref}>
      <ScrollFade>
        <Container
          size="md"
          py="xl"
          style={{
            minHeight: '70vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Title
            order={2}
            fw={200}
            styles={{
              root: {
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                marginBottom: 'var(--mantine-spacing-xl)',
              },
            }}
          >
            projects
          </Title>
          <SimpleGrid
            cols={{ base: 1, sm: 2, md: 3 }}
            spacing="lg"
            verticalSpacing="lg"
          >
            {projects.map((project) => (
              <Card
                key={project.title}
                shadow="xs"
                padding="lg"
                radius="md"
                withBorder
                className={styles.projectCard}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                }}
              >
                <Stack gap="sm">
                  <Text fw={600} size="xl">
                    {project.title}
                  </Text>

                  <Text size="sm" c="dimmed" style={{ lineHeight: 1.5 }}>
                    {project.description}
                  </Text>

                  <Group gap="xs" wrap="wrap">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="light"
                        color="indigo"
                        size="sm"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </Group>
                </Stack>

                <Group gap="sm" mt="xl">
                  {project.githubUrl && (
                    <Button
                      component="a"
                      href={project.githubUrl}
                      target="_blank"
                      variant="light"
                      color="indigo"
                      leftSection={<IconBrandGithub size={16} />}
                      size="xs"
                      style={{ flex: 1 }}
                    >
                      GitHub
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button
                      component="a"
                      href={project.liveUrl}
                      target="_blank"
                      variant="outline"
                      color="indigo"
                      leftSection={<IconExternalLink size={16} />}
                      size="xs"
                      style={{ flex: 1 }}
                    >
                      Demo
                    </Button>
                  )}
                </Group>
              </Card>
            ))}
          </SimpleGrid>
        </Container>
      </ScrollFade>
    </section>
  )
}

export default Projects
