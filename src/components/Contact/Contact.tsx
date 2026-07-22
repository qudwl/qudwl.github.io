import {
  Anchor,
  Container,
  Divider,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from '@tabler/icons-react'
import type { Ref } from 'react'
import { CONTACT } from '@/constants'
import ScrollFade from '../ScrollFade'

const Contact = ({ ref }: { ref?: Ref<HTMLDivElement> }) => {
  return (
    <section id={CONTACT} ref={ref}>
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
            contact
          </Title>
          <Stack gap="lg" style={{ maxWidth: '600px' }}>
            <Group gap="md" align="flex-start" wrap="nowrap">
              <IconMail
                size={24}
                style={{
                  marginTop: '4px',
                  color: 'var(--mantine-color-indigo-solid)',
                }}
              />
              <div>
                <Text fw={600} size="lg">
                  Email
                </Text>
                <Anchor href="mailto:me@qudwl.com" size="md">
                  me@qudwl.com
                </Anchor>
              </div>
            </Group>

            <Divider opacity={0.15} />

            <Group gap="md" align="flex-start" wrap="nowrap">
              <IconBrandLinkedin
                size={24}
                style={{
                  marginTop: '4px',
                  color: 'var(--mantine-color-indigo-solid)',
                }}
              />
              <div>
                <Text fw={600} size="lg">
                  LinkedIn
                </Text>
                <Anchor
                  href="https://www.linkedin.com/in/qudwl/"
                  target="_blank"
                  size="md"
                >
                  https://www.linkedin.com/in/qudwl/
                </Anchor>
              </div>
            </Group>

            <Divider opacity={0.15} />

            <Group gap="md" align="flex-start" wrap="nowrap">
              <IconBrandGithub
                size={24}
                style={{
                  marginTop: '4px',
                  color: 'var(--mantine-color-indigo-solid)',
                }}
              />
              <div>
                <Text fw={600} size="lg">
                  GitHub
                </Text>
                <Anchor
                  href="https://github.com/qudwl"
                  target="_blank"
                  size="md"
                >
                  https://github.com/qudwl
                </Anchor>
              </div>
            </Group>
          </Stack>
        </Container>
      </ScrollFade>
    </section>
  )
}

export default Contact
