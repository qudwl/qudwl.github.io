import { forwardRef } from "react";
import { CONTACT } from "@/constants";
import styles from "./Contact.module.scss";
import Line from "./components/Line";


const Contact = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <section ref={ref} id={CONTACT} className={styles.contact}>
            <h2>contact</h2>
            <div>
                <h3>Email</h3>
                <p><a href="mailto:me@qudwl.com">me@qudwl.com</a></p>
            </div>
            <Line />
            <div>
                <h3>Linkedin</h3>
                <p><a href="https://www.linkedin.com/in/qudwl/">https://www.linkedin.com/in/qudwl/</a></p>
            </div>
            <Line />
            <div>
                <h3>Github</h3>
                <p><a href="https://github.com/qudwl">https://github.com/qudwl</a></p>
            </div>
        </section>
    );
});

export default Contact;