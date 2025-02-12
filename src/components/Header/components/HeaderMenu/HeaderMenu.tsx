import styles from './HeaderMenu.module.scss'

const HeaderMenu = () => {

    const items = [
        { label: 'Home', selected: true },
        { label: 'Projects', selected: false },
        { label: 'About', selected: false },
        { label: 'Settings', selected: false },
    ]

    return <nav role="tablist">
        {items.map((item, index) => <button className={styles.tab} key={index} aria-selected={item.selected} role="tab">{item.label}</button>)}
    </nav>
}

export { HeaderMenu }