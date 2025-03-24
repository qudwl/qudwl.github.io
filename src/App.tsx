import '@mantine/core/styles.css';

import { useState } from 'react';
import { MantineProvider } from '@mantine/core';
import { Header } from './components/Header';
import { routes } from './routes';
import { theme } from './theme';

import './global.css';

export default function App() {
  const [page, setPage] = useState('Home');

  const Route = routes.find((route) => route.name === page)?.route;

  return (
    <MantineProvider theme={theme}>
      <Header
        className="maxWidth"
        page={page}
        setPage={setPage}
        routes={routes.map((route) => route.name)}
      />
      {Route && <Route className="maxWidth" setPage={setPage} />}
    </MantineProvider>
  );
}
