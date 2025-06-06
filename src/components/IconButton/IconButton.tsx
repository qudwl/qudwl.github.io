import { useId } from 'react';
import styles from './IconButton.module.scss';
import Button from '../Button';
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
    <Button
      className={styles.iconButton}
      onClick={onClick}
      ariaLabelledBy={id}
      ariaSelected={ariaSelected}
      role={role ? role : undefined}
      type="transparent"
    >
      <Icon className={styles.icon} color={ariaSelected ? 'black' : 'gray'} />
      <span className={styles.label} id={id}>
        {label}
      </span>
    </Button>
  );
};

export default IconButton;
