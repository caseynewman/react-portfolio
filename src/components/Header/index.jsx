import { Link, useLocation } from "react-router-dom";
import Navigation from "../Navigation";
import './style.css'
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (isMobile) {
        setIsSticky(true);
        setIsVisible(true);
      } else {
        const isHomePage = location.pathname === '/';
        if (isHomePage) {
          if (window.scrollY > 724) {
            setIsSticky(true);
            setIsVisible(true);
          } else {
            setIsSticky(false);
            setIsVisible(false);
          }
        } else {
          setIsSticky(true);
          setIsVisible(true);
        }
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  return (
    <>
      {isVisible && (
        <nav className={`header ${isSticky ? 'sticky' : ''}`}>
          <Link to="/">
            <img className="logo" src="/assets/cn-header-logo.svg" alt="Casey Newman" />
          </Link>
          <Navigation />
        </nav>
      )}
    </>
  );
}