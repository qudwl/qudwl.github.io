// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { MantineProvider, Stack } from '@mantine/core';
import { HeaderBar } from './components/HeaderBar';
import { Projects } from './components/Projects';

export default function App() {
  return (
    <MantineProvider>
      <Stack align="center">
        <HeaderBar />
        <Projects />
      </Stack>
    </MantineProvider >
  );
}