// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { MantineProvider, Stack, Tabs } from '@mantine/core';
import { HeaderBar } from './components/HeaderBar';
import { Projects } from './components/Projects';
import { Settings } from './components/Settings';
import { About } from './components/About';

export default function App() {
  return (
    <MantineProvider>
      <Stack align="center">
        <HeaderBar />
        <Tabs variant='pills' radius="xl" defaultValue="gallery">
          <Tabs.List justify='center'>
            <Tabs.Tab value='gallery'>Projects</Tabs.Tab>
            <Tabs.Tab value="about">About</Tabs.Tab>
            <Tabs.Tab value="resume">Resume</Tabs.Tab>
            <Tabs.Tab value="settings">Settings</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="gallery">
            <Projects />
          </Tabs.Panel>
          <Tabs.Panel value="about">
            <About />
          </Tabs.Panel>
          <Tabs.Panel value="settings">
            <Settings />
          </Tabs.Panel>
        </Tabs>

      </Stack>
    </MantineProvider >
  );
}