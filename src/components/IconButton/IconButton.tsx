import { useId } from 'react';
import styles from './IconButton.module.scss';
import { IconButtonProps } from './type';

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  icon,
  label,
  ariaSelected = false,
  role,
}) => {
  const id = useId();

  const Icon = icon;
  return (
    <button
      className={styles.iconButton}
      onClick={onClick}
      aria-labelledby={id}
      aria-selected={ariaSelected}
      role={role ? role : undefined}
    >
      <Icon className={styles.icon} color={ariaSelected ? 'black' : 'gray'} />
      <span className={styles.label} id={id}>
        {label}
      </span>
    </button>
  );
};

export default IconButton;
