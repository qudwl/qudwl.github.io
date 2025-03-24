import { Group } from '@mantine/core';
import { Logo } from '../Logo';
import { HeaderMenu } from './components/HeaderMenu';
import { HeaderProps } from './types';

const Header: React.FC<HeaderProps> = ({ routes, page, setPage, className }) => {
  return (
    <Group className={className} component="header" justify="space-between" align="center" p="lg">
      <Logo setPage={setPage} />
      <HeaderMenu routes={routes} page={page} setPage={setPage} />
    </Group>
  );
};

export default Header;
