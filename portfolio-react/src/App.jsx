import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import TechnicalSkills from './components/TechnicalSkills';
import Footer from './components/Footer';

function App() {

  useEffect(() => {
    // ── Disable right-click context menu ──
    const handleContextMenu = (e) => e.preventDefault();

    // ── Disable keyboard shortcuts ──
    const handleKeyDown = (e) => {
      const { ctrlKey, metaKey, shiftKey, keyCode, key } = e;
      const mod = ctrlKey || metaKey;

      // F12 – DevTools
      if (keyCode === 123) { e.preventDefault(); return; }
      // Ctrl/Cmd + Shift + I/J/C – DevTools
      if (mod && shiftKey && ['i', 'j', 'c', 'I', 'J', 'C'].includes(key)) { e.preventDefault(); return; }
      // Ctrl/Cmd + U – View Source
      if (mod && key.toLowerCase() === 'u') { e.preventDefault(); return; }
      // Ctrl/Cmd + S – Save Page
      if (mod && key.toLowerCase() === 's') { e.preventDefault(); return; }
      // Ctrl/Cmd + P – Print
      if (mod && key.toLowerCase() === 'p') { e.preventDefault(); return; }
      // Ctrl/Cmd + A – Select All
      if (mod && key.toLowerCase() === 'a') { e.preventDefault(); return; }
    };

    // ── Disable drag on images ──
    const handleDragStart = (e) => e.preventDefault();

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('dragstart', handleDragStart);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  return (
    <>
      <Navigation />
      <Hero />
      <Education />
      <Experience />
      <Expertise />
      <Projects />
      <TechnicalSkills />
      <Footer />
    </>
  );
}

export default App;

