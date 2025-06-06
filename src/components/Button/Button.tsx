import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
  ariaSelected,
  className,
  children,
  key,
  onClick,
  role = 'button',
  type = 'default',
}) => {
  return (
    <button
      className={classNames(styles.button, styles[type], className)}
      aria-selected={ariaSelected || undefined}
    >
      {children}
    </button>
  );
};

export default Button;
