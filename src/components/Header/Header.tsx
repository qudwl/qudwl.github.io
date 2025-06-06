import style from './Header.module.scss';
import Card from '@/components/Card';
import ContactMe from '../ContactMe';
import { Logo } from '../Logo';
import { HeaderMenu } from './components/HeaderMenu';
import { HeaderProps } from './types';

const Header: React.FC<HeaderProps> = ({ routes, page, setPage, className }) => {
  return (
    <Card tag="header" className={style.header}>
      <HeaderMenu routes={routes} page={page} setPage={setPage} />
      <ContactMe />
    </Card>
  );
};

export default Header;
