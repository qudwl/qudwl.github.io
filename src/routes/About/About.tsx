import {
  IconCertificate,
  IconDeviceImacCode,
  IconFileAnalytics,
  IconSchool,
} from '@tabler/icons-react';
import Page from '@/components/Page';
import { RouteProps } from '../types';

const About: React.FC<RouteProps> = ({ className }) => {
  return (
    <Page className={className}>
      <h1>About Me</h1>

      <div title="Product Development Trainee @ H&M Group">
        <p>
          Joined the H&M Group for a traineeship in frontend, backend, and mobile deveopment with an
          emphasis in accessibility.
        </p>
        <p>August, 2024</p>
      </div>
      <div title="Miami University">
        <p>
          Graduated from Miami University with a bachelors degree in Computer Science with a 3.83
          GPA.
        </p>
        <p>May, 2024</p>
      </div>
      <div title="Trusted Tester">
        <p>Earned the Trusted Tester certification from the Department of Homeland Security.</p>
        <p>August, 2023</p>
      </div>
      <div title="Accessibility Tester">
        <p>
          Worked at Miami University as an Accessibility Tester testing websites, mobile
          applications, desktop applications, and others for issues related to accessibility, and
          provide suggestions.
        </p>
        <p>August, 2023</p>
      </div>
    </Page>
  );
};

export default About;
