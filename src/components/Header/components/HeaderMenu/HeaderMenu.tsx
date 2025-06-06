import styles from './HeaderMenu.module.scss';
import { IconCheck, IconMenu2 } from '@tabler/icons-react';
import { ActionIcon, Button, Group, Menu } from '@mantine/core';
import IconButton from '@/components/IconButton';
import { HeaderMenuProps } from './type';

const HeaderMenu: React.FC<HeaderMenuProps> = ({ routes, page, setPage }) => {
  return (
    <nav className={styles.headerMenu} role="tablist">
      {routes.map(({ name, icon }, index) => {
        return (
          <IconButton
            key={index}
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
