import Project from "../classes/Project";

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <a href={project.url} target="_blank" rel="noreferrer" className='projectCard'>
            <div className="h100p">
                <div className={"ball " + (project.status ? "success" : "in-progress")} />
                <div className="flex flex-column flex-justify-space-around h100p">
                    <div className="flex flex-justify-center">
                        <img width="50px" src={`${project.url}/logo192.png`} alt="" />
                    </div>
                    <h2>{project.name}</h2>
                </div>
            </div>
        </a>
    );
};

export default ProjectCard;
