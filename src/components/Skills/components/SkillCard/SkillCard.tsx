import type { SkillCardProps } from "./types";
import styles from "./SkillCard.module.scss";

const SkillCard: React.FC<SkillCardProps> = ({ name, level, Icon }) => {
    const levels = ["Beginner", "Intermediate", "Advanced"];

    return (
        <div className={styles.skillCard}>
            <Icon size={"2em"} title={`${name} icon`} />
            <div>
                <h3>{name}</h3>
                <p>{levels[level]}</p>
            </div>
        </div>
    );
}

export default SkillCard;