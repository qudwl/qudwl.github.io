import DesktopMenu from "./components/DesktopMenu";
import Logo from "./components/Logo";
import MobileMenu from "./components/MobileMenu";
import styles from "./Header.module.scss";

const Header = () => {
    return <header className={styles.header}>
        <Logo />
        <DesktopMenu />
        <MobileMenu />
    </header>;
}

export default Header;