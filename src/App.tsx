import React from 'react';
import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Settings from './components/Settings';

function App() {
  const [activeTab, setActiveTab] = React.useState(0);

  const changeTab = (index: number) => {
    setActiveTab(index);
    const main = document.getElementById('#main');
    if (main) {
      main.focus();
    }
  }

  return (
    <>
      <Header activeTab={activeTab} setActiveTab={changeTab} />
      <main id="#main" tabIndex={-1}>
        {activeTab === 0 ? <Projects /> : activeTab === 1 ? <div>Info</div> : <Settings />}
      </main>
    </>
  );
}

export default App;
