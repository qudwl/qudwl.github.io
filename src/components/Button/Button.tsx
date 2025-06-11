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
  onKeyDown,
  role = 'button',
  type = 'default',
  ref,
  tabIndex,
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
      ref={ref ? ref : undefined}
      tabIndex={tabIndex ? tabIndex : undefined}
      onKeyDown={onKeyDown ? onKeyDown : undefined}
    >
      {children}
    </button>
  );
};

export default Button;
