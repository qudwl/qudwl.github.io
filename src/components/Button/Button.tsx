import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
  ariaSelected,
  ariaLabelledBy,
  className,
  children,
  key,
  onClick,
  role = 'button',
  type = 'default',
}) => {
  console.log(type);
  return (
    <button
      className={classNames(styles.button, styles[type], className)}
      aria-selected={ariaSelected || undefined}
      aria-labelledby={ariaLabelledBy || undefined}
      onClick={onClick}
      key={key}
      role={role}
    >
      {children}
    </button>
  );
};

export default Button;
