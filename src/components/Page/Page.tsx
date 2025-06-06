import styles from './Page.module.scss';
import classNames from 'classnames';
import Card from '../Card';
import { PageProps } from './types';

const Page: React.FC<PageProps> = ({ children, className }) => {
  return (
    <Card tag="main" className={classNames(styles.page, className)}>
      {children}
    </Card>
  );
};

export default Page;
