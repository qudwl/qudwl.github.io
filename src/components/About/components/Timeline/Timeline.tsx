import { Text, Timeline } from '@mantine/core'
import { IconBriefcase, IconCode, IconDeviceLaptop } from '@tabler/icons-react'

const AboutTimeline = () => {
  return (
    <Timeline active={2} bulletSize={40} lineWidth={2} mt="xl">
      <Timeline.Item
        bullet={<IconBriefcase size={20} />}
        title="Accessibility Tester"
      >
        <Text c="dimmed" size="sm" mt={4}>
          Focused on ensuring digital products are usable by everyone,
          conducting accessibility audits, and implementing WCAG guidelines.
        </Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconCode size={20} />} title="Frontend Trainee">
        <Text c="dimmed" size="sm" mt={4}>
          Learned and built modern responsive web applications using React,
          TypeScript, and ecosystem tools.
        </Text>
      </Timeline.Item>

      <Timeline.Item
        bullet={<IconDeviceLaptop size={20} />}
        title="Software Engineer"
      >
        <Text c="dimmed" size="sm" mt={4}>
          Currently working at H&M Group, building scale-ready web applications,
          optimizing front-end performance, and writing clean maintainable code.
        </Text>
      </Timeline.Item>
    </Timeline>
  )
}

export default AboutTimeline
