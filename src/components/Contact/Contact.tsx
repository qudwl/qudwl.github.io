import { forwardRef } from "react";
import { CONTACT } from "@/constants";
import styles from "./Contact.module.scss";


const Contact = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <section ref={ref} id={CONTACT} className={styles.contact}>
            <h2>Contact</h2>
            <p>Contact section will be added soon!</p>
        </section>
    );
});

export default Contact;