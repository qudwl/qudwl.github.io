import React from 'react';
import styles from './Card.module.scss';
import classNames from 'classnames';
import { CardProps } from './type';

const Card: React.FC<CardProps> = ({ tag = 'div', className, children, recessed = false }) => {
  const Tag = tag;
  return (
    <Tag className={classNames(styles.card, recessed && styles.recessed, className && className)}>
      {children}
    </Tag>
  );
};

export default Card;
