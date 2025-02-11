import Image from "next/image"
import styles from "./Header.module.scss"
import { HeaderMenu } from "./components/HeaderMenu"

const Header = () => {
    return <header className={styles.header}>
        <Image src="/logo.svg" alt="" width={51} height={58} />
        <HeaderMenu />
    </header>
}

export { Header }