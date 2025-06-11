import { useEffect, useRef } from 'react';
import styles from './HeaderMenu.module.scss';
import IconButton from '@/components/IconButton';
import { HeaderMenuProps } from './type';

const HeaderMenu: React.FC<HeaderMenuProps> = ({ routes, page, setPage }) => {
  const iconButtonsRef = useRef<(HTMLButtonElement | null)[]>([]);
  useEffect(() => {
    iconButtonsRef.current = iconButtonsRef.current.slice(0, routes.length);
  }, [routes]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>, currentIndex: number) => {
    let nextIndex = currentIndex;
    if (event.key === 'ArrowRight') {
      nextIndex = (currentIndex + 1) % routes.length;
    } else if (event.key === 'ArrowLeft') {
      nextIndex = (currentIndex - 1 + routes.length) % routes.length;
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault(); // Prevent page scroll on Space
      setPage(routes[currentIndex].name);
      return; // No focus change needed, already on the item to be activated
    } else {
      return; // Ignore other keys
    }

    const nextButton = iconButtonsRef.current[nextIndex];
    if (nextButton) {
      nextButton.focus();
    }
  };

  return (
    <nav className={styles.headerMenu} role="tablist">
      {routes.map(({ name, icon }, index) => {
        return (
          <IconButton
            key={name}
            ariaSelected={name === page}
            tabIndex={name === page ? 0 : -1}
            onClick={() => setPage(name)}
            label={name}
            icon={icon}
            role="tab"
            ref={(el) => (iconButtonsRef.current[index] = el)}
            onKeyDown={(event) => handleKeyDown(event, index)}
          />
        );
      })}
    </nav>
  );
};

export default HeaderMenu;
