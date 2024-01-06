import React from 'react';
import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Settings from './components/Settings';

function App() {
  const [activeTab, setActiveTab] = React.useState(0);
  const [darkMode, setDarkMode] = React.useState(false);
  const [reduceAnimations, setReduceAnimations] = React.useState(false);

  React.useEffect(() => {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode) {
      setDarkMode(darkMode === "true");
    } else {
      localStorage.setItem("darkMode", "false");
    }
  }, []);

  const changeTab = (index: number) => {
    setActiveTab(index);
    const main = document.getElementById('#main');
    if (main) {
      main.focus();
    }
  }

  const changeDarkMode = (newValue: boolean) => {
    setDarkMode(newValue);
    localStorage.setItem("darkMode", newValue ? "true" : "false");
  }

  return (
    <>
      <Header activeTab={activeTab} setActiveTab={changeTab} />
      <main id="#main" tabIndex={-1}>
        {activeTab === 0 ? <Projects /> :
          activeTab === 1 ? <div>Info</div> :
            <Settings
              darkMode={darkMode}
              setDarkMode={changeDarkMode}
              reduceAnimations={reduceAnimations}
              setReduceAnimations={setReduceAnimations}
            />}
      </main>
    </>
  );
}

export default App;
