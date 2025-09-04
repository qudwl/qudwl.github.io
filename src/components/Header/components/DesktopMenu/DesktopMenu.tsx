import styles from "./DesktopMenu.module.scss";
import { HOME, ABOUT, SKILLS, PROJECTS, CONTACT } from "@/constants";
import cn from "classnames";

const DesktopMenu = () => {
    return <nav className={styles.desktopMenu}>
        <ul>
            <li>
                <MenuLink active name="Home" href={HOME} />
            </li>
            <li>
                <MenuLink active={false} name="About" href={ABOUT} />
            </li>
            <li>
                <MenuLink active={false} name="Skills" href={SKILLS} />
            </li>
            <li>
                <MenuLink active={false} name="Projects" href={PROJECTS} />
            </li>
            <li>
                <MenuLink active={false} name="Contact" href={CONTACT} />
            </li>
        </ul>
    </nav>;
}

const MenuLink = ({ name, href, active }: { name: string, href: string, active: boolean }) => {
    return <a className={cn(styles.menuLink, active && styles.active)} href={`#${href}`}>{name}</a>;
}

export default DesktopMenu;