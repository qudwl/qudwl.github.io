import { TablerIcon } from '@tabler/icons-react';
import { RouteProps } from './routes';

export type Route = { route: React.FC<RouteProps> } & RouteLabel;

export type RouteLabel = {
  name: string;
  icon: TablerIcon;
};
