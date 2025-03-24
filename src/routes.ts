import { About, Home, Projects, Settings } from './pages';
import { Route } from './types';

const routes: Route[] = [
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

export { routes };
