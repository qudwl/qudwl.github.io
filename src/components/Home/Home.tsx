import styles from "./Home.module.scss";
import { HOME } from "@/constants";
import { forwardRef } from "react";

const Home = forwardRef<HTMLDivElement>((_, ref) => {
    return <section id={HOME} className={styles.home} ref={ref}>
        <h1>Hello</h1>
        <p>I'm <strong>Byeongji Lim</strong></p>
        <p>a frontend developer / accessibility tester</p>
    </section>
});

export default Home;