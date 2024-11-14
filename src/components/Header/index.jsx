import { Link } from "react-router-dom";
import Navigation from "../Navigation";
import './style.css'
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isMobile) {
        setIsSticky(true);
      } else if (!isMobile) {
        if (window.scrollY > 724) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`header ${isSticky ? 'sticky' : ''}`}>
        <Link to="/">
          <img className="logo" src="/assets/cn-header-logo.svg" alt="Casey Newman" />
        </Link>
        <Navigation />
      </nav>
    </>
  );
}