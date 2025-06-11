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
      <section>
        <h2>Product Development Trainee @ H&M Group</h2>
        <p>August, 2024</p>
        <p>
          Joined the H&M Group for a traineeship in frontend, backend, and mobile deveopment with an
          emphasis in accessibility.
        </p>
      </section>
      <section>
        <h2>Miami University</h2>
        <p>May, 2024</p>
        <p>
          Graduated from Miami University with a bachelors degree in Computer Science with a 3.83
          GPA.
        </p>
      </section>
      <section>
        <h2>Trusted Tester</h2>
        <p>August, 2023</p>
        <p>Earned the Trusted Tester certification from the Department of Homeland Security.</p>
      </section>
      <section>
        <h2>Accessibility Tester</h2>
        <p>August, 2023</p>
        <p>
          Worked at Miami University as an Accessibility Tester testing websites, mobile
          applications, desktop applications, and others for issues related to accessibility, and
          provide suggestions.
        </p>
      </section>
    </Page>
  );
};

export default About;
