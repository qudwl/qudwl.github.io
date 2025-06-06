import style from './Header.module.scss';
import { Group } from '@mantine/core';
import Card from '@/components/Card';
import { Logo } from '../Logo';
import { HeaderMenu } from './components/HeaderMenu';
import { HeaderProps } from './types';

const Header: React.FC<HeaderProps> = ({ routes, page, setPage, className }) => {
  return (
    <Card tag="header" className={style.header}>
      <Logo setPage={setPage} />
      <HeaderMenu routes={routes} page={page} setPage={setPage} />
    </Card>
  );
};

export default Header;
