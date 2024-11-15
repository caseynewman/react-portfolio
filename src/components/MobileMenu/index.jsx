import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
    list-style-type: none;
    position: fixed;
    flex-flow: column nowrap;
    background-color: #fff;
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    font-size: 30px;
    text-transform: uppercase;
    line-height: 2;
    width: 100%;
    height: 250px;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: -30px;
    right: 0;
    padding-top: 3rem;
    transition: transform 0.3s ease-in-out;
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