import styles from "./Home.module.scss";
import { HOME } from "@/constants";

const Home = () => {
    return <section id={HOME} className={styles.home}>
        <h1>Hello</h1>
        <p>I'm <strong>Byeongji Lim</strong></p>
        <p>a frontend developer / accessibility tester</p>
    </section>
}

export default Home;