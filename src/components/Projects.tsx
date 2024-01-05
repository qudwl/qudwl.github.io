import Project from "../classes/Project";
import ProjectCard from "./ProjectCard"

const list = new Array<Project>();

list.push(new Project("Project 1", "This is a description of project 1", "https://www.google.com", ["In Progrss"], ""));

const Projects = () => {
    return <div className="projects">
        <ProjectCard project={list[0]} />
        {/* <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard /> */}
    </div>
}

export default Projects;