import './style.css';
import { useEffect, useRef } from 'react';

export default function Hero() {
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
        <div ref={bgRef} className='gradient'>
        <section className='hero'>
            <h1>Casey Newman</h1>
            <h2>Web Developer + Designer</h2>
        </section>
        </div>
    )
}