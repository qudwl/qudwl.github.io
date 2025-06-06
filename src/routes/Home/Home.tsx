import styles from './Home.module.scss';
import classNames from 'classnames';
import Page from '@/components/Page';
import { RouteProps } from '../types';

const Home: React.FC<RouteProps> = ({ className, setPage }): React.ReactNode => {
  return (
    <Page className={classNames(styles.home, className)}>
      <div>
        <h1>Hello there!</h1>
        <p>
          My name is <b>Byeongji Lim</b>
        </p>
        <p>a fullstack developer / accessibility advocate</p>
      </div>
      <img
        className={styles.image}
        src="https://avatars.githubusercontent.com/u/58591591?v=4"
        alt="Byeongji Lim"
      />
    </Page>
  );
};

export default Home;
