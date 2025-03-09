"use client";

import Link from 'next/link'
import styles from './HeaderMenu.module.scss'
import { usePathname } from "next/navigation";

const HeaderMenu = () => {

    const items = [
        { label: 'Home', link: '/' },
        { label: 'Projects',  link: '/projects' },
        { label: 'About',  link: '/about' },
        { label: 'Settings', link: '/settings' },
    ]

    const path = usePathname();

    return <nav role="tablist">
        {items.map((item, index) => <Link href={item.link} className={styles.tab} key={index} aria-current={path === item.link} role="tab">{item.label}</Link>)}
    </nav>
}

export { HeaderMenu }