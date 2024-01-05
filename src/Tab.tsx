type TabPropTypes = {
    active: boolean,
    children: React.ReactNode,
    onClick: () => void
}

const Tab = ({ active, children, onClick }: TabPropTypes) => {
    return (
        <li className={active ? "active-li" : ""}>
            <button role="tab" className={active ? 'active-btn' : ""} onClick={onClick} aria-selected={active}>{children}</button>
        </li>
    );
}

export default Tab;