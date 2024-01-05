import ProjectCard from "./ProjectCard";
import list from "../project-list.json";

const Projects = () => {
    return (
        <div className="projects">
            {list.map((project, index) => <ProjectCard key={index} project={project} />)}
        </div>
    );
}

export default Projects;