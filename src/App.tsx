import { useState } from 'react';
import { Header } from './components/Header';
import { routes } from './routes';

import './global.scss';

export default function App() {
  const [page, setPage] = useState('Home');

  const Route = routes.find((route) => route.name === page)?.route;

  return (
    <>
      <Header
        className="maxWidth"
        page={page}
        setPage={setPage}
        routes={routes.map((route) => {
          return { name: route.name, icon: route.icon };
        })}
      />
      {Route && <Route className="route" setPage={setPage} />}
    </>
  );
}
