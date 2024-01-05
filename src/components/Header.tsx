import Tab from "../Tab";

type HeaderPropTypes = {
    activeTab: number,
    setActiveTab: (index: number) => void
}

const Header = ({ activeTab, setActiveTab }: HeaderPropTypes) => {
    return <header className='mt-2'>
        <h1 className='bold rem3'>B. Lim</h1>
        <p className='thin rem1-5'>software engineer</p>
        <ul className='flex flex-justify-center flex-gap mt-1' role="tablist">
            <Tab active={activeTab === 0} onClick={() => setActiveTab(0)}>Projects</Tab>
            <Tab active={activeTab === 1} onClick={() => setActiveTab(1)}>Info</Tab>
            <Tab active={activeTab === 2} onClick={() => setActiveTab(2)}>Settings</Tab>
        </ul>
    </header>
}

export default Header;