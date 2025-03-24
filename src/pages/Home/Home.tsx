import { Card, Grid, Image, Text, Title } from '@mantine/core';
import { PageProps } from '../types';

const Home: React.FC<PageProps> = ({ className }): React.ReactNode => {
  return (
    <Grid component="main" className={className} p="xs" align="stretch">
      <Grid.Col span={{ xxs: 12, xs: 8 }}>
        <Card
          style={{ height: '100%', justifyContent: 'center' }}
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
        >
          <Title>Hello there!</Title>
          <Text>My name is Byeongji Lim</Text>
          <Text>a fullstack developer / accessibility advocate</Text>
        </Card>
      </Grid.Col>
      <Grid.Col span={{ xxs: 12, xs: 4 }}>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <Image src="https://avatars.githubusercontent.com/u/58591591?v=4" />
          </Card.Section>
        </Card>
      </Grid.Col>
    </Grid>
  );
};

export default Home;
