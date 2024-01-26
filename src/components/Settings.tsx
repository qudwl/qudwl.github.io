import { SegmentedControl, Stack, useMantineColorScheme, MantineColorScheme, Container } from "@mantine/core";

export const Settings = () => {
    const { colorScheme, setColorScheme } = useMantineColorScheme();

    return (
        <Container size="sm">
            <Stack m="lg">
                <SegmentedControl radius="xl" data={[{
                    label: 'Dark',
                    value: 'dark',
                }, {
                    label: 'Light',
                    value: 'light',
                }, {
                    label: 'System',
                    value: 'auto',
                }]} value={colorScheme} onChange={(val) => {
                    setColorScheme(val as MantineColorScheme);
                }} />
            </Stack>
        </Container>
    );
}