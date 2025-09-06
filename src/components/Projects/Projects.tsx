import { forwardRef } from "react";
import styles from "./Projects.module.scss"
import { PROJECTS } from "@/constants"

const Projects = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <section ref={ref} id={PROJECTS} className={styles.projects}>
            <h2>projects</h2>
            <p>Projects will be added soon!</p>
        </section>
    );
});

export default Projects;