import { IconAppWindow, IconHome, IconSettings, IconUserCircle } from '@tabler/icons-react';
import { Route } from '../types';
import { About, Home, Projects, Settings } from './index';

const routes: Route[] = [
  {
    name: 'Home',
    icon: IconHome,
    route: Home,
  },
  {
    name: 'About',
    icon: IconUserCircle,
    route: About,
  },
  {
    name: 'Projects',
    icon: IconAppWindow,
    route: Projects,
  },
  {
    name: 'Settings',
    icon: IconSettings,
    route: Settings,
  },
];

export { routes };
