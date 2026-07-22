import { Container, SimpleGrid, Title } from '@mantine/core'
import type { Ref } from 'react'
import { SKILLS } from '@/constants'
import ScrollFade from '../ScrollFade'
import SkillCard from './components/SkillCard'
import { skills } from './skillslist'

const Skills = ({ ref }: { ref?: Ref<HTMLDivElement> }) => {
  return (
    <section id={SKILLS} ref={ref}>
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
            skills
          </Title>
          <SimpleGrid
            cols={{ base: 2, sm: 3, md: 4 }}
            spacing="lg"
            verticalSpacing="lg"
          >
            {skills.map(({ name, level, icon: Icon }) => (
              <SkillCard key={name} name={name} level={level} Icon={Icon} />
            ))}
          </SimpleGrid>
        </Container>
      </ScrollFade>
    </section>
  )
}

export default Skills
