import { Link, useLocation } from "react-router-dom";
import Navigation from "../Navigation";
import './style.css'
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (isMobile) {
        setIsSticky(true);
      } else {
        const isHomePage = location.pathname === '/';
        if (isHomePage && window.scrollY > 724) {
          setIsSticky(true);
        } else if (!isHomePage) {
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
  }, [location.pathname]);

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