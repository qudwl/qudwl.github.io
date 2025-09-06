import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { useState, useRef, useEffect } from "react"

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const sections = [homeRef, aboutRef, skillsRef, projectsRef, contactRef];
  const [closestId, setClosestId] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let minDistance = Infinity;
      let currentClosestId = closestId;

      for (let i = 0; i < sections.length; i++) {
        if (sections[i]) {
          const rect = (sections[i].current as HTMLDivElement).getBoundingClientRect();
          const distance = Math.abs(rect.top);

          if (distance < minDistance) {
            minDistance = distance;
            currentClosestId = i;
          }
        }
      }
      setClosestId(currentClosestId);
    };

    window.addEventListener('scroll', handleScroll);

    // Initial check when the component mounts
    handleScroll();

    // 2. The cleanup is now simpler
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array still ensures this runs only once on mount

  return (
    <>
      <Header active={closestId} />
      <Home ref={homeRef} />
      <About ref={aboutRef} />
      <Skills ref={skillsRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
      <Footer />
    </>
  )
}

export default App
