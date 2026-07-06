import { Paper, Stack, Text } from '@mantine/core'
import React from 'react'
import styles from './SkillCard.module.scss'
import type { SkillCardProps } from './types'

const SkillCard: React.FC<SkillCardProps> = ({ name, level, Icon }) => {
  const levels = ['Beginner', 'Intermediate', 'Advanced']

  return (
    <Paper
      withBorder
      shadow="xs"
      p="lg"
      radius="md"
      className={styles.skillCard}
    >
      <Stack align="center" gap="xs">
        <div className={styles.iconContainer}>
          <Icon size="2.5rem" title={`${name} icon`} />
        </div>
        <Text fw={600} size="lg" mt="xs">
          {name}
        </Text>
        <Text size="sm" c="dimmed">
          {levels[level]}
        </Text>
      </Stack>
    </Paper>
  )
}

export default SkillCard
