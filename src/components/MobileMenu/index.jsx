import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
    list-style-type: none;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background-color: #fff;
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    font-size: 30px;
    text-transform: uppercase;
    line-height: 2;
    padding-top: 3rem;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    opacity: ${({ open }) => open ? '1' : '0'};
    visibility: ${({ open }) => open ? 'visible' : 'hidden'};
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0s ease 0.3s;
`;

export default function MobileMenu({ open }) {
    const currentPage = useLocation().pathname;

    return (
        <Ul className='mobile-menu' open={open}>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/resume">Resume</Link></li>
        </Ul>
    )
}