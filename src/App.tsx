import '@mantine/core/styles.css';

import { useState } from 'react';
import { AppShell, MantineProvider } from '@mantine/core';
import { Header } from './components/Header';
import { routes } from './routes';
import { theme } from './theme';

export default function App() {
  const [page, setPage] = useState(routes[0].name);

  return (
    <MantineProvider theme={theme}>
      <Header page={page} setPage={setPage} routes={routes.map((route) => route.name)}></Header>
    </MantineProvider>
  );
}
