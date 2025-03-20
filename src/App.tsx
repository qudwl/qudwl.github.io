import '@mantine/core/styles.css';

import { useState } from 'react';
import { MantineProvider } from '@mantine/core';
import { Header } from './components/Header';
import { About, Home, Projects, Settings } from './pages';
import { theme } from './theme';

export default function App() {
  const [page, setPage] = useState("Home");

  const routes = [
    {
      name: 'Home',
      route: Home,
    },
    {
      name: 'About',
      route: About,
    },
    {
      name: 'Projects',
      route: Projects,
    },
    {
      name: 'Settings',
      route: Settings,
    },
  ];

  const pageElement = routes.find(route => route.name === page)?.route;

  return (
    <MantineProvider theme={theme}>
      <Header page={page} setPage={setPage} routes={routes.map((route) => route.name)} />
      {pageElement}
    </MantineProvider>
  );
}
