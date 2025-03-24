import { PageProps } from './pages';

export type Route = {
  name: string;
  route: React.FC<PageProps>;
};
