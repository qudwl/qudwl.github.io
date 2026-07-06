import { Container, Stack, Text, Title } from '@mantine/core'
import type { Ref } from 'react'
import { HOME } from '@/constants'

const Home = ({ ref }: { ref?: Ref<HTMLDivElement> }) => {
  return (
    <section id={HOME} ref={ref}>
      <Container
        size="sm"
        py="10vh"
        style={{
          minHeight: '70vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Stack align="center" gap="lg">
          <Title
            order={1}
            styles={{
              root: {
                fontSize: 'clamp(4rem, 8vw, 6rem)',
                fontWeight: 200,
                textAlign: 'center',
                lineHeight: 1.1,
                margin: 0,
              },
            }}
          >
            Hello
          </Title>
          <Text
            size="xl"
            styles={{
              root: {
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 400,
                textAlign: 'center',
              },
            }}
          >
            I'm <strong style={{ fontWeight: 900 }}>Byeongji Lim</strong>
          </Text>
          <Text
            size="lg"
            c="dimmed"
            styles={{
              root: {
                fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                textAlign: 'center',
              },
            }}
          >
            a frontend developer / accessibility tester
          </Text>
        </Stack>
      </Container>
    </section>
  )
}

export default Home
