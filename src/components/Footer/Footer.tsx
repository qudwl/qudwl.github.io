import styles from "./Footer.module.scss"
import { forwardRef } from "react";

const Footer = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <footer ref={ref} className={styles.footer}>
            <p>updated 2025 by Byeongji Lim.</p>
        </footer>
    );
});

export default Footer;