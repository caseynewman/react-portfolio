import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import './App.css'
import Footer from './components/Footer';
import { useEffect, useRef } from 'react';

function App() {
  const bgRef = useRef(null);

  useEffect(() => {
    const updateMousePosition = (event) => {
      if (!bgRef.current) return;
      const { clientX, clientY } = event;
      bgRef.current.style.setProperty('--x', `${clientX}px`);
      bgRef.current.style.setProperty('--y', `${clientY}px`);
    }

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <>
      <div ref={bgRef} className='gradient'>
        <header>
          <Header />
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default App
