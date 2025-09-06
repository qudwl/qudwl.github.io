import styles from './Skills.module.scss';
import { forwardRef } from 'react';
import { SKILLS } from '@/constants';
import { skills } from './skillslist';
import SkillCard from './components/SkillCard';

const Skills = forwardRef<HTMLDivElement>((_, ref) => {
    return <section id={SKILLS} className={styles.skills} ref={ref}>
        <h2>skills</h2>

        <div className={styles.skillsList}>
            {skills.map(({ name, level, icon: Icon }) => (
                <SkillCard key={name} name={name} level={level} Icon={Icon} />
            ))}
        </div>
    </section>
});

export default Skills;