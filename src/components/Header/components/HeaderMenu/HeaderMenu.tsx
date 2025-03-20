import { IconCheck, IconMenu2 } from '@tabler/icons-react';
import { ActionIcon, Button, Group, Menu } from '@mantine/core';
import { HeaderMenuProps } from './type';
import styles from './styles.module.css';

const HorizontalMenu: React.FC<HeaderMenuProps> = ({ routes, page, setPage }) => {
  return (
    <Group component="nav" align="center" visibleFrom="md" role="tablist">
      {routes.map((route, index) => {
        return (
          <Button
            variant="transparent"
            size={route === page ? 'lg' : 'md'}
            color="black"
            key={index}
            aria-selected={route === page}
            onClick={() => setPage(route)}
            radius="0"
            classNames={{
              root: styles.headerMenuBtn,
            }}
          >
            {route}
          </Button>
        );
      })}
    </Group>
  );
};

const VerticalMenu: React.FC<HeaderMenuProps> = ({ routes, page, setPage }) => {
  return (
    <Menu hiddenFrom="md" menuItemTabIndex={0}>
      <Menu.Target>
        <ActionIcon size="xl" variant="transparent" color="black">
          <IconMenu2 />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        {routes.map((route, index) => {
          return (
            <Menu.Item
              rightSection={route === page && <IconCheck />}
              onClick={() => setPage(route)}
              aria-selected={route === page}
              key={index}
            >
              {route}
            </Menu.Item>
          );
        })}
      </Menu.Dropdown>
    </Menu>
  );
};

const HeaderMenu: React.FC<HeaderMenuProps> = ({ routes, page, setPage }) => {
  return (
    <>
      <HorizontalMenu routes={routes} page={page} setPage={setPage} />
      <VerticalMenu routes={routes} page={page} setPage={setPage} />
    </>
  );
};

export default HeaderMenu;
