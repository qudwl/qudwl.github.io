import styles from "./Timeline.module.scss"

const Timeline = () => {
    return (
        <div className={styles.timeline}>
            <span className={styles.item} style={{ width: "40%", top: "60px" }}>Accessibility Tester</span>
            <span className={styles.item} style={{ width: "20%", top: "130px", left: "45%" }}>Frontend Trainee</span>
            <span className={styles.item} style={{ width: "30%", top: "60px", left: "70%" }}>Software Engineer</span>
        </div>
    )
}

export default Timeline;