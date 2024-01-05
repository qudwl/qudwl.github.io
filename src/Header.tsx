import Tab from "./Tab";

const Header = () => {
    return <header className='mt-2'>
        <h1 className='bold rem3'>B. Lim</h1>
        <p className='thin rem1-5'>software engineer</p>
        <ul className='flex flex-center flex-gap mt-1' role="tablist">
            <Tab active={true} onClick={() => { }}>Projects</Tab>
            <Tab active={false} onClick={() => { }}>Info</Tab>
            <Tab active={false} onClick={() => { }}>Settings</Tab>
        </ul>
    </header>
}

export default Header;