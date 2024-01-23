import { Grid } from "@mantine/core"
import projects from "../project-list.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
    return <Grid grow m="lg">
        {
            projects.map((project) => {
                return <Grid.Col key={project.name} span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                    <ProjectCard name={project.name} url={project.url} isWebApp={project.isWebApp} repository={project.repository} />
                </Grid.Col>
            })
        }
    </Grid>
}