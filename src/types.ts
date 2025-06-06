import { TablerIcon } from '@tabler/icons-react';
import { PageProps } from './pages';

export type Route = { route: React.FC<PageProps> } & RouteLabel;

export type RouteLabel = {
  name: string;
  icon: TablerIcon;
};
