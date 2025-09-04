import styles from "./About.module.scss";
import { ABOUT } from "@/constants";
import Timeline from "./components/Timeline";
import { forwardRef } from "react";

const About = forwardRef<HTMLDivElement>((_, ref) => {
    return <section className={styles.about} id={ABOUT} ref={ref}>
        <h2>about me</h2>
        <div>
            <p>Hello! My name is Byeongji Lim and I'm a software engineer currently working for the H&M Group.</p>
            <p>I graduated from Miami University in 2024, and have worked as an accessibility tester and a frontend developer.</p>
            <p>If you're interested in working with me or just want to say hi, feel free to reach out!</p>
        </div>
        <Timeline />
    </section>
});

export default About;