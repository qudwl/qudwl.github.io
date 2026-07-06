import { Container, Text } from '@mantine/core'

const Footer = () => {
  return (
    <footer
      style={{
        width: '100%',
        borderTop: '1px solid var(--mantine-color-default-border)',
        padding: 'var(--mantine-spacing-xl) 0',
        marginTop: 'auto',
      }}
    >
      <Container size="md">
        <Text size="sm" c="dimmed" ta="center">
          © {new Date().getFullYear()} by Byeongji Lim. All rights reserved.
        </Text>
      </Container>
    </footer>
  )
}

export default Footer
