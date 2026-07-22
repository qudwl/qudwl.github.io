import { Container, Grid, Stack, Text, Title } from '@mantine/core'
import type { Ref } from 'react'
import { ABOUT } from '@/constants'
import ScrollFade from '../ScrollFade'
import Timeline from './components/Timeline'

const About = ({ ref }: { ref?: Ref<HTMLDivElement> }) => {
  return (
    <section id={ABOUT} ref={ref}>
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
            about me
          </Title>
          <Grid gap="xl" align="flex-start">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack gap="md">
                <Text size="lg" style={{ lineHeight: 1.6 }}>
                  Hello! My name is Byeongji Lim and I'm a software engineer
                  currently working for the H&M Group.
                </Text>
                <Text size="lg" style={{ lineHeight: 1.6 }}>
                  I graduated from Miami University in 2024, and have worked as
                  an accessibility tester and a frontend developer.
                </Text>
                <Text size="lg" style={{ lineHeight: 1.6 }}>
                  If you're interested in working with me or just want to say
                  hi, feel free to reach out!
                </Text>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Timeline />
            </Grid.Col>
          </Grid>
        </Container>
      </ScrollFade>
    </section>
  )
}

export default About
