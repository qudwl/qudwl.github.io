import { Stack, Timeline, Title, Text } from "@mantine/core";
import { PageProps } from "../types";
import { IconCertificate, IconDeviceImacCode, IconFileAnalytics, IconSchool } from "@tabler/icons-react";

const About: React.FC<PageProps> = ({ className }) => {

  const bulletSize = 28;

  return (
    <Stack className={className} p="xs" pt="lg" gap="lg">
      <Title order={1}>About Me</Title>
      <Timeline bulletSize={bulletSize}>
        <Timeline.Item bullet={<IconDeviceImacCode size={bulletSize} />} title="Product Development Trainee @ H&M Group">
          <Text c="dimmed" size="sm">Joined the H&M Group for a traineeship in frontend, backend, and mobile deveopment with an emphasis in accessibility.</Text>
          <Text size="xs" mt={4}>August, 2024</Text>
        </Timeline.Item>
        <Timeline.Item bullet={<IconSchool size={bulletSize} />} title="Miami University">
          <Text c="dimmed" size="sm">Graduated from Miami University with a bachelors degree in Computer Science with a 3.83 GPA.</Text>
          <Text size="xs" mt={4}>May, 2024</Text>
        </Timeline.Item>
        <Timeline.Item bullet={<IconCertificate size={bulletSize} />} title="Trusted Tester">
          <Text c="dimmed" size="sm">Earned the Trusted Tester certification from the Department of Homeland Security.</Text>
          <Text size="xs" mt={4}>August, 2023</Text>
        </Timeline.Item>
        <Timeline.Item bullet={<IconFileAnalytics size={bulletSize} />} title="Accessibility Tester">
          <Text c="dimmed" size="sm">Worked at Miami University as an Accessibility Tester testing websites, mobile applications, desktop applications, and others for issues related to accessibility, and provide suggestions.</Text>
          <Text size="xs" mt={4}>August, 2023</Text>
        </Timeline.Item>
      </Timeline>
    </Stack>
  );
};

export default About;
