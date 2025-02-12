import { CardProps } from "./types";

import styles from "./Card.module.scss"

const Card: React.FC<CardProps> = ({ as, children, gridStart, gridEnd }) => {
    const Component = as || "div";

    return <Component className={styles.card} style={{ gridColumnStart: gridStart, gridColumnEnd: gridEnd }}>
        {children}
    </Component>
}

export { Card }