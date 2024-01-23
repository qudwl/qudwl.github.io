import { Title, Text, Stack } from "@mantine/core"

export const HeaderBar = () => {
    return (
        <Stack m="lg">
            <Stack gap="xs" align="center">
                <Title order={1} >Byeongji Lim</Title>
                <Text>software engineer</Text>
            </Stack>
        </Stack>
    );
}