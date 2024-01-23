import { Button, Flex, Image, Paper, Title } from "@mantine/core"

type ProjectCardProps = {
    name: string,
    url: string,
    repository: string,
    isWebApp: boolean
}

export const ProjectCard = ({ name, url, repository, isWebApp }: ProjectCardProps) => {
    return (
        <Paper h={200} shadow="sm" p="lg" radius="md" withBorder>
            <Flex h="100%" direction="column" align="center" justify="space-between">
                {/* TODO Image for Repositories */}
                <Image src={isWebApp ? `${url}/logo192.png` : ''} alt={name} h={48} w={48}
                    fit="contain" />
                <Title ta="center" order={2} size="h4">{name}</Title>
                {isWebApp ?
                    <Button.Group>
                        <Button component="a" href={url} title={"for " + name}>Demo</Button>
                        <Button component="a" href={repository} title={"for " + name}>Repository</Button>
                    </Button.Group> : <Button component="a" href={repository} fullWidth>Repository</Button>}
            </Flex>
        </Paper>
    );
}