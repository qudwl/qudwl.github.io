import { Card, Grid, Image, Title } from "@mantine/core";

const Home = (): React.ReactNode => {
  return (<Grid>
    <Grid.Col span={{ xs: 12, md: 8 }}>
      <Card>
        <Title>Hello there!</Title>
      </Card>
    </Grid.Col>
    <Grid.Col span={{ xs: 12, md: 4 }}>
      <Card>
        <Card.Section>
          <Image src="https://avatars.githubusercontent.com/u/58591591?v=4" />
        </Card.Section>
      </Card>
    </Grid.Col>
  </Grid>);
};

export default Home;
