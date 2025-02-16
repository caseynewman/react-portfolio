import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './style.css'
import HamburgerIcon from '../HamburgerIcon';
import MobileMenu from '../MobileMenu';

function NavTabs() {
  const currentPage = useLocation().pathname;

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [currentPage]);

  return (
    <>
      <li className='nav-menu-trigger'>
        <HamburgerIcon open={isOpen} onClick={toggleMenu} />
      </li>
      <ul className={`nav-tabs ${isOpen ? 'is-open' : ''}`}>
        <li className="nav-item">
          <Link
            to="/portfolio"
            className={currentPage === '/portfolio' ? 'nav-link-active' : 'nav-link'}
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/resume"
            className={currentPage === '/resume' ? 'nav-link-active' : 'nav-link'}
          >
            Tech Stack
          </Link>
        </li>
      </ul>
      <MobileMenu open={isOpen} />
    </>
  );
}

export default NavTabs;
