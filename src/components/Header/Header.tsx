import { Burger, Drawer, Stack } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import cn from 'classnames'
import { ABOUT, CONTACT, HOME, PROJECTS, SKILLS } from '@/constants'
import Logo from './components/Logo'
import styles from './Header.module.scss'

const Header = ({ active }: { active: number }) => {
  const [opened, { toggle, close }] = useDisclosure(false)

  const items = [
    { name: 'Home', href: HOME },
    { name: 'About', href: ABOUT },
    { name: 'Skills', href: SKILLS },
    { name: 'Projects', href: PROJECTS },
    { name: 'Contact', href: CONTACT },
  ]

  return (
    <>
      <header className={styles.header}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            color: 'var(--mantine-color-text)',
          }}
        >
          <Logo />
        </div>

        {/* Desktop Menu */}
        <nav className={styles.desktopMenu}>
          {items.map((item, i) => (
            <a
              key={item.href}
              className={cn(styles.menuLink, i === active && styles.active)}
              href={`#${item.href}`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Burger */}
        <Burger
          opened={opened}
          onClick={toggle}
          className={styles.burger}
          size="sm"
          aria-label="Toggle navigation"
        />
      </header>

      {/* Mobile Menu Drawer */}
      <Drawer
        opened={opened}
        onClose={close}
        title="Navigation"
        padding="md"
        size="xs"
        position="right"
      >
        <Stack gap="sm" mt="md">
          {items.map((item, i) => (
            <a
              key={item.href}
              className={cn(styles.drawerLink, i === active && styles.active)}
              href={`#${item.href}`}
              onClick={close}
            >
              {item.name}
            </a>
          ))}
        </Stack>
      </Drawer>
    </>
  )
}

export default Header
