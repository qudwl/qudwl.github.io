import { SegmentedControl, Stack, Title, useMantineColorScheme, MantineColorScheme } from "@mantine/core";

export const Settings = () => {
    const { colorScheme, setColorScheme } = useMantineColorScheme();

    return (
        <Stack m="lg">
            <Title order={2}>Settings</Title>
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
    );
}