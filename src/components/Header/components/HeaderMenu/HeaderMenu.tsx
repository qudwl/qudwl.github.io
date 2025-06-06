import styles from './HeaderMenu.module.scss';
import IconButton from '@/components/IconButton';
import { HeaderMenuProps } from './type';

const HeaderMenu: React.FC<HeaderMenuProps> = ({ routes, page, setPage }) => {
  return (
    <nav className={styles.headerMenu} role="tablist">
      {routes.map(({ name, icon }) => {
        return (
          <IconButton
            key={name}
            ariaSelected={name === page}
            onClick={() => setPage(name)}
            label={name}
            icon={icon}
            role="tab"
          />
        );
      })}
    </nav>
  );
};

export default HeaderMenu;
