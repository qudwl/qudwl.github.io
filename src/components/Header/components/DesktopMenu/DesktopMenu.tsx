import styles from "./DesktopMenu.module.scss";
import { HOME, ABOUT, SKILLS, PROJECTS, CONTACT } from "@/constants";
import cn from "classnames";

const DesktopMenu = ({ active }: { active: number }) => {
    const items = [
        { name: "Home", href: HOME },
        { name: "About", href: ABOUT },
        { name: "Skills", href: SKILLS },
        { name: "Projects", href: PROJECTS },
        { name: "Contact", href: CONTACT },
    ]

    return (
        <nav className={styles.desktopMenu}>
            <ul>
                {items.map((item, i) => (
                    <li key={item.href}>
                        <MenuLink name={item.name} href={item.href} active={i === active} />
                    </li>
                ))}
            </ul>
        </nav>
    );
}

const MenuLink = ({ name, href, active }: { name: string, href: string, active: boolean }) => {
    return <a className={cn(styles.menuLink, active && styles.active)} href={`#${href}`}>{name}</a>;
}

export default DesktopMenu;