import Card from "@/components/Card"

import styles from "./Home.module.scss"

const Home = () => {
    return <main className={styles.main}>
        <Card gridStart={1} gridEnd={3}>Hello there!</Card>
        <Card gridStart={3}>Picture</Card>
        <Card gridStart={1}>About</Card>
        <Card gridStart={2} gridEnd={-1}>Projects</Card>
    </main>
}

export { Home }