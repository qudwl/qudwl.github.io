import Project from "../classes/Project";
const ProjectCard = ({ project }: { project: Project }) => {
    return <div className='projectCard'>
        <h2>{project.name}</h2>
        <ul>
            {project.tags.map((tag, index) => {
                return <li key={index}>{tag}</li>
            })}
        </ul>
    </div>
};

export default ProjectCard;
