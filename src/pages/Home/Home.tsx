import Page from '@/components/Page';
import { PageProps } from '../types';

const Home: React.FC<PageProps> = ({ className, setPage }): React.ReactNode => {
  return (
    <Page className={className}>
      <h1>Hello there!</h1>
      <p>
        My name is <b>Byeongji Lim</b>
      </p>
      <p>a fullstack developer / accessibility advocate</p>
      <img src="https://avatars.githubusercontent.com/u/58591591?v=4" alt="Byeongji Lim" />
    </Page>
  );
};

export default Home;
