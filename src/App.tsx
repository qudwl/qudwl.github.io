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
    const animations = localStorage.getItem("reduceAnimations");
    if (darkMode) {
      changeDarkMode(darkMode === "true");
    } else {
      localStorage.setItem("darkMode", "false");
    }

    if (animations) {
      changeReduceAnimations(animations === "true");
    } else {
      localStorage.setItem("reduceAnimations", "false");
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
    setColorChanges(newValue);
  }

  const setColorChanges = (mode: boolean) => {
    if (mode) {
      document.documentElement.style.setProperty("--background-color", "#1C1C1C");
      document.documentElement.style.setProperty("--primary", "#fff");
      document.documentElement.style.setProperty("--card-background-color", "#505050");
    } else {
      document.documentElement.style.setProperty("--background-color", "#f2f2f2");
      document.documentElement.style.setProperty("--primary", "#000");
      document.documentElement.style.setProperty("--card-background-color", "#fff");
    }
  }

  const changeReduceAnimations = (newValue: boolean) => {
    setReduceAnimations(newValue);
    localStorage.setItem("reduceAnimations", newValue ? "true" : "false");
    setAnimations(newValue);
  }

  const setAnimations = (mode: boolean) => {
    if (mode) {
      document.documentElement.style.setProperty("--animation-duration", "0s");
    } else {
      document.documentElement.style.setProperty("--animation-duration", "0.15s");
    }
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
              setReduceAnimations={changeReduceAnimations}
            />}
      </main>
    </>
  );
}

export default App;
