import { RouteLabel } from '@/types';

export interface HeaderMenuProps {
  routes: RouteLabel[];
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}
