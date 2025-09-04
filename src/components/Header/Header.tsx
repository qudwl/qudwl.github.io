import DesktopMenu from "./components/DesktopMenu";
import Logo from "./components/Logo";
import MobileMenu from "./components/MobileMenu";
import styles from "./Header.module.scss";

const Header = ({ active }: { active: number }) => {
    return <header className={styles.header}>
        <Logo />
        <DesktopMenu active={active} />
        <MobileMenu />
    </header>;
}

export default Header;