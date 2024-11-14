import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './style.css'

function NavTabs() {
  const currentPage = useLocation().pathname;

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  return (
    <>
      <li className='nav-menu-trigger' onClick={toggleMenu}>X</li>
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
            Resume
          </Link>
        </li>
      </ul>
    </>
  );
}

export default NavTabs;
